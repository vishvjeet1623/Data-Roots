// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract DataRoots is AccessControl, Pausable, ReentrancyGuard {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    struct VaultData {
        bool isInitialized;
        address owner;
        string encryptedPrivateKey;
        bool isLocked;
        uint256 lastAccessTime;
    }

    struct DataRequest {
        uint256 id;
        address requester;
        string dataType;
        uint256 price;
        uint256 duration;
        uint256 timestamp;
        bool isActive;
    }

    struct AccessLog {
        address requester;
        string dataType;
        uint256 timestamp;
        uint256 earnings;
        string status;
    }

    mapping(address => VaultData) public dataVaults;
    mapping(address => mapping(address => bool)) public authorizedUsers;
    mapping(address => DataRequest[]) private dataRequests;
    mapping(address => AccessLog[]) private accessLogs;
    
    uint256 private requestCounter;
    uint256 public constant MAX_DURATION = 365 days;
    uint256 public constant MIN_DURATION = 1 days;

    event VaultCreated(address indexed owner, uint256 timestamp);
    event VaultUnlocked(address indexed owner, uint256 timestamp);
    event VaultLocked(address indexed owner, uint256 timestamp);
    event AccessKeyUpdated(address indexed owner, uint256 timestamp);
    event DataRequestCreated(
        uint256 indexed requestId, 
        address indexed requester, 
        address indexed target, 
        string dataType,
        uint256 timestamp
    );
    event AccessGranted(
        address indexed owner, 
        address indexed requester, 
        string dataType,
        uint256 timestamp
    );
    event AccessRevoked(
        address indexed owner, 
        address indexed requester, 
        string dataType,
        uint256 timestamp
    );
    event AllDataDeleted(address indexed owner, uint256 timestamp);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    modifier onlyVaultOwner(address vault) {
        require(msg.sender == dataVaults[vault].owner, "Not vault owner");
        _;
    }

    modifier vaultExists(address vault) {
        require(dataVaults[vault].isInitialized, "Vault does not exist");
        _;
    }

    function createVault(string calldata encryptedPrivateKey) 
        external 
        whenNotPaused 
        nonReentrant 
    {
        require(!dataVaults[msg.sender].isInitialized, "Vault already exists");
        require(bytes(encryptedPrivateKey).length > 0, "Invalid key");
        require(bytes(encryptedPrivateKey).length <= 1024, "Key too long");

        dataVaults[msg.sender] = VaultData({
            isInitialized: true,
            owner: msg.sender,
            encryptedPrivateKey: encryptedPrivateKey,
            isLocked: true,
            lastAccessTime: block.timestamp
        });

        emit VaultCreated(msg.sender, block.timestamp);
    }

    function updateAccessKey(string calldata currentKeyHash, string calldata newKeyHash) 
        external 
        whenNotPaused 
        nonReentrant
        vaultExists(msg.sender)
    {
        VaultData storage vault = dataVaults[msg.sender];
        require(
            keccak256(abi.encodePacked(currentKeyHash)) == 
            keccak256(abi.encodePacked(vault.encryptedPrivateKey)), 
            "Invalid current key"
        );
        require(bytes(newKeyHash).length > 0, "Invalid new key");
        require(bytes(newKeyHash).length <= 1024, "New key too long");
        
        vault.encryptedPrivateKey = newKeyHash;
        vault.lastAccessTime = block.timestamp;
        
        emit AccessKeyUpdated(msg.sender, block.timestamp);
    }

    function createDataRequest(
        address target,
        string calldata dataType,
        uint256 price,
        uint256 duration
    ) 
        external 
        whenNotPaused 
        nonReentrant
        vaultExists(target)
    {
        require(duration >= MIN_DURATION && duration <= MAX_DURATION, "Invalid duration");
        require(bytes(dataType).length > 0, "Invalid data type");
        require(target != msg.sender, "Cannot request own data");
        
        requestCounter++;
        DataRequest memory newRequest = DataRequest({
            id: requestCounter,
            requester: msg.sender,
            dataType: dataType,
            price: price,
            duration: duration,
            timestamp: block.timestamp,
            isActive: true
        });
        
        dataRequests[target].push(newRequest);
        
        emit DataRequestCreated(
            requestCounter, 
            msg.sender, 
            target, 
            dataType,
            block.timestamp
        );
    }

    function getIncomingRequests(address owner) 
        external 
        view 
        vaultExists(owner)
        returns (DataRequest[] memory) 
    {
        return dataRequests[owner];
    }

    function getAccessLogs(address owner) 
        external 
        view 
        vaultExists(owner)
        returns (AccessLog[] memory) 
    {
        return accessLogs[owner];
    }

    function revokeAccess(string calldata dataType) 
        external 
        whenNotPaused 
        nonReentrant
        vaultExists(msg.sender)
    {
        require(bytes(dataType).length > 0, "Invalid data type");
        
        emit AccessRevoked(msg.sender, address(0), dataType, block.timestamp);
    }

    function revokeAllAccess() 
        external 
        whenNotPaused 
        nonReentrant
        vaultExists(msg.sender)
    {
        VaultData storage vault = dataVaults[msg.sender];
        vault.lastAccessTime = block.timestamp;
        
        emit AccessRevoked(msg.sender, address(0), "all", block.timestamp);
    }

    function deleteAllData() 
        external 
        whenNotPaused 
        nonReentrant
        vaultExists(msg.sender)
    {
        delete dataVaults[msg.sender];
        
        emit AllDataDeleted(msg.sender, block.timestamp);
    }

    function pause() external onlyRole(ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    // View functions
    function isAuthorized(address vault, address user) 
        external 
        view 
        returns (bool) 
    {
        return authorizedUsers[vault][user];
    }

    function getVaultStatus(address vault) 
        external 
        view 
        returns (
            bool exists,
            bool isLocked,
            uint256 lastAccess
        ) 
    {
        VaultData storage vaultData = dataVaults[vault];
        return (
            vaultData.isInitialized,
            vaultData.isLocked,
            vaultData.lastAccessTime
        );
    }
}
