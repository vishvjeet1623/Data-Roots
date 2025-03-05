
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DataRoots is 
    Initializable, 
    PausableUpgradeable, 
    AccessControlUpgradeable,
    ReentrancyGuardUpgradeable,
    UUPSUpgradeable 
{
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

    struct SocialProfile {
        string platform;
        string encryptedProfileId;
        bool isVerified;
    }

    struct BrowserData {
        string encryptedBrowserType;
        string encryptedHistoryHash;
        uint256 lastUpdateTimestamp;
    }

    struct DataRequest {
        address asker;
        string dataType;
        address paymentToken;
        uint256 price;
        uint256 duration;
        uint256 requestTimestamp;
        bool isActive;
        bool isAccepted;
    }

    struct DataAccess {
        uint256 startTime;
        uint256 endTime;
        uint256 lastAccessTimestamp;
        uint256 accessCount;
        mapping(uint256 => string) accessLogs;
    }

    struct DataVault {
        address owner;
        string encryptedPrivateKey;
        mapping(string => SocialProfile) socialProfiles;
        mapping(string => string) encryptedIds;
        BrowserData browserData;
        mapping(bytes32 => DataRequest) dataRequests;
        mapping(address => DataAccess) accessRegistry;
        bool isInitialized;
    }

    // Main storage
    mapping(address => DataVault) private dataVaults;
    
    // Events
    event VaultCreated(address indexed owner);
    event SocialProfileAdded(address indexed owner, string platform);
    event BrowserDataUpdated(address indexed owner);
    event DataRequestCreated(
        address indexed asker, 
        address indexed owner,
        bytes32 indexed requestId,
        string dataType,
        uint256 price
    );
    event DataAccessGranted(
        address indexed owner,
        address indexed asker,
        bytes32 indexed requestId,
        uint256 duration
    );
    event DataAccessRevoked(address indexed owner, address indexed asker);
    event DataAccessLogged(
        address indexed owner,
        address indexed asker,
        string accessType,
        uint256 timestamp
    );

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __Pausable_init();
        __AccessControl_init();
        __ReentrancyGuard_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);
    }

    // Vault Management Functions
    function createVault(string memory encryptedPrivateKey) external {
        require(!dataVaults[msg.sender].isInitialized, "Vault already exists");
        
        DataVault storage vault = dataVaults[msg.sender];
        vault.owner = msg.sender;
        vault.encryptedPrivateKey = encryptedPrivateKey;
        vault.isInitialized = true;

        emit VaultCreated(msg.sender);
    }

    function addSocialProfile(
        string memory platform,
        string memory encryptedProfileId
    ) external {
        require(dataVaults[msg.sender].isInitialized, "Vault not initialized");
        
        DataVault storage vault = dataVaults[msg.sender];
        vault.socialProfiles[platform] = SocialProfile({
            platform: platform,
            encryptedProfileId: encryptedProfileId,
            isVerified: false
        });

        emit SocialProfileAdded(msg.sender, platform);
    }

    function updateBrowserData(
        string memory encryptedBrowserType,
        string memory encryptedHistoryHash
    ) external {
        require(dataVaults[msg.sender].isInitialized, "Vault not initialized");
        
        DataVault storage vault = dataVaults[msg.sender];
        vault.browserData = BrowserData({
            encryptedBrowserType: encryptedBrowserType,
            encryptedHistoryHash: encryptedHistoryHash,
            lastUpdateTimestamp: block.timestamp
        });

        emit BrowserDataUpdated(msg.sender);
    }

    // Data Request Functions
    function createDataRequest(
        address owner,
        string memory dataType,
        address paymentToken,
        uint256 price,
        uint256 duration
    ) external nonReentrant whenNotPaused returns (bytes32) {
        require(dataVaults[owner].isInitialized, "Target vault not initialized");
        require(duration > 0, "Invalid duration");
        
        bytes32 requestId = keccak256(
            abi.encodePacked(
                msg.sender,
                owner,
                dataType,
                block.timestamp
            )
        );

        DataVault storage vault = dataVaults[owner];
        require(!vault.dataRequests[requestId].isActive, "Request already exists");

        vault.dataRequests[requestId] = DataRequest({
            asker: msg.sender,
            dataType: dataType,
            paymentToken: paymentToken,
            price: price,
            duration: duration,
            requestTimestamp: block.timestamp,
            isActive: true,
            isAccepted: false
        });

        emit DataRequestCreated(msg.sender, owner, requestId, dataType, price);
        return requestId;
    }

    function acceptDataRequest(bytes32 requestId) external nonReentrant whenNotPaused {
        DataVault storage vault = dataVaults[msg.sender];
        require(vault.isInitialized, "Vault not initialized");
        
        DataRequest storage request = vault.dataRequests[requestId];
        require(request.isActive, "Request not active");
        require(!request.isAccepted, "Request already accepted");

        // Handle payment
        if (request.paymentToken != address(0)) {
            IERC20 token = IERC20(request.paymentToken);
            require(
                token.transferFrom(request.asker, msg.sender, request.price),
                "Payment failed"
            );
        }

        // Setup access
        DataAccess storage access = vault.accessRegistry[request.asker];
        access.startTime = block.timestamp;
        access.endTime = block.timestamp + request.duration;
        access.lastAccessTimestamp = 0;
        access.accessCount = 0;

        request.isAccepted = true;

        emit DataAccessGranted(
            msg.sender,
            request.asker,
            requestId,
            request.duration
        );
    }

    function logDataAccess(
        address owner,
        string memory accessType
    ) external {
        DataVault storage vault = dataVaults[owner];
        require(vault.isInitialized, "Vault not initialized");
        
        DataAccess storage access = vault.accessRegistry[msg.sender];
        require(access.startTime > 0, "No access granted");
        require(block.timestamp <= access.endTime, "Access expired");

        access.accessLogs[access.accessCount] = accessType;
        access.lastAccessTimestamp = block.timestamp;
        access.accessCount++;

        emit DataAccessLogged(owner, msg.sender, accessType, block.timestamp);
    }

    // View Functions
    function getDataAccessDetails(address asker) external view returns (
        uint256 startTime,
        uint256 endTime,
        uint256 lastAccessTimestamp,
        uint256 accessCount
    ) {
        DataVault storage vault = dataVaults[msg.sender];
        require(vault.isInitialized, "Vault not initialized");
        
        DataAccess storage access = vault.accessRegistry[asker];
        return (
            access.startTime,
            access.endTime,
            access.lastAccessTimestamp,
            access.accessCount
        );
    }

    function getAccessLog(
        address asker,
        uint256 index
    ) external view returns (string memory) {
        DataVault storage vault = dataVaults[msg.sender];
        require(vault.isInitialized, "Vault not initialized");
        
        DataAccess storage access = vault.accessRegistry[asker];
        require(index < access.accessCount, "Invalid index");

        return access.accessLogs[index];
    }

    // Admin Functions
    function pause() external onlyRole(ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyRole(UPGRADER_ROLE)
    {}
}
