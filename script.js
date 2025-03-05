class DataRoots {
    constructor() {
        this.provider = null;
        this.signer = null;
        this.contract = null;
        this.account = null;
        this.theme = localStorage.getItem('theme') || 'light';
        
        // Contract details
        this.contractAddress = '0x30C5513dbAa548d840DF6c888f7756dc63d7e5AE'; // Add your contract address here
        this.initializeEventListeners();
        this.applyTheme();
    }

    async initializeWeb3() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                this.provider = new ethers.providers.Web3Provider(window.ethereum);
                const accounts = await this.provider.send("eth_requestAccounts", []);
                this.signer = this.provider.getSigner();
                this.account = accounts[0];
                this.initializeContract();
                this.updateWalletStatus();
                this.loadVaultData();

                window.ethereum.on('accountsChanged', (accounts) => {
                    if (accounts.length === 0) {
                        this.disconnectWallet();
                    } else {
                        this.account = accounts[0];
                        this.updateWalletStatus();
                        this.loadVaultData();
                    }
                });

                return true;
            } catch (error) {
                this.showNotification('Failed to connect wallet: ' + error.message, 'error');
                return false;
            }
        } else {
            this.showNotification('Please install MetaMask to use this application', 'error');
            return false;
        }
    }

    disconnectWallet() {
        this.provider = null;
        this.signer = null;
        this.contract = null;
        this.account = null;
        this.updateWalletStatus();
        this.showNotification('Wallet disconnected', 'success');
        document.getElementById('vault-management').style.display = 'none';
        document.getElementById('vault-creation').style.display = 'block';
    }

    initializeContract() {
        const abi = [
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "requestId",
                        "type": "bytes32"
                    }
                ],
                "name": "acceptDataRequest",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "AccessControlBadConfirmation",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "neededRole",
                        "type": "bytes32"
                    }
                ],
                "name": "AccessControlUnauthorizedAccount",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "target",
                        "type": "address"
                    }
                ],
                "name": "AddressEmptyCode",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "platform",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "encryptedProfileId",
                        "type": "string"
                    }
                ],
                "name": "addSocialProfile",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "dataType",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "paymentToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "duration",
                        "type": "uint256"
                    }
                ],
                "name": "createDataRequest",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "encryptedPrivateKey",
                        "type": "string"
                    }
                ],
                "name": "createVault",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "implementation",
                        "type": "address"
                    }
                ],
                "name": "ERC1967InvalidImplementation",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ERC1967NonPayable",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "FailedCall",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "InvalidInitialization",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "NotInitializing",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "UUPSUnauthorizedCallContext",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "slot",
                        "type": "bytes32"
                    }
                ],
                "name": "UUPSUnsupportedProxiableUUID",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "BrowserDataUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "asker",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "requestId",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "duration",
                        "type": "uint256"
                    }
                ],
                "name": "DataAccessGranted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "asker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "accessType",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "name": "DataAccessLogged",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "asker",
                        "type": "address"
                    }
                ],
                "name": "DataAccessRevoked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "asker",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "requestId",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "dataType",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    }
                ],
                "name": "DataRequestCreated",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "grantRole",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "initialize",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint64",
                        "name": "version",
                        "type": "uint64"
                    }
                ],
                "name": "Initialized",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "accessType",
                        "type": "string"
                    }
                ],
                "name": "logDataAccess",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pause",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "Paused",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "callerConfirmation",
                        "type": "address"
                    }
                ],
                "name": "renounceRole",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "revokeRole",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "previousAdminRole",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "newAdminRole",
                        "type": "bytes32"
                    }
                ],
                "name": "RoleAdminChanged",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "RoleGranted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "RoleRevoked",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "platform",
                        "type": "string"
                    }
                ],
                "name": "SocialProfileAdded",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "unpause",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "Unpaused",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "encryptedBrowserType",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "encryptedHistoryHash",
                        "type": "string"
                    }
                ],
                "name": "updateBrowserData",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "implementation",
                        "type": "address"
                    }
                ],
                "name": "Upgraded",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newImplementation",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "upgradeToAndCall",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "VaultCreated",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "ADMIN_ROLE",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "DEFAULT_ADMIN_ROLE",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "asker",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "getAccessLog",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "asker",
                        "type": "address"
                    }
                ],
                "name": "getDataAccessDetails",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastAccessTimestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "accessCount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    }
                ],
                "name": "getRoleAdmin",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "hasRole",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "proxiableUUID",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "UPGRADE_INTERFACE_VERSION",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "UPGRADER_ROLE",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]; // Add your contract ABI here
        this.contract = new ethers.Contract(this.contractAddress, abi, this.signer);
        this.setupContractEventListeners();
    }

    setupContractEventListeners() {
        this.contract.on('VaultCreated', (owner) => {
            if (owner === this.account) {
                this.showNotification('Vault created successfully', 'success');
                this.loadVaultData();
            }
        });

        this.contract.on('DataRequestCreated', (asker, owner, requestId, dataType, price) => {
            if (owner === this.account) {
                this.showNotification('New data request received', 'info');
                this.loadIncomingRequests();
            }
        });

        this.contract.on('DataAccessGranted', (owner, asker, requestId, duration) => {
            if (asker === this.account || owner === this.account) {
                this.showNotification('Data access granted', 'success');
                this.loadActiveAccess();
            }
        });
    }

    async loadVaultData() {
        try {
            const vault = await this.contract.dataVaults(this.account);
            if (vault.isInitialized) {
                document.getElementById('vault-creation').style.display = 'none';
                document.getElementById('vault-management').style.display = 'block';
                this.loadSocialProfiles();
                this.loadBrowserData();
                this.loadIds();
            }
        } catch (error) {
            console.error('Error loading vault data:', error);
        }
    }

    async createVault() {
        try {
            const privateKey = ethers.Wallet.createRandom().privateKey;
            const encryptedKey = await this.encryptData(privateKey);
            await this.contract.createVault(encryptedKey);
        } catch (error) {
            this.showNotification('Failed to create vault: ' + error.message, 'error');
        }
    }

    async addSocialProfile(platform, profileId) {
        try {
            const encryptedId = await this.encryptData(profileId);
            await this.contract.addSocialProfile(platform, encryptedId);
            this.showNotification('Social profile added', 'success');
        } catch (error) {
            this.showNotification('Failed to add social profile: ' + error.message, 'error');
        }
    }

    async updateBrowserData(browserType) {
        try {
            const timestamp = Date.now();
            const dataHash = ethers.utils.id(browserType + timestamp);
            const encryptedType = await this.encryptData(browserType);
            const encryptedHash = await this.encryptData(dataHash);
            await this.contract.updateBrowserData(encryptedType, encryptedHash);
            this.showNotification('Browser data updated', 'success');
        } catch (error) {
            this.showNotification('Failed to update browser data: ' + error.message, 'error');
        }
    }

    async createDataRequest(targetAddress, dataType, paymentToken, price, duration) {
        try {
            await this.contract.createDataRequest(
                targetAddress,
                dataType,
                paymentToken || ethers.constants.AddressZero,
                ethers.utils.parseEther(price.toString()),
                duration
            );
            this.showNotification('Data request created', 'success');
        } catch (error) {
            this.showNotification('Failed to create request: ' + error.message, 'error');
        }
    }

    async acceptDataRequest(requestId) {
        try {
            await this.contract.acceptDataRequest(requestId);
        } catch (error) {
            this.showNotification('Failed to accept request: ' + error.message, 'error');
        }
    }

    async loadActiveAccess() {
        try {
            const accessList = document.getElementById('active-access-list');
            accessList.innerHTML = '';

            // Implementation depends on your contract's query functions
            // This is a placeholder for the actual implementation
        } catch (error) {
            console.error('Error loading active access:', error);
        }
    }

    // Helper functions
    async encryptData(data) {
        // Implement your encryption logic here
        // This is a placeholder that simply returns the data
        // In production, use proper encryption
        return ethers.utils.hexlify(ethers.utils.toUtf8Bytes(data));
    }

    async decryptData(encryptedData) {
        // Implement your decryption logic here
        // This is a placeholder that simply returns the data
        // In production, use proper decryption
        return ethers.utils.toUtf8String(ethers.utils.arrayify(encryptedData));
    }

    updateWalletStatus() {
        const addressElem = document.getElementById('wallet-address');
        const connectBtn = document.getElementById('connect-wallet');
        const disconnectBtn = document.getElementById('disconnect-wallet');
        
        if (this.account) {
            addressElem.textContent = `${this.account.substring(0, 6)}...${this.account.substring(38)}`;
            connectBtn.style.display = 'none';
            disconnectBtn.style.display = 'block';
        } else {
            addressElem.textContent = 'Not connected';
            connectBtn.style.display = 'block';
            disconnectBtn.style.display = 'none';
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        setTimeout(() => {
            notification.className = 'notification';
        }, 3000);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.theme);
        const thumb = document.querySelector('.theme-toggle-thumb');
        if (thumb) {
            thumb.style.transform = this.theme === 'dark' ? 'translateX(20px)' : 'translateX(0)';
        }
    }

    initializeEventListeners() {
        // Wallet connection
        document.getElementById('connect-wallet').addEventListener('click', () => this.initializeWeb3());
        document.getElementById('disconnect-wallet').addEventListener('click', () => this.disconnectWallet());
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());

        // Vault management
        document.getElementById('create-vault').addEventListener('click', () => this.createVault());
        
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const tabGroup = e.target.closest('.tabs').parentElement;
                const targetTab = e.target.dataset.tab;
                
                // Update active tab button
                tabGroup.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Show target content
                tabGroup.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                tabGroup.querySelector(`#${targetTab}-tab`).style.display = 'block';
            });
        });

        // Form submissions
        document.getElementById('social-profile-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const platform = document.getElementById('platform').value;
            const profileId = document.getElementById('profile-id').value;
            this.addSocialProfile(platform, profileId);
        });

        document.getElementById('browser-data-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const browserType = document.getElementById('browser-type').value;
            this.updateBrowserData(browserType);
        });

        document.getElementById('data-request-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const targetAddress = document.getElementById('target-address').value;
            const dataType = document.getElementById('data-type').value;
            const paymentToken = document.getElementById('payment-token').value;
            const price = document.getElementById('price').value;
            const duration = document.getElementById('duration').value;
            this.createDataRequest(targetAddress, dataType, paymentToken, price, duration);
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.dataRoots = new DataRoots();
});
