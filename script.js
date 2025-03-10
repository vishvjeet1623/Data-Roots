class DataRoots {
    constructor() {
        this.provider = null;
        this.signer = null;
        this.contract = null;
        this.account = null;
        this.theme = localStorage.getItem('theme') || 'light';
        this.vaultUnlocked = false;
        this.isAdmin = false;
        this.vaultStatus = {
            exists: false,
            isUnlocked: false
        };
        
        // Updated contract details for EduChain testnet
        this.contractAddress = '0x245453c95F6E3741140486e3670E6a81EaB5a503';
        this.contractABI = [
            // Constructor
            {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
            
            // Errors
            {"inputs":[],"name":"AccessControlBadConfirmation","type":"error"},
            {"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32","name":"neededRole","type":"bytes32"}],"name":"AccessControlUnauthorizedAccount","type":"error"},
            
            // Events
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"string","name":"dataType","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AccessGranted","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AccessKeyUpdated","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"string","name":"dataType","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AccessRevoked","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AllDataDeleted","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"DataRequestCreated","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"VaultCreated","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"VaultLocked","type":"event"},
            {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"VaultUnlocked","type":"event"},
            
            // Functions
            {"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorizedUsers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"string","name":"dataType","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"createDataRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"string","name":"encryptedPrivateKey","type":"string"}],"name":"createVault","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"dataVaults","outputs":[{"internalType":"bool","name":"isInitialized","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"encryptedPrivateKey","type":"string"},{"internalType":"bool","name":"isLocked","type":"bool"},{"internalType":"uint256","name":"lastAccessTime","type":"uint256"}],"stateMutability":"view","type":"function"},
            {"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
            {"inputs":[],"name":"deleteAllData","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getAccessLogs","outputs":[{"components":[{"internalType":"address","name":"requester","type":"address"},{"internalType":"string","name":"dataType","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"earnings","type":"uint256"},{"internalType":"string","name":"status","type":"string"}],"internalType":"struct DataRoots.AccessLog[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"getIncomingRequests","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"requester","type":"address"},{"internalType":"string","name":"dataType","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"internalType":"struct DataRoots.DataRequest[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"address","name":"vault","type":"address"}],"name":"getVaultStatus","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"bool","name":"isLocked","type":"bool"},{"internalType":"uint256","name":"lastAccess","type":"uint256"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"address","name":"vault","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
            {"inputs":[],"name":"MAX_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
            {"inputs":[],"name":"MIN_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
            {"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
            {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"callerConfirmation","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"string","name":"dataType","type":"string"}],"name":"revokeAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[],"name":"revokeAllAccess","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
            {"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},
            {"inputs":[{"internalType":"string","name":"currentKeyHash","type":"string"},{"internalType":"string","name":"newKeyHash","type":"string"}],"name":"updateAccessKey","outputs":[],"stateMutability":"nonpayable","type":"function"}
        ];
        this.initializeEventListeners();
        this.applyTheme();
    }

    async initializeWeb3() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const connectBtn = document.getElementById('connect-wallet');
                const btnText = connectBtn.textContent || 'Connect Wallet';
                connectBtn.innerHTML = `${btnText}<span class="wallet-loading"></span>`;
                connectBtn.disabled = true;
                
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                
                // Initialize provider and signer
                this.provider = new ethers.providers.Web3Provider(window.ethereum);
                const accounts = await this.provider.send("eth_requestAccounts", []);
                this.signer = this.provider.getSigner();
                this.account = accounts[0];
                
                // Initialize contract
                const initialized = await this.initializeContract();
                if (!initialized) {
                    this.showNotification('Failed to initialize contract. Please try again.', 'error');
                    return false;
                }
                
                // Update UI and check status
                await this.checkAdminStatus();
                this.updateWalletStatus();
                await this.checkVaultStatus();

                // Set up account change listener
                window.ethereum.on('accountsChanged', (accounts) => {
                    if (accounts.length === 0) {
                        this.disconnectWallet();
                    } else {
                        this.account = accounts[0];
                        this.updateWalletStatus();
                        this.checkVaultStatus();
                        this.checkAdminStatus();
                    }
                });

                return true;
            } catch (error) {
                console.error('Failed to connect wallet:', error);
                this.showNotification('Failed to connect wallet: ' + error.message, 'error');
                return false;
            } finally {
                const connectBtn = document.getElementById('connect-wallet');
                connectBtn.innerHTML = connectBtn.textContent || 'Connect Wallet';
                connectBtn.disabled = false;
            }
        } else {
            this.showNotification('Please install MetaMask to use this application', 'error');
            return false;
        }
    }

    async checkAdminStatus() {
        if (!this.contract) return;
        try {
            const adminRole = await this.contract.ADMIN_ROLE();
            this.isAdmin = await this.contract.hasRole(adminRole, this.account);
            this.updateAdminUI();
        } catch (error) {
            console.error('Error checking admin status:', error);
        }
    }

    updateAdminUI() {
        const adminPanel = document.getElementById('admin-panel');
        if (adminPanel) {
            adminPanel.style.display = this.isAdmin ? 'block' : 'none';
        }
    }

    async checkVaultStatus() {
        if (!this.contract || !this.account) return;
        try {
            console.log('Debug - Checking vault status');
            console.log('Debug - Account:', this.account);
            console.log('Debug - Contract address:', this.contract.address);
            
            // Add network check
            const network = await this.provider.getNetwork();
            console.log('Debug - Current network:', network);
            
            // Verify contract code exists
            const code = await this.provider.getCode(this.contract.address);
            console.log('Debug - Contract code exists:', code !== '0x');
            
            if (code === '0x') {
                console.error('No contract code at specified address');
                this.vaultStatus.exists = false;
                return;
            }

            try {
                // Try direct call first
            const vault = await this.contract.dataVaults(this.account);
                console.log('Debug - Direct vault query result:', vault);
                
                this.vaultStatus.exists = Boolean(vault && vault.isInitialized);
            this.vaultStatus.isUnlocked = false;
            
            if (this.vaultStatus.exists) {
                    this.showNotification('Vault found. Please unlock your vault to continue.', 'info');
                } else {
                    this.showNotification('No vault found. You can create one now.', 'info');
                }
            } catch (error) {
                console.log('Debug - Vault query error:', error);
                
                // Handle specific error cases
                if (error.code === 'CALL_EXCEPTION') {
                    this.vaultStatus.exists = false;
                    this.showNotification('No vault found. You can create one now.', 'info');
                } else {
                    console.error('Unexpected error:', error);
                    throw error;
                }
            }
        } catch (error) {
            console.error('Error checking vault status:', error);
            this.vaultStatus.exists = false;
        } finally {
            await this.ensureUIElements();
            this.updateVaultUI();
        }
    }

    async updateVaultUI() {
        // First check if elements exist
        const vaultCreation = document.getElementById('vault-creation');
        const vaultAuth = document.getElementById('vault-auth');
        const vaultContent = document.getElementById('vault-content');

        // Log which elements are missing for debugging
        if (!vaultCreation) console.warn('Missing vault-creation element');
        if (!vaultAuth) console.warn('Missing vault-auth element');
        if (!vaultContent) console.warn('Missing vault-content element');

        // Only proceed with elements that exist
        if (!this.account) {
            if (vaultCreation) vaultCreation.style.display = 'none';
            if (vaultAuth) vaultAuth.style.display = 'none';
            if (vaultContent) vaultContent.style.display = 'none';
            return;
        }

        try {
            // Check if vault exists
            const vault = await this.contract.dataVaults(this.account);
            console.log('Debug - Vault status:', vault);

            if (!vault.isInitialized) {
                // No vault exists - show creation form
                if (vaultCreation) vaultCreation.style.display = 'block';
                if (vaultAuth) vaultAuth.style.display = 'none';
                if (vaultContent) vaultContent.style.display = 'none';
        } else if (!this.vaultStatus.isUnlocked) {
                // Vault exists but is locked - show auth form
                if (vaultCreation) vaultCreation.style.display = 'none';
                if (vaultAuth) vaultAuth.style.display = 'block';
                if (vaultContent) vaultContent.style.display = 'none';
        } else {
                // Vault is unlocked - show content
                if (vaultCreation) vaultCreation.style.display = 'none';
                if (vaultAuth) vaultAuth.style.display = 'none';
                if (vaultContent) vaultContent.style.display = 'block';
            }
        } catch (error) {
            console.error('Error checking vault status:', error);
            this.showNotification('Error checking vault status', 'error');
        }
    }

    generateRecoveryPhrase() {
        const words = [
            'abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse',
            'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act'
        ];
        const phrase = Array.from({ length: 5 }, () => words[Math.floor(Math.random() * words.length)]);
        const recoveryPhraseElement = document.getElementById('vault-recovery-phrase');
        
        // Clear existing content
        recoveryPhraseElement.innerHTML = '';
        
        // Create grid container
        const gridContainer = document.createElement('div');
        gridContainer.style.display = 'grid';
        gridContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        gridContainer.style.gap = '0.5rem';
        gridContainer.style.width = '100%';
        
        // Add each word as a div
        phrase.forEach((word, index) => {
            const wordDiv = document.createElement('div');
            wordDiv.style.backgroundColor = 'var(--bg-primary)';
            wordDiv.style.padding = '0.5rem';
            wordDiv.style.borderRadius = '4px';
            wordDiv.style.textAlign = 'center';
            wordDiv.style.fontSize = '0.9rem';
            wordDiv.style.border = '1px solid var(--border-color)';
            wordDiv.textContent = `${index + 1}. ${word}`;
            gridContainer.appendChild(wordDiv);
        });
        
        recoveryPhraseElement.appendChild(gridContainer);
        return phrase.join(' ');
    }

    async createVault(event) {
        event.preventDefault();
        if (!this.account) {
            this.showNotification('Please connect your wallet first', 'error');
            return;
        }

        try {
            console.log('Debug - Creating vault for account:', this.account);

            const accessKey = document.getElementById('vault-access-key').value;
            const confirmKey = document.getElementById('vault-access-key-confirm').value;

            if (!accessKey || !confirmKey) {
                this.showNotification('Please fill in all fields', 'error');
                return;
            }

            if (accessKey !== confirmKey) {
                this.showNotification('Access keys do not match', 'error');
                return;
        }

            // Check if vault already exists
            const existingVault = await this.contract.dataVaults(this.account);
            if (existingVault.isInitialized) {
                this.showNotification('Vault already exists for this account', 'error');
                return;
            }

            // Hash the access key using a CSP-compliant method
            const encoder = new TextEncoder();
            const data = encoder.encode(accessKey);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashedKey = '0x' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            
            // Get current network to verify connection
            const network = await this.provider.getNetwork();
            console.log('Debug - Current network:', network);

            // Check balance
            const balance = await this.provider.getBalance(this.account);
            console.log('Debug - Account balance:', ethers.utils.formatEther(balance), 'EDU');

            // Estimate gas
            let gasEstimate;
            try {
                gasEstimate = await this.contract.estimateGas.createVault(hashedKey);
                console.log('Debug - Estimated gas:', gasEstimate.toString());
            } catch (gasError) {
                console.error('Gas estimation failed:', gasError);
                this.showNotification('Failed to estimate gas. Please make sure you have enough EDU tokens.', 'error');
                return;
            }

            // Prepare transaction with explicit gas settings
            const gasPrice = await this.provider.getGasPrice();
            console.log('Debug - Current gas price:', ethers.utils.formatUnits(gasPrice, 'gwei'), 'Gwei');

            const txParams = {
                gasLimit: gasEstimate.mul(120).div(100), // Add 20% buffer to gas estimate
                gasPrice: gasPrice
            };

            console.log('Debug - Transaction parameters:', {
                gasLimit: txParams.gasLimit.toString(),
                gasPrice: ethers.utils.formatUnits(txParams.gasPrice, 'gwei'),
                estimatedCost: ethers.utils.formatEther(txParams.gasLimit.mul(txParams.gasPrice))
            });

            // Check if user has enough balance for gas
            const estimatedCost = txParams.gasLimit.mul(txParams.gasPrice);
            if (balance.lt(estimatedCost)) {
                this.showNotification(`Insufficient EDU for gas. Need ${ethers.utils.formatEther(estimatedCost)} EDU`, 'error');
                return;
            }

            // Send transaction
            this.showNotification('Creating vault... Please confirm the transaction in MetaMask', 'info');
            
            const tx = await this.contract.createVault(hashedKey, txParams);
            console.log('Debug - Transaction sent:', tx.hash);
            
            this.showNotification('Transaction submitted. Waiting for confirmation...', 'info');
            
            const receipt = await tx.wait();
            console.log('Debug - Transaction receipt:', receipt);
            
            if (receipt.status === 1) {
            this.vaultStatus.exists = true;
            this.vaultStatus.isUnlocked = true;
            this.updateVaultUI();
            this.showNotification('Vault created successfully', 'success');
                await this.loadVaultData();
                } else {
                throw new Error('Transaction failed');
            }
        } catch (error) {
            console.error('Detailed error information:', error);
            
            if (error.code === 'CALL_EXCEPTION') {
                this.showNotification('Transaction reverted. Please check your EDU balance and try again.', 'error');
            } else if (error.message.includes('user rejected')) {
                this.showNotification('Transaction was rejected by user', 'error');
            } else if (error.message.includes('insufficient funds')) {
                this.showNotification('Insufficient EDU for gas fees. Please ensure you have enough EDU.', 'error');
            } else if (error.message.includes('Internal JSON-RPC error')) {
                // Handle specific RPC errors
                const errorMessage = error.data?.message || error.message;
                if (errorMessage.includes('execution reverted')) {
                    this.showNotification('Contract execution reverted. Please check if you meet all requirements.', 'error');
            } else {
                    this.showNotification('Network error. Please try again or check your connection.', 'error');
                }
            } else {
                this.showNotification(`Failed to create vault: ${error.message}`, 'error');
            }
        }
    }

    async unlockVault() {
        const vaultKey = document.getElementById('vault-key');
        if (!vaultKey || !vaultKey.value) {
            this.showNotification('Please enter your vault access key', 'error');
            return;
        }

        try {
            console.log('Debug - Attempting to unlock vault');
            
            // Get vault data
            const vault = await this.contract.dataVaults(this.account);
            console.log('Debug - Vault data:', vault);
            
            if (!vault || !vault.isInitialized) {
                this.showNotification('No vault found for this account. Please create one first.', 'error');
                this.vaultStatus.exists = false;
                this.updateVaultUI();
                return;
            }

            // Hash the access key using a CSP-compliant method
            const encoder = new TextEncoder();
            const data = encoder.encode(vaultKey.value);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashedKey = '0x' + hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            // Compare the hashed key with the stored one
            if (hashedKey === vault.encryptedPrivateKey) {
                this.vaultStatus.isUnlocked = true;
                this.updateVaultUI();
                this.showNotification('Vault unlocked successfully', 'success');
                await this.loadVaultData();
            } else {
                this.showNotification('Invalid access key', 'error');
            }
        } catch (error) {
            console.error('Failed to unlock vault:', error);
            this.showNotification('Failed to unlock vault: ' + error.message, 'error');
        }
    }

    async loadVaultData() {
        if (!this.account) return;

        try {
            console.log('Debug - Loading vault data for account:', this.account);
            
            // Get vault data
            const vault = await this.contract.dataVaults(this.account);
            console.log('Debug - Retrieved vault data:', vault);

            if (!vault.isInitialized) {
                console.log('Debug - Vault not initialized');
                document.getElementById('vault-creation').style.display = 'block';
                document.getElementById('vault-content').style.display = 'none';
                return;
            }

            // Update UI visibility
            document.getElementById('vault-creation').style.display = 'none';
            document.getElementById('vault-auth').style.display = 'none';
            document.getElementById('vault-content').style.display = 'block';

            // Load all data sections
            await Promise.all([
                this.loadSocialProfiles(),
                this.loadBrowserData(),
                this.loadPersonalIds(),
                this.loadActiveAccess()
            ]);

        } catch (error) {
            console.error('Error loading vault data:', error);
            this.showNotification('Failed to load vault data: ' + error.message, 'error');
        }
    }

    async loadSocialProfiles() {
        const socialProfilesList = document.getElementById('social-profiles-list');
        if (!socialProfilesList) {
            console.warn('Social profiles list element not found');
            return;
        }

        try {
            // Show loading state
            socialProfilesList.innerHTML = '<div class="data-list-item">Loading profiles...</div>';
            
            // Get vault data
            const vault = await this.contract.dataVaults(this.account);
            
            // For demonstration, show sample data
            // In production, you would fetch this from the contract
            socialProfilesList.innerHTML = `
                <div class="data-list-item">
                    <div class="data-item-content">
                        <span class="data-item-title">Twitter</span>
                        <span class="data-item-value">@${this.account.substring(0, 6)}</span>
                    </div>
                    <button class="secondary-button" onclick="dataRoots.revokeAccess('twitter')">Revoke Access</button>
                </div>
            `;
        } catch (error) {
            console.error('Error loading social profiles:', error);
            socialProfilesList.innerHTML = '<div class="data-list-item error">Failed to load profiles</div>';
        }
    }

    async loadBrowserData() {
        const browserDataList = document.getElementById('browser-data-list');
        if (!browserDataList) {
            console.warn('Browser data list element not found');
            return;
        }

        try {
            browserDataList.innerHTML = '<div class="data-list-item">Loading browser data...</div>';
            
            // Get vault data
            const vault = await this.contract.dataVaults(this.account);
            
            // For demonstration, show sample data
            browserDataList.innerHTML = `
                <div class="data-list-item">
                    <div class="data-item-content">
                        <span class="data-item-title">Browser History</span>
                        <span class="data-item-value">Last updated: ${new Date().toLocaleString()}</span>
                </div>
                    <button class="secondary-button" onclick="dataRoots.revokeAccess('browser')">Revoke Access</button>
                </div>
            `;
        } catch (error) {
            console.error('Error loading browser data:', error);
            browserDataList.innerHTML = '<div class="data-list-item error">Failed to load browser data</div>';
        }
    }

    async loadPersonalIds() {
        const personalIdsList = document.getElementById('personal-ids-list');
        if (!personalIdsList) {
            console.warn('Personal IDs list element not found');
            return;
        }

        try {
            personalIdsList.innerHTML = '<div class="data-list-item">Loading IDs...</div>';
            
            // Get vault data
            const vault = await this.contract.dataVaults(this.account);
            
            // For demonstration, show sample data
            personalIdsList.innerHTML = `
                <div class="data-list-item">
                    <div class="data-item-content">
                        <span class="data-item-title">Driver's License</span>
                        <span class="data-item-value">****${this.account.substring(38)}</span>
                    </div>
                    <button class="secondary-button" onclick="dataRoots.revokeAccess('license')">Revoke Access</button>
                </div>
            `;
        } catch (error) {
            console.error('Error loading personal IDs:', error);
            personalIdsList.innerHTML = '<div class="data-list-item error">Failed to load IDs</div>';
        }
    }

    async loadActiveAccess() {
        const activeAccessList = document.getElementById('active-access-list');
        if (!activeAccessList) {
            console.warn('Active access list element not found');
            return;
        }

        try {
            activeAccessList.innerHTML = '<div class="data-list-item">Loading active access...</div>';
            
            // Get vault data
            const vault = await this.contract.dataVaults(this.account);
            
            // For demonstration, show sample data
            activeAccessList.innerHTML = `
                <div class="data-list-item">
                    <div class="data-item-content">
                        <span class="data-item-title">Browser History Access</span>
                        <span class="data-item-value">Expires: ${new Date(Date.now() + 86400000).toLocaleString()}</span>
                    </div>
                    <button class="secondary-button" onclick="dataRoots.revokeAccess('browser')">Revoke</button>
                </div>
            `;
        } catch (error) {
            console.error('Error loading active access:', error);
            activeAccessList.innerHTML = '<div class="data-list-item error">Failed to load active access</div>';
        }
    }

    async loadMarketplaceData() {
        const availableDataList = document.getElementById('available-data-list');
        availableDataList.innerHTML = '<div class="data-list-item">Loading marketplace data...</div>';

        try {
            availableDataList.innerHTML = `
                <div class="data-list-item">
                    <span>Browser History</span>
                    <span>0.01 EDU</span>
                    <button class="primary-button" onclick="dataRoots.openDataRequestModal('browser', '0.01')">Request Access</button>
                </div>
                <div class="data-list-item">
                    <span>Social Profile</span>
                    <span>0.005 EDU</span>
                    <button class="primary-button" onclick="dataRoots.openDataRequestModal('social', '0.005')">Request Access</button>
                </div>
            `;
        } catch (error) {
            availableDataList.innerHTML = '<div class="data-list-item error">Failed to load marketplace data</div>';
        }
    }

    openDataRequestModal(dataType, price) {
        const modal = document.getElementById('data-request-modal');
        const dataTypeSelect = document.getElementById('data-type');
        dataTypeSelect.value = dataType;
        modal.classList.add('show');
    }

    closeDataRequestModal() {
        const modal = document.getElementById('data-request-modal');
        modal.classList.remove('show');
        document.getElementById('data-request-form').reset();
    }

    handleSenderTypeChange() {
        const senderType = document.getElementById('sender-type').value;
        const singleSenderSection = document.getElementById('single-sender-section');
        const multipleSendersSection = document.getElementById('multiple-senders-section');
        
        if (senderType === 'single') {
            singleSenderSection.style.display = 'block';
            multipleSendersSection.style.display = 'none';
        } else {
            singleSenderSection.style.display = 'none';
            multipleSendersSection.style.display = 'block';
        }
    }

    async handleDataRequest(event) {
        event.preventDefault();
        
        const senderType = document.getElementById('sender-type').value;
        const dataType = document.getElementById('data-type').value;
        const duration = document.getElementById('duration').value;
        
        let senderAddresses = [];
        if (senderType === 'single') {
            const address = document.getElementById('sender-address').value;
            if (!ethers.utils.isAddress(address)) {
                this.showNotification('Invalid sender address', 'error');
                return;
            }
            senderAddresses = [address];
        } else {
            const addresses = document.getElementById('sender-addresses').value.split('\n').map(addr => addr.trim()).filter(addr => addr);
            for (const address of addresses) {
                if (!ethers.utils.isAddress(address)) {
                    this.showNotification(`Invalid address: ${address}`, 'error');
                    return;
                }
            }
            senderAddresses = addresses;
        }

        try {
            // Create data requests for each sender
            for (const address of senderAddresses) {
                await this.contract.createDataRequest(
                    address,
                    dataType,
                    ethers.constants.AddressZero, // Using ETH as payment token
                    ethers.utils.parseEther("0.1"), // Price in ETH
                    duration * 24 * 60 * 60 // Convert days to seconds
                );
            }

            this.showNotification('Data requests created successfully', 'success');
            this.closeDataRequestModal();
            this.loadMarketplaceData();
        } catch (error) {
            console.error('Failed to create data request:', error);
            this.showNotification('Failed to create data request: ' + error.message, 'error');
        }
    }

    async loadRequestsData() {
        const incomingRequestsList = document.getElementById('incoming-requests-list');
        incomingRequestsList.innerHTML = '<div class="data-list-item">Loading requests...</div>';

        try {
            const requests = await this.contract.getIncomingRequests(this.account);
            if (requests.length === 0) {
                incomingRequestsList.innerHTML = '<div class="data-list-item">No requests right now</div>';
                return;
            }

            incomingRequestsList.innerHTML = requests.map(request => `
                <div class="data-list-item">
                    <span>${request.dataType}</span>
                    <span>${ethers.utils.formatEther(request.price)} ETH</span>
                    <button class="primary-button" onclick="dataRoots.acceptDataRequest('${request.id}')">Accept</button>
                </div>
            `).join('');
        } catch (error) {
            incomingRequestsList.innerHTML = '<div class="data-list-item error">Failed to load requests</div>';
        }
    }

    async revokeAccess(accessType) {
        try {
            await this.contract.revokeAccess(accessType);
            this.showNotification('Access revoked successfully', 'success');
            this.loadActiveAccess();
        } catch (error) {
            this.showNotification('Failed to revoke access: ' + error.message, 'error');
        }
    }

    async pauseContract() {
        if (!this.isAdmin) {
            this.showNotification('Only admin can pause the contract', 'error');
            return;
        }
        try {
            await this.contract.pause();
            this.showNotification('Contract paused successfully', 'success');
        } catch (error) {
            this.showNotification('Failed to pause contract: ' + error.message, 'error');
        }
    }

    async unpauseContract() {
        if (!this.isAdmin) {
            this.showNotification('Only admin can unpause the contract', 'error');
            return;
        }
        try {
            await this.contract.unpause();
            this.showNotification('Contract unpaused successfully', 'success');
        } catch (error) {
            this.showNotification('Failed to unpause contract: ' + error.message, 'error');
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
        const homeContent = document.getElementById('home-content');
        const appContent = document.getElementById('app-content');
        
        if (this.account) {
            addressElem.textContent = `${this.account.substring(0, 6)}...${this.account.substring(38)}`;
            connectBtn.style.display = 'none';
            disconnectBtn.style.display = 'block';
            homeContent.style.display = 'none';
            appContent.style.display = 'block';
            this.showNotification('Wallet connected successfully', 'success');
        } else {
            addressElem.textContent = 'Not connected';
            connectBtn.style.display = 'block';
            disconnectBtn.style.display = 'none';
            homeContent.style.display = 'block';
            appContent.style.display = 'none';
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.getElementById('notification');
        const messageSpan = notification.querySelector('.notification-message');
        messageSpan.textContent = message;
        notification.className = `notification ${type} show`;
        
        // Add close button functionality
        const closeBtn = notification.querySelector('.close-notification');
        closeBtn.onclick = () => {
            notification.className = 'notification';
        };
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (notification.classList.contains('show')) {
                notification.className = 'notification';
            }
        }, 5000);
    }

    toggleTheme() {
        const overlay = document.querySelector('.theme-transition');
        overlay.classList.add('active');
        
        setTimeout(() => {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
            this.applyTheme();
            
            // Update the theme icons
            const moonIcon = document.querySelector('.theme-toggle-icon[data-icon="moon"]');
            const sunIcon = document.querySelector('.theme-toggle-icon[data-icon="sun"]');
            
            if (this.theme === 'light') {
                moonIcon.classList.remove('active');
                sunIcon.classList.add('active');
            } else {
                sunIcon.classList.remove('active');
                moonIcon.classList.add('active');
            }
            
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 500);
        }, 250);
    }

    applyTheme() {
        document.body.setAttribute('data-theme', this.theme);
        
        // Set initial icon state
        const moonIcon = document.querySelector('.theme-toggle-icon[data-icon="moon"]');
        const sunIcon = document.querySelector('.theme-toggle-icon[data-icon="sun"]');
        
        if (this.theme === 'light') {
            moonIcon.classList.remove('active');
            sunIcon.classList.add('active');
        } else {
            sunIcon.classList.remove('active');
            moonIcon.classList.add('active');
        }
    }

    initializeEventListeners() {
        // Wallet connection
        document.getElementById('connect-wallet').addEventListener('click', () => this.initializeWeb3());
        document.getElementById('disconnect-wallet').addEventListener('click', () => this.disconnectWallet());
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());

        // Vault authentication
        document.getElementById('unlock-vault').addEventListener('click', () => this.unlockVault());

        // Form submissions
        document.getElementById('create-vault-form').addEventListener('submit', (e) => this.createVault(e));
        document.getElementById('generate-recovery-phrase').addEventListener('click', () => this.generateRecoveryPhrase());

        // New modal event listeners
        document.querySelectorAll('.close-modal').forEach(button => {
            button.addEventListener('click', () => this.closeDataRequestModal());
        });

        document.getElementById('sender-type').addEventListener('change', () => this.handleSenderTypeChange());
        document.getElementById('data-request-form').addEventListener('submit', (e) => this.handleDataRequest(e));

        // Close modal when clicking outside
        document.getElementById('data-request-modal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.closeDataRequestModal();
            }
        });

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
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(targetTab).style.display = 'block';

                // Load tab-specific data
                if (targetTab === 'marketplace') {
                    this.loadMarketplaceData();
                } else if (targetTab === 'requests') {
                    this.loadRequestsData();
                } else if (targetTab === 'settings') {
                    this.loadSettingsData();
                }
            });
        });

        // Settings event listeners
        document.getElementById('change-access-key-form').addEventListener('submit', (e) => this.handleAccessKeyChange(e));
        document.getElementById('revoke-all-access').addEventListener('click', () => this.revokeAllAccess());
        document.getElementById('delete-all-data').addEventListener('click', () => this.deleteAllData());

        // Load access logs when switching to requests tab
        document.querySelector('[data-tab="requests"]').addEventListener('click', () => {
            this.loadAccessLogs();
        });
    }

    async loadSettingsData() {
        // In a real implementation, you would load user settings
        // For now, we'll just show the basic UI
    }

    async initializeContract() {
        try {
            if (!this.signer) {
                throw new Error('Signer not initialized');
            }
            
            // Add network verification
            const network = await this.provider.getNetwork();
            console.log('Debug - Network details:', {
                chainId: network.chainId,
                name: network.name,
                ensAddress: network.ensAddress,
                _defaultProvider: network._defaultProvider
            });

            // Verify we're on EDU Chain testnet
            if (network.chainId !== 656476) {
                throw new Error(`Wrong network detected. Please connect to EDU Chain testnet (Chain ID: 656476). Current chain ID: ${network.chainId}`);
            }
            
            // Create contract instance with explicit interface
            const contractInterface = new ethers.utils.Interface(this.contractABI);
            this.contract = new ethers.Contract(
                this.contractAddress,
                contractInterface,
                this.signer
            );

            // Test basic contract interaction
            try {
            const adminRole = await this.contract.ADMIN_ROLE();
            console.log('Contract initialized successfully with admin role:', adminRole);
                
                // Verify contract code exists
                const code = await this.provider.getCode(this.contractAddress);
                console.log('Debug - Contract bytecode:', code);
                
                if (code === '0x') {
                    throw new Error('No contract code found at specified address');
                }
                
                // Try a static call to verify contract interface
                try {
                    await this.contract.callStatic.ADMIN_ROLE();
                    console.log('Debug - Contract interface verified');
                } catch (error) {
                    console.error('Contract interface verification failed:', error);
                    throw new Error('Contract interface verification failed. Please check contract address and ABI.');
                }

            return true;
            } catch (error) {
                console.error('Contract initialization check failed:', error);
                throw new Error(`Contract initialization failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Failed to initialize contract:', error);
            this.showNotification(`Failed to initialize contract: ${error.message}`, 'error');
            return false;
        }
    }

    disconnectWallet() {
        this.account = null;
        this.provider = null;
        this.signer = null;
        this.contract = null;
        this.vaultStatus = {
            exists: false,
            isUnlocked: false
        };
        this.updateWalletStatus();
        this.updateVaultUI();
        this.showNotification('Wallet disconnected', 'info');
    }

    async loadAccessLogs() {
        const accessLogsList = document.getElementById('access-logs-list');
        const totalEarningsElement = document.getElementById('total-earnings');
        accessLogsList.innerHTML = '<div class="data-list-item">Loading access logs...</div>';

        try {
            const logs = await this.contract.getAccessLogs(this.account);
            const totalEarnings = logs.reduce((sum, log) => sum.add(log.earnings), ethers.BigNumber.from(0));
            
            totalEarningsElement.textContent = `${ethers.utils.formatEther(totalEarnings)} EDU`;

            if (logs.length === 0) {
                accessLogsList.innerHTML = '<div class="data-list-item">No access logs found</div>';
                return;
            }

            accessLogsList.innerHTML = logs.map(log => `
                <div class="access-log-item">
                    <div>
                        <strong>${log.dataType}</strong>
                        <div>${log.requester}</div>
                    </div>
                    <div>${ethers.utils.formatEther(log.earnings)} EDU</div>
                    <div>${new Date(log.timestamp * 1000).toLocaleString()}</div>
                    <div class="status ${log.status.toLowerCase()}">${log.status}</div>
                </div>
            `).join('');
        } catch (error) {
            accessLogsList.innerHTML = '<div class="data-list-item error">Failed to load access logs</div>';
        }
    }

    async handleAccessKeyChange(event) {
        event.preventDefault();
        
        const currentKey = document.getElementById('current-access-key').value;
        const newKey = document.getElementById('new-access-key').value;
        const confirmKey = document.getElementById('confirm-new-access-key').value;

        if (newKey !== confirmKey) {
            this.showNotification('New access keys do not match', 'error');
            return;
        }

        try {
            const tx = await this.contract.updateAccessKey(
                ethers.utils.keccak256(ethers.utils.toUtf8Bytes(currentKey)),
                ethers.utils.keccak256(ethers.utils.toUtf8Bytes(newKey))
            );
            
            await tx.wait();
            this.showNotification('Access key updated successfully', 'success');
            document.getElementById('change-access-key-form').reset();
        } catch (error) {
            this.showNotification('Failed to update access key: ' + error.message, 'error');
        }
    }

    async revokeAllAccess() {
        if (!confirm('Are you sure you want to revoke all data access? This action cannot be undone.')) {
            return;
        }

        try {
            const tx = await this.contract.revokeAllAccess();
            await tx.wait();
            this.showNotification('All data access revoked successfully', 'success');
            this.loadActiveAccess();
        } catch (error) {
            this.showNotification('Failed to revoke all access: ' + error.message, 'error');
        }
    }

    async deleteAllData() {
        if (!confirm('Are you sure you want to delete all data? This action cannot be undone.')) {
            return;
        }

        try {
            const tx = await this.contract.deleteAllData();
            await tx.wait();
            this.showNotification('All data deleted successfully', 'success');
            this.loadVaultData();
        } catch (error) {
            this.showNotification('Failed to delete all data: ' + error.message, 'error');
        }
    }

    async checkVaultExists() {
        try {
            console.log('Debug - Checking if vault exists');
            const vault = await this.contract.callStatic.dataVaults(this.account);
            console.log('Debug - Vault data:', vault);
            return vault && vault.isInitialized;
        } catch (error) {
            console.log('Debug - Vault check error:', error);
            return false;
        }
    }

    // Add this new helper function to ensure UI elements exist
    async ensureUIElements() {
        const requiredElements = {
            'vault-creation': `
                <div id="vault-creation" class="section">
                    <h2>Create Your Vault</h2>
                    <form id="create-vault-form">
                        <div class="form-group">
                            <label for="vault-access-key">Access Key</label>
                            <input type="password" id="vault-access-key" required>
                        </div>
                        <div class="form-group">
                            <label for="vault-access-key-confirm">Confirm Access Key</label>
                            <input type="password" id="vault-access-key-confirm" required>
                        </div>
                        <button type="submit" class="primary-button">Create Vault</button>
                    </form>
                </div>
            `,
            'vault-auth': `
                <div id="vault-auth" class="section">
                    <h2>Access Your Vault</h2>
                    <form id="access-vault-form">
                        <div class="form-group">
                            <label for="vault-key">Enter Access Key</label>
                            <input type="password" id="vault-key" placeholder="Enter your vault access key" required>
                        </div>
                        <button type="button" id="unlock-vault" class="primary-button">Unlock Vault</button>
                    </form>
                </div>
            `,
            'vault-content': `
                <div id="vault-content" class="section">
                    <h2>Your Vault</h2>
                    <div class="data-sections">
                        <div class="data-section">
                            <h3>Social Profiles</h3>
                            <div id="social-profiles-list" class="data-list"></div>
                        </div>
                        <div class="data-section">
                            <h3>Browser Data</h3>
                            <div id="browser-data-list" class="data-list"></div>
                        </div>
                        <div class="data-section">
                            <h3>Personal IDs</h3>
                            <div id="personal-ids-list" class="data-list"></div>
                        </div>
                        <div class="data-section">
                            <h3>Active Access</h3>
                            <div id="active-access-list" class="data-list"></div>
                        </div>
                    </div>
                </div>
            `
        };

        const appContent = document.getElementById('app-content');
        if (!appContent) {
            console.error('Missing app-content container');
            return;
        }

        // Check and create missing elements
        for (const [id, html] of Object.entries(requiredElements)) {
            if (!document.getElementById(id)) {
                console.log(`Creating missing element: ${id}`);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                appContent.appendChild(tempDiv.firstElementChild);
            }
        }

        // Re-attach event listeners
        const unlockButton = document.getElementById('unlock-vault');
        if (unlockButton) {
            unlockButton.addEventListener('click', () => this.unlockVault());
        }

        const createVaultForm = document.getElementById('create-vault-form');
        if (createVaultForm) {
            createVaultForm.addEventListener('submit', (e) => this.createVault(e));
        }
    }

    async verifyNetwork() {
        const eduChainConfig = {
            chainId: '0xA02DC', // 656476 in hex
            chainName: 'EDU Chain Testnet',
            nativeCurrency: {
                name: 'EDU',
                symbol: 'EDU',
                decimals: 18
            },
            rpcUrls: ['https://testnet.educhain.network'],
            blockExplorerUrls: ['https://testnet-explorer.educhain.network']
        };

        try {
            // Check if we're on the correct network
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            if (chainId !== eduChainConfig.chainId) {
                // Prompt user to switch to EDU Chain
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: eduChainConfig.chainId }],
                    });
                } catch (switchError) {
                    // If the network doesn't exist in MetaMask, add it
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [eduChainConfig],
                            });
                        } catch (addError) {
                            throw new Error('Failed to add EDU Chain network to MetaMask');
                        }
                    } else {
                        throw switchError;
                    }
                }
            }
            return true;
        } catch (error) {
            console.error('Network verification failed:', error);
            this.showNotification(`Please connect to EDU Chain testnet: ${error.message}`, 'error');
            return false;
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.dataRoots = new DataRoots();
});
