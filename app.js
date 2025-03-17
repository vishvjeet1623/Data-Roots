// Pinata Configuration
const PINATA_API_KEY = '04b078e0ad30bb4a6dc1';
const PINATA_API_SECRET = '6302b6e79fbe0818f878fe2ac1694d6335a19f2c19c27947eef0d1cc70359184';
const PINATA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTc5MTIyMC1mOTg2LTQ2OGEtYWFkMC04Y2VmMDU3ZmE4MDYiLCJlbWFpbCI6InNidmo3MjdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0YjA3OGUwYWQzMGJiNGE2ZGMxIiwic2NvcGVkS2V5U2VjcmV0IjoiNjMwMmI2ZTc5ZmJlMDgxOGY4NzhmZTJhYzE2OTRkNjMzNWExOWYyYzE5YzI3OTQ3ZWVmMGQxY2M3MDM1OTE4NCIsImV4cCI6MTc3MzczOTg1NX0.7zh6EHGHS-LssWoAFCG90Vtp0sIIbosKslm8n7-D2OA';

// EDU Chain Configuration
const EDU_CHAIN_RPC_URL = 'https://rpc.open-campus-codex.gelato.digital';
const EDU_CHAIN_ID = 656476;  // Correct chain ID for EDU Chain (0xa045c in hex)
const EDU_CHAIN_NAME = 'EDU Chain Testnet';
const EDU_CHAIN_SYMBOL = 'EDU';
const EDU_CHAIN_DECIMALS = 18;
const EDU_CHAIN_BLOCK_EXPLORER = 'https://explorer.open-campus-codex.gelato.digital';

// Contract ABI - This would be generated when compiling the contract
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
    {
        "inputs": [
            {
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			}
		],
		"name": "AccessApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "AccessRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			}
		],
		"name": "AccessRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "approveAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "claimPayment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "DataDeactivated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
                "internalType": "string",
				"name": "ipfsHash",
                "type": "string"
            },
            {
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
                "internalType": "enum DataRoots.DataCategory",
				"name": "category",
                "type": "uint8"
            }
        ],
		"name": "DataUploaded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			}
		],
		"name": "deactivateData",
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
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PaymentClaimed",
		"type": "event"
	},
	{
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dataId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
				"name": "_requestId",
                "type": "uint256"
            }
        ],
		"name": "processExpiredAccess",
        "outputs": [],
		"stateMutability": "nonpayable",
        "type": "function"
    },
    {
		"anonymous": false,
        "inputs": [
            {
				"indexed": true,
                "internalType": "uint256",
				"name": "dataId",
                "type": "uint256"
            },
            {
				"indexed": true,
                "internalType": "uint256",
				"name": "requestId",
                "type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
                "type": "uint256"
            }
        ],
		"name": "RefundIssued",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			}
		],
		"name": "requestAccess",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dataId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_requestId",
                "type": "uint256"
            }
        ],
        "name": "revokeAccess",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_ipfsHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "enum DataRoots.DataCategory",
				"name": "_category",
				"type": "uint8"
			}
		],
		"name": "uploadData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
    {
        "inputs": [
            {
                "internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
                "type": "uint256"
            }
        ],
		"name": "accessRequests",
        "outputs": [
            {
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
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
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isRevoked",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isPaid",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DATA_PRICE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dataEntries",
		"outputs": [
                    {
                        "internalType": "string",
                        "name": "ipfsHash",
                        "type": "string"
                    },
			{
				"internalType": "string",
				"name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "enum DataRoots.DataCategory",
                        "name": "category",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "uploadTime",
                        "type": "uint256"
                    }
                ],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
                "name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dataRequests",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_dataId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_requestId",
                "type": "uint256"
            }
        ],
        "name": "getAccessRequest",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "requester",
                        "type": "address"
                    },
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
                        "internalType": "bool",
                        "name": "isApproved",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "isRevoked",
                        "type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isPaid",
                        "type": "bool"
                    }
                ],
                "internalType": "struct DataRoots.AccessRequest",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			}
		],
		"name": "getDataEntry",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "enum DataRoots.DataCategory",
						"name": "category",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "uploadTime",
						"type": "uint256"
					}
				],
				"internalType": "struct DataRoots.DataEntry",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			}
		],
		"name": "getDataRequests",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserData",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserRequests",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REFUND_PERCENTAGE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
    {
        "inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
            {
                "internalType": "uint256",
				"name": "",
                "type": "uint256"
            }
        ],
		"name": "userData",
        "outputs": [
            {
				"internalType": "uint256",
                "name": "",
				"type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userRequests",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];




// Contract address - This would be the deployed contract address
const contractAddress = "0x517b61b41D4B19D8A5c05a0A5AFEE121ba2e6669"; // Replace with actual address

// Global variables
let provider;
let signer;
let contract;
let currentAccount;
let lastRefreshTime = {};
const MANUAL_REFRESH_COOLDOWN = 5000; // 5 seconds cooldown after manual refresh

// DOM Elements
const connectWalletBtn = document.getElementById('connect-wallet');
const accountInfo = document.getElementById('account-info');
const accountAddress = document.getElementById('account-address');
const accountBalance = document.getElementById('account-balance');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const closeNotificationBtn = document.getElementById('close-notification');
const connectLoading = document.getElementById('connect-loading');
const connectionStatus = document.getElementById('connection-status');
const metamaskBanner = document.getElementById('metamask-banner');
const closeMetamaskBanner = document.getElementById('close-metamask-banner');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const uploadForm = document.getElementById('upload-form');
const userDataList = document.getElementById('user-data-list');
const allDataList = document.getElementById('all-data-list');
const incomingRequests = document.getElementById('incoming-requests');
const outgoingRequests = document.getElementById('outgoing-requests');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const requestAccessForm = document.getElementById('request-access-form');
const dataIdInput = document.getElementById('data-id');
const fileUpload = document.getElementById('file-upload');
const ipfsHashInput = document.getElementById('ipfs-hash');
const refreshMyDataBtn = document.getElementById('refresh-my-data');
const refreshBrowseBtn = document.getElementById('refresh-browse');
const refreshRequestsBtn = document.getElementById('refresh-requests');

// Initialize the application
async function initApp() {
    setupEventListeners();
    
    // Check if MetaMask is installed
    if (typeof window.ethereum === 'undefined') {
        if (metamaskBanner) {
        metamaskBanner.classList.remove('hidden');
    }
        showNotification('MetaMask not detected. Please install MetaMask to use this application.', 'error');
        return;
    }
    
    try {
        // Check if user has already connected (MetaMask remembers connections)
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        
        if (accounts && accounts.length > 0) {
            // Auto-connect since user has already authorized the app
            await connectWallet();
        } else {
            // Redirect to landing page to connect wallet first
            window.location.href = 'landing.html';
        }
    } catch (error) {
        console.error('Error initializing app:', error);
        showNotification('Error initializing app: ' + error.message, 'error');
        }
}

// Initialize app when DOM content is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Setup event listeners
function setupEventListeners() {
    // Connect wallet button is removed, so the event listener is not needed anymore
    
    // Disconnect wallet button
    const disconnectBtn = document.getElementById('disconnect-wallet');
    if (disconnectBtn) {
        disconnectBtn.addEventListener('click', disconnectWallet);
    }
    
    // Refresh buttons
    if (refreshMyDataBtn) {
        refreshMyDataBtn.addEventListener('click', async () => {
            if (!currentAccount) {
                showNotification('Please connect your wallet first', 'warning');
                return;
            }
            
            refreshMyDataBtn.classList.add('loading');
            await loadUserData();
            refreshMyDataBtn.classList.remove('loading');
        });
    }
    
    if (refreshBrowseBtn) {
        refreshBrowseBtn.addEventListener('click', async () => {
            if (!currentAccount) {
                showNotification('Please connect your wallet first', 'warning');
                return;
            }
            
            refreshBrowseBtn.classList.add('loading');
            await loadAllData();
            refreshBrowseBtn.classList.remove('loading');
        });
    }
    
    if (refreshRequestsBtn) {
        refreshRequestsBtn.addEventListener('click', async () => {
            if (!currentAccount) {
                showNotification('Please connect your wallet first', 'warning');
                return;
            }
            
            refreshRequestsBtn.classList.add('loading');
            await loadRequests();
            refreshRequestsBtn.classList.remove('loading');
        });
    }
    
    // Close MetaMask banner and remember dismissal
    if (closeMetamaskBanner) {
    closeMetamaskBanner.addEventListener('click', () => {
        metamaskBanner.classList.add('hidden');
        localStorage.setItem('metamaskBannerDismissed', 'true');
    });
    }
    
    // Close notification
    if (closeNotificationBtn) {
    closeNotificationBtn.addEventListener('click', () => {
        hideNotification();
    });
    }
    
    // Tab navigation
    tabBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to selected tab
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Only load data if wallet is connected
            if (currentAccount) {
                // Show appropriate loading indicators
                const contentElement = document.getElementById(tabId);
                if (contentElement) {
                    contentElement.querySelectorAll('.data-list, .request-list').forEach(list => {
                        showRefreshIndicator(list.id);
                    });
                }
                
                // Load content based on tab
                switch (tabId) {
                    case 'my-data':
                        await loadUserData(true); // true = auto refresh
                        break;
                    case 'browse':
                        await loadAllData(true); // true = auto refresh
                        break;
                    case 'requests':
                        await loadRequests(true); // true = auto refresh
                        break;
                }
            }
        });
    });
    
    // Upload form
    uploadForm.addEventListener('submit', handleUploadData);
    
    // Modal close
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
    
    // Request access form
    requestAccessForm.addEventListener('submit', handleRequestAccess);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// Connect to wallet
async function connectWallet() {
    try {
        // Check if MetaMask is installed
        if (!window.ethereum) {
            throw new Error('MetaMask not detected. Please install MetaMask to use this application.');
        }
        
        // Get accounts - should already be authorized from landing page
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        
        // If no accounts, request access (should not happen if coming from landing page)
        if (!accounts || accounts.length === 0) {
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        if (!accounts || accounts.length === 0) {
            throw new Error('No accounts found. Please unlock your MetaMask wallet.');
            }
        }
        
        // Initialize provider and signer
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        currentAccount = await signer.getAddress();
        
        // Check if we're on EDU Chain, if not, try to switch
        try {
            const chainId = await provider.getNetwork().then(network => network.chainId);
            if (chainId !== EDU_CHAIN_ID) {  // Use the constant for EDU Chain's chainId
                try {
                    // Try to switch to EDU Chain
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x' + EDU_CHAIN_ID.toString(16) }], // Convert to hex
                    });
                } catch (switchError) {
                    // This error code indicates that the chain has not been added to MetaMask
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                        chainId: '0x' + EDU_CHAIN_ID.toString(16), // Convert to hex
                                        chainName: EDU_CHAIN_NAME,
                                        nativeCurrency: {
                                            name: EDU_CHAIN_SYMBOL,
                                            symbol: EDU_CHAIN_SYMBOL,
                                            decimals: EDU_CHAIN_DECIMALS
                                        },
                                        rpcUrls: [EDU_CHAIN_RPC_URL],
                                        blockExplorerUrls: [EDU_CHAIN_BLOCK_EXPLORER],
                                    },
                                ],
                            });
                        } catch (addError) {
                            console.error('Error adding EDU Chain:', addError);
                            showNotification('Failed to add EDU Chain network. Please add it manually in your wallet.', 'error');
                        }
                    } else {
                        console.error('Error switching to EDU Chain:', switchError);
                        showNotification('Failed to switch to EDU Chain network. Please switch manually in your wallet.', 'error');
                    }
                }
                
                // Reinitialize provider after network switch
                provider = new ethers.providers.Web3Provider(window.ethereum);
                signer = provider.getSigner();
            }
        } catch (chainError) {
            console.error('Error checking chain:', chainError);
        }
        
        // Initialize contract
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        
        // Update UI
        if (accountAddress) {
        accountAddress.textContent = `${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
        }
        
        // Get and display balance
        if (accountBalance) {
        const balance = await provider.getBalance(currentAccount);
        // Format balance with EDU symbol already shown in HTML
        accountBalance.textContent = ethers.utils.formatEther(balance).substring(0, 6);
        }
        
        // Load data
        loadUserData();
        loadAllData();
        loadRequests();
        
        // Setup account change listener
        window.ethereum.on('accountsChanged', handleAccountChange);
        
        showNotification('Wallet connected successfully', 'success');
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showNotification('Failed to connect wallet: ' + error.message, 'error');
        
        // If wallet connection fails in the app, redirect back to landing page
        setTimeout(() => {
            window.location.href = 'landing.html';
        }, 3000);
        
        throw error;
    }
}

// Handle account change
async function handleAccountChange(accounts) {
    if (accounts.length === 0) {
        // User disconnected
        resetUI();
    } else {
        // Account changed
        currentAccount = accounts[0];
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        
        // Update UI
        accountAddress.textContent = `${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
        
        // Get and display balance
        const balance = await provider.getBalance(currentAccount);
        // Format balance with EDU symbol already shown in HTML
        accountBalance.textContent = ethers.utils.formatEther(balance).substring(0, 6);
        
        // Reload data
        loadUserData();
        loadAllData();
        loadRequests();
    }
}

// Reset UI when disconnected
function resetUI() {
    connectWalletBtn.classList.remove('hidden');
    accountInfo.classList.add('hidden');
    userDataList.innerHTML = '<p class="empty-message">Connect your wallet to view your data</p>';
    allDataList.innerHTML = '<p class="empty-message">Connect your wallet to browse data</p>';
    incomingRequests.innerHTML = '<p class="empty-message">No incoming requests</p>';
    outgoingRequests.innerHTML = '<p class="empty-message">No outgoing requests</p>';
}

// Load user's data
async function loadUserData(autoRefresh = false) {
    try {
        // Only show visual indicators for manual refreshes
        if (!autoRefresh) {
            showRefreshIndicator('user-data-list');
        userDataList.innerHTML = '<p class="loading">Loading your data...</p>';
            // Track the refresh time
            lastRefreshTime['my-data'] = Date.now();
        }
        
        // Get data you own
        const ownedDataIds = await contract.getUserData(currentAccount);
        
        // Get your approved requests
        const userRequestIds = await contract.getUserRequests(currentAccount);
        const approvedDataIds = new Set();
        
        // Check each request to find approved ones
        for (const requestId of userRequestIds) {
            try {
                const request = await contract.getAccessRequest(requestId, requestId);
                if (request.isApproved && !request.isRevoked && Date.now() / 1000 < request.endTime) {
                    approvedDataIds.add(requestId);
                }
            } catch (error) {
                continue;
            }
        }
        
        // Combine owned and approved data IDs
        const allDataIds = [...new Set([...ownedDataIds, ...approvedDataIds])];
        
        if (allDataIds.length === 0) {
            userDataList.innerHTML = '<p class="empty-message">You have no data or approved access yet</p>';
            return;
        }
        
        let html = '';
        let activeDataCount = 0;
        
        for (const dataId of allDataIds) {
            try {
            const data = await contract.getDataEntry(dataId);
                
                // Skip inactive (deleted) data
                if (!data.isActive) {
                    continue;
                }
                
                activeDataCount++;
                const isOwner = data.owner.toLowerCase() === currentAccount.toLowerCase();
            
            html += `
                <div class="data-card">
                        <h3>${data.name}</h3>
                        <p><strong>IPFS Hash:</strong> <span class="ipfs-hash">${data.ipfsHash}</span>
                            <button class="copy-btn" onclick="copyToClipboard('${data.ipfsHash}')">Copy</button>
                        </p>
                    <p><strong>Category:</strong> ${data.category === 0 ? 'Personal' : 'Educational'}</p>
                    <p><strong>Upload Time:</strong> ${formatDate(data.uploadTime)}</p>
                        <p><strong>Status:</strong> Active</p>
                        <p><strong>Access Type:</strong> ${isOwner ? 'Owner' : 'Granted Access'}</p>
                        <div class="actions">
                            <button class="view-btn" onclick="previewFile('${data.ipfsHash}')">Preview File</button>
                            ${isOwner ? `<button class="delete-btn" onclick="deleteData(${dataId})">Delete</button>` : ''}
                        </div>
                </div>
            `;
            } catch (error) {
                console.error(`Error loading data ID ${dataId}:`, error);
                continue;
            }
        }
        
        if (activeDataCount === 0) {
            userDataList.innerHTML = '<p class="empty-message">You have no active data or approved access</p>';
        } else {
        userDataList.innerHTML = html;
        }
        
        // Only hide indicators for manual refreshes
        if (!autoRefresh) {
            hideRefreshIndicator('user-data-list');
        }
    } catch (error) {
        console.error('Error loading user data:', error);
        userDataList.innerHTML = '<p class="empty-message">Error loading data. Please try again.</p>';
        
        // Always hide indicators on error
        hideRefreshIndicator('user-data-list');
    }
}

// Add copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('IPFS hash copied to clipboard', 'success');
    }).catch(err => {
        showNotification('Failed to copy hash', 'error');
    });
}

// Load all data
async function loadAllData(autoRefresh = false) {
    try {
        // Only show visual indicators for manual refreshes
        if (!autoRefresh) {
            showRefreshIndicator('all-data-list');
        allDataList.innerHTML = '<p class="loading">Loading available data...</p>';
            // Track the refresh time
            lastRefreshTime['browse'] = Date.now();
        }
        
        // Get user's request IDs to check which data they've already requested
        const userRequestIds = await contract.getUserRequests(currentAccount);
        const requestedDataIds = new Set();
        
        // Find all data IDs that the user has already requested
        for (const requestId of userRequestIds) {
            try {
                // Try to find the data ID associated with this request
                for (let i = 1; i <= 10; i++) { // Assuming max data ID is 10
                    try {
                        const request = await contract.getAccessRequest(i, requestId);
                        if (request.requester.toLowerCase() === currentAccount.toLowerCase()) {
                            requestedDataIds.add(i);
                            break;
                        }
                    } catch (error) {
                        continue;
                    }
                }
            } catch (error) {
                console.error('Error processing request:', error);
                continue;
            }
        }
        
        // In a real application, you would need a way to get all data IDs
        // For this example, we'll assume data IDs are sequential from 1 to 10
        const maxDataId = 10; // This would be dynamic in a real app
        let html = '';
        let dataCount = 0;
        
        for (let i = 1; i <= maxDataId; i++) {
            try {
                const data = await contract.getDataEntry(i);
                
                // Skip if data is not active, if it's the current user's data, or if user already requested access
                if (!data.isActive || 
                    data.owner.toLowerCase() === currentAccount.toLowerCase() ||
                    requestedDataIds.has(i)) {
                    continue;
                }
                
                dataCount++;
                
                html += `
                    <div class="data-card">
                        <h3>${data.name}</h3>
                        <p><strong>Owner:</strong> ${truncateString(data.owner, 10)}</p>
                        <p><strong>IPFS Hash:</strong> ${truncateString(data.ipfsHash, 20)}</p>
                        <p><strong>Category:</strong> ${data.category === 0 ? 'Personal' : 'Educational'}</p>
                        <p><strong>Upload Time:</strong> ${formatDate(data.uploadTime)}</p>
                        <div class="actions">
                            <button onclick="openRequestModal(${i})">Request Access</button>
                        </div>
                    </div>
                `;
            } catch (error) {
                // Skip if data doesn't exist
                continue;
            }
        }
        
        if (dataCount === 0) {
            allDataList.innerHTML = '<p class="empty-message">No data available</p>';
        } else {
            allDataList.innerHTML = html;
        }
        
        // Only hide indicators for manual refreshes
        if (!autoRefresh) {
            hideRefreshIndicator('all-data-list');
        }
    } catch (error) {
        console.error('Error loading all data:', error);
        allDataList.innerHTML = '<p class="empty-message">Error loading data. Please try again.</p>';
        
        // Always hide indicators on error
        hideRefreshIndicator('all-data-list');
    }
}

// Load requests
async function loadRequests(autoRefresh = false) {
    try {
        // Only show visual indicators for manual refreshes
        if (!autoRefresh) {
            showRefreshIndicator('incoming-requests');
            showRefreshIndicator('outgoing-requests');
        incomingRequests.innerHTML = '<p class="loading">Loading incoming requests...</p>';
        outgoingRequests.innerHTML = '<p class="loading">Loading outgoing requests...</p>';
            // Track the refresh time
            lastRefreshTime['requests'] = Date.now();
        }
        
        // Get user's data
        const dataIds = await contract.getUserData(currentAccount);
        
        // Process incoming requests
        let incomingHtml = '';
        let incomingCount = 0;
        
        for (const dataId of dataIds) {
            try {
                // Check if data is active
                const dataEntry = await contract.getDataEntry(dataId);
                if (!dataEntry.isActive) {
                    continue; // Skip inactive data
                }
                
            const requestIds = await contract.getDataRequests(dataId);
            
            for (const requestId of requestIds) {
                    try {
                const request = await contract.getAccessRequest(dataId, requestId);
                        const data = await contract.getDataEntry(dataId);
                
                incomingCount++;
                
                let statusClass = 'pending';
                let statusText = 'Pending';
                let actions = `<button onclick="approveRequest(${dataId}, ${requestId})">Approve</button>`;
                
                if (request.isApproved) {
                    statusClass = 'approved';
                    statusText = 'Approved';
                    
                    if (!request.isRevoked && Date.now() / 1000 < request.endTime) {
                                actions = `
                                    <button onclick="revokeRequest(${dataId}, ${requestId})">Revoke</button>
                                `;
                    } else if (request.isRevoked) {
                        statusClass = 'revoked';
                        statusText = 'Revoked';
                        actions = '';
                    } else {
                        statusText = 'Expired';
                                if (!request.isPaid) {
                                    actions = `<button onclick="claimPayment(${dataId}, ${requestId})">Claim Payment</button>`;
                                } else {
                        actions = '';
                                }
                    }
                }
                
                incomingHtml += `
                    <div class="request-card" data-data-id="${dataId}" data-request-id="${requestId}">
                                <h4>Request for "${data.name}"</h4>
                        <span class="status ${statusClass}">${statusText}</span>
                        <p><strong>Requester:</strong> ${truncateString(request.requester, 10)}</p>
                        <p><strong>Start Time:</strong> ${formatDate(request.startTime)}</p>
                        <p><strong>End Time:</strong> ${formatDate(request.endTime)}</p>
                        <div class="actions">
                            ${actions}
                        </div>
                    </div>
                `;
                    } catch (error) {
                        console.error('Error processing request:', error);
                        continue;
                    }
                }
            } catch (error) {
                console.error(`Error processing data ID ${dataId}:`, error);
                continue;
            }
        }
        
        if (incomingCount === 0) {
            incomingRequests.innerHTML = '<p class="empty-message">No incoming requests</p>';
        } else {
            incomingRequests.innerHTML = incomingHtml;
        }
        
        // Process outgoing requests
        const userRequestIds = await contract.getUserRequests(currentAccount);
        let outgoingHtml = '';
        let outgoingCount = 0;
        
        if (userRequestIds.length === 0) {
            outgoingRequests.innerHTML = '<p class="empty-message">No outgoing requests</p>';
            return;
        }
        
        for (const requestId of userRequestIds) {
            try {
                // Try to find the data ID associated with this request
                let foundDataId = null;
                for (let i = 1; i <= 10; i++) { // Assuming max data ID is 10
                    try {
                        const request = await contract.getAccessRequest(i, requestId);
                        if (request.requester.toLowerCase() === currentAccount.toLowerCase()) {
                            foundDataId = i;
                            break;
                        }
                    } catch (error) {
                        continue;
                    }
                }
                
                if (foundDataId) {
                    const data = await contract.getDataEntry(foundDataId);
                    
                    // Skip inactive data
                    if (!data.isActive) {
                        continue;
                    }
                    
                    const request = await contract.getAccessRequest(foundDataId, requestId);
                    
                    outgoingCount++;
                let statusClass = 'pending';
                let statusText = 'Pending';
                
                if (request.isApproved) {
                    statusClass = 'approved';
                    statusText = 'Approved';
                    
                    if (request.isRevoked) {
                        statusClass = 'revoked';
                        statusText = 'Revoked';
                    } else if (Date.now() / 1000 > request.endTime) {
                        statusText = 'Expired';
                    }
                }
                
                outgoingHtml += `
                    <div class="request-card">
                            <h4>Request for "${data.name}"</h4>
                        <span class="status ${statusClass}">${statusText}</span>
                        <p><strong>Start Time:</strong> ${formatDate(request.startTime)}</p>
                        <p><strong>End Time:</strong> ${formatDate(request.endTime)}</p>
                    </div>
                `;
                }
            } catch (error) {
                console.error('Error processing outgoing request:', error);
                continue;
            }
        }
        
        if (outgoingCount === 0) {
            outgoingRequests.innerHTML = '<p class="empty-message">No outgoing requests</p>';
        } else {
        outgoingRequests.innerHTML = outgoingHtml;
        }
        
        // Only hide indicators for manual refreshes
        if (!autoRefresh) {
            hideRefreshIndicator('incoming-requests');
            hideRefreshIndicator('outgoing-requests');
        }
    } catch (error) {
        console.error('Error loading requests:', error);
        incomingRequests.innerHTML = '<p class="empty-message">Error loading requests. Please try again.</p>';
        outgoingRequests.innerHTML = '<p class="empty-message">Error loading requests. Please try again.</p>';
        
        // Always hide indicators on error
        hideRefreshIndicator('incoming-requests');
        hideRefreshIndicator('outgoing-requests');
    }
}

// Handle upload data
async function handleUploadData(e) {
    e.preventDefault();
    
    const file = fileUpload.files[0];
    const category = parseInt(document.getElementById('data-category').value);
    const dataName = document.getElementById('data-name').value;
    
    if (!file) {
        showNotification('Please select a file to upload', 'error');
        return;
    }
    
    if (!dataName) {
        showNotification('Please enter a name for your data', 'error');
        return;
    }
    
    try {
        showNotification('Uploading file to IPFS...', 'info');
        
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('file', file);
        
        // Upload file to Pinata using their API
        const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PINATA_JWT}`
            },
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Failed to upload to IPFS');
        }
        
        const result = await response.json();
        const ipfsHash = result.IpfsHash;
        
        // Update the IPFS hash input
        ipfsHashInput.value = ipfsHash;
        
        showNotification('File uploaded to IPFS, now uploading to blockchain...', 'info');
        
        // Upload to blockchain
        const tx = await contract.uploadData(ipfsHash, dataName, category);
        await tx.wait();
        
        showNotification('Data uploaded successfully', 'success');
        
        // Reset form
        fileUpload.value = '';
        ipfsHashInput.value = '';
        document.getElementById('data-name').value = '';
        
        // Reload data
        loadUserData();
    } catch (error) {
        console.error('Error uploading data:', error);
        showNotification('Failed to upload data: ' + error.message, 'error');
    }
}

// Open request access modal
function openRequestModal(dataId) {
    dataIdInput.value = dataId;
    modal.classList.remove('hidden');
}

// Handle request access
async function handleRequestAccess(e) {
    e.preventDefault();
    
    const dataId = dataIdInput.value;
    const duration = document.getElementById('access-duration').value;
    
    if (!dataId || !duration) {
        showNotification('Invalid request parameters', 'error');
        return;
    }
    
    try {
        // Check if data is active
        const dataEntry = await contract.getDataEntry(dataId);
        if (!dataEntry.isActive) {
            showNotification('This data is no longer available', 'error');
            modal.classList.add('hidden');
            return;
        }
        
        showNotification('Requesting access...', 'info');
        
        // Get data price
        const dataPrice = await contract.DATA_PRICE();
        
        // Convert duration to seconds
        const durationInSeconds = duration * 24 * 60 * 60;
        
        const tx = await contract.requestAccess(dataId, durationInSeconds, {
            value: dataPrice
        });
        await tx.wait();
        
        showNotification('Access requested successfully', 'success');
        
        // Close modal
        modal.classList.add('hidden');
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error requesting access:', error);
        showNotification('Failed to request access', 'error');
    }
}

// Approve request
async function approveRequest(dataId, requestId) {
    try {
        // Check if data is active
        const dataEntry = await contract.getDataEntry(dataId);
        if (!dataEntry.isActive) {
            showNotification('This data is no longer active and cannot be approved', 'error');
            return;
        }
        
        showNotification('Approving request...', 'info');
        
        const tx = await contract.approveAccess(dataId, requestId);
        await tx.wait();
        
        showNotification('Request approved successfully', 'success');
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error approving request:', error);
        showNotification('Failed to approve request', 'error');
    }
}

// Revoke request - simplified robust approach
async function revokeRequest(dataId, requestId) {
    try {
        // Get the request details first to check if it's still valid
        const request = await contract.getAccessRequest(dataId, requestId);
        
        // Check if the request is already revoked or expired
        if (request.isRevoked) {
            showNotification('This access has already been revoked', 'warning');
            return;
        }
        
        if (Date.now() / 1000 > request.endTime) {
            showNotification('This access has already expired', 'warning');
            return;
        }
        
        // Confirm revocation
        if (!confirm('Are you sure you want to revoke this access?')) {
                return;
        }
        
        showNotification('Revoking access... Please wait', 'info');
        
        // STEP 1: Try to claim payment first (more reliable)
        try {
            showNotification('Step 1/2: Processing payment...', 'info');
            
            // First claim the payment to mark it as paid
            const claimData = contract.interface.encodeFunctionData('claimPayment', [dataId, requestId]);
            
            const claimTx = await signer.sendTransaction({
                to: contractAddress,
                data: claimData,
                gasLimit: ethers.utils.hexlify(3000000), 
                gasPrice: ethers.utils.parseUnits('10', 'gwei')
            });
            
        await claimTx.wait();
            showNotification('Payment processed successfully', 'success');
            
            // Check if this already marked it as revoked
            const updatedRequest = await contract.getAccessRequest(dataId, requestId);
            if (updatedRequest.isRevoked) {
                showNotification('Access successfully revoked', 'success');
            loadRequests();
            return;
            }
        } catch (claimError) {
            console.error('Error processing payment:', claimError);
            showNotification('Payment processing step failed, continuing with revocation', 'warning');
        }
        
        // STEP 2: Try direct revocation with zero value
        try {
            showNotification('Step 2/2: Finalizing revocation...', 'info');
            
            const revokeData = contract.interface.encodeFunctionData('revokeAccess', [dataId, requestId]);
            
            const revokeTx = await signer.sendTransaction({
                to: contractAddress,
                data: revokeData,
                gasLimit: ethers.utils.hexlify(5000000),
                gasPrice: ethers.utils.parseUnits('15', 'gwei'),
                value: ethers.constants.Zero
            });
            
            await revokeTx.wait();
            showNotification('Access successfully revoked', 'success');
            loadRequests();
            return;
        } catch (revokeError) {
            console.error('Error finalizing revocation:', revokeError);
            
            // One final check to see if revocation succeeded despite the error
            try {
                const finalCheck = await contract.getAccessRequest(dataId, requestId);
                if (finalCheck.isRevoked || finalCheck.isPaid) {
                    showNotification('Access appears to have been revoked successfully', 'success');
                    loadRequests();
                    return;
                }
            } catch (checkError) {
                console.error('Error checking final status:', checkError);
            }
            
            showNotification('Revocation encountered an error. The UI will be updated, but blockchain state may not reflect changes.', 'error');
            
            // Update UI as a fallback
            const requestCard = document.querySelector(`.request-card[data-data-id="${dataId}"][data-request-id="${requestId}"]`);
            if (requestCard) {
                    const statusEl = requestCard.querySelector('.status');
                    if (statusEl) {
                        statusEl.className = 'status revoked';
                    statusEl.textContent = 'Revoked (UI Only)';
                }
                
                const actionsDiv = requestCard.querySelector('.actions');
                if (actionsDiv) {
                    actionsDiv.innerHTML = '<p style="color: #e74c3c;">Revocation status may not be reflected on blockchain.</p>';
                }
            }
            
                loadRequests();
        }
    } catch (error) {
        console.error('Revocation error:', error);
        showNotification('Failed to revoke access. Please try again later.', 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    // Set message content
    notificationText.textContent = message;
    
    // Remove any existing classes and add the new type
    notification.className = 'notification';
    if (type) {
        notification.classList.add(type);
    }
    
    // Show notification
    notification.classList.remove('hidden');
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
        hideNotification();
    }, 4000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
}

// Close notification when clicking the X button
document.addEventListener('DOMContentLoaded', function() {
    const closeNotificationBtn = document.getElementById('close-notification');
    if (closeNotificationBtn) {
        closeNotificationBtn.addEventListener('click', () => {
            hideNotification();
        });
    }
});

// Helper function to truncate strings
function truncateString(str, length) {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
}

// Helper function to format dates
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

// Make functions available globally
window.openRequestModal = openRequestModal;
window.approveRequest = approveRequest;
window.revokeRequest = revokeRequest; 
window.copyToClipboard = copyToClipboard;
window.deleteData = deleteData;
window.claimPayment = claimPayment;
window.processExpiredAccess = processExpiredAccess;
window.loadUserData = loadUserData;
window.loadAllData = loadAllData;
window.loadRequests = loadRequests;
window.previewFile = previewFile;

// Delete data
async function deleteData(dataId) {
    try {
        if (!confirm('Are you sure you want to delete this data? This action cannot be undone.')) {
            return;
        }
        
        showNotification('Deactivating data...', 'info');
        
        const tx = await contract.deactivateData(dataId);
        await tx.wait();
        
        showNotification('Data deleted successfully', 'success');
        
        // Reload data
        loadUserData();
    } catch (error) {
        console.error('Error deleting data:', error);
        showNotification('Failed to delete data: ' + error.message, 'error');
    }
}

// Claim payment
async function claimPayment(dataId, requestId) {
    try {
        showNotification('Claiming payment...', 'info');
        
        const tx = await contract.claimPayment(dataId, requestId);
        await tx.wait();
        
        showNotification('Payment claimed successfully', 'success');
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error claiming payment:', error);
        showNotification('Failed to claim payment: ' + error.message, 'error');
    }
}

// Process expired access
async function processExpiredAccess(dataId, requestId) {
    try {
        showNotification('Processing expired access...', 'info');
        
        const tx = await contract.processExpiredAccess(dataId, requestId);
        await tx.wait();
        
        showNotification('Expired access processed successfully', 'success');
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error processing expired access:', error);
        showNotification('Failed to process expired access: ' + error.message, 'error');
    }
}

// Create a custom provider for EDU Chain
function createEduChainProvider() {
    try {
        const provider = new ethers.providers.JsonRpcProvider(EDU_CHAIN_RPC_URL);
        console.log(`Connected to EDU Chain testnet: ${EDU_CHAIN_NAME} (ID: ${EDU_CHAIN_ID})`);
        return provider;
    } catch (error) {
        console.error('Error creating EDU Chain provider:', error);
        showNotification('Failed to connect to EDU Chain', 'error');
        return null;
    }
}

// Show refresh indicator
function showRefreshIndicator(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Add refresh indicator class
    element.classList.add('refreshing');
    
    // Create or update the refresh badge
    let badge = element.querySelector('.refresh-badge');
    if (!badge) {
        badge = document.createElement('div');
        badge.className = 'refresh-badge';
        badge.innerHTML = 'Refreshing...';
        element.appendChild(badge);
    }
}

// Hide refresh indicator
function hideRefreshIndicator(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Remove refreshing class
    element.classList.remove('refreshing');
    
    // Remove badge if exists
    const badge = element.querySelector('.refresh-badge');
    if (badge) {
        badge.remove();
    }
}

// Preview file in a modal to prevent downloading
async function previewFile(ipfsHash) {
    try {
        showNotification('Loading preview...', 'info');
        
        // Create or get the preview modal
        let previewModal = document.getElementById('preview-modal');
        if (!previewModal) {
            previewModal = document.createElement('div');
            previewModal.id = 'preview-modal';
            previewModal.className = 'modal';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content preview-modal-content';
            
            const closeBtn = document.createElement('span');
            closeBtn.className = 'close-modal';
            closeBtn.innerHTML = '&times;';
            closeBtn.onclick = () => {
                previewModal.classList.add('hidden');
                document.getElementById('preview-frame').src = 'about:blank';
            };
            
            const header = document.createElement('div');
            header.className = 'modal-header';
            header.appendChild(closeBtn);
            
            const previewContainer = document.createElement('div');
            previewContainer.className = 'preview-container';
            previewContainer.innerHTML = `
                <iframe id="preview-frame" sandbox="allow-scripts"></iframe>
                <div id="preview-loader" class="preview-loader">Loading preview...</div>
                <div id="preview-error" class="preview-error hidden">Unable to preview this file type</div>
                <div class="anti-screenshot-overlay">PREVIEW ONLY - SECURE VIEW</div>
                <div class="preview-controls">
                    <button id="zoom-in" class="zoom-btn" title="Zoom In">+</button>
                    <button id="zoom-out" class="zoom-btn" title="Zoom Out">-</button>
                    <button id="zoom-reset" class="zoom-btn" title="Reset Zoom">Reset</button>
                </div>
            `;
            
            modalContent.appendChild(header);
            modalContent.appendChild(previewContainer);
            previewModal.appendChild(modalContent);
            document.body.appendChild(previewModal);
            
            // Close modal when clicking outside content
            previewModal.addEventListener('click', (e) => {
                if (e.target === previewModal) {
                    previewModal.classList.add('hidden');
                    document.getElementById('preview-frame').src = 'about:blank';
                }
            });
            
            // Setup zoom controls
            document.getElementById('zoom-in').addEventListener('click', () => {
                const frame = document.getElementById('preview-frame');
                const currentZoom = parseFloat(frame.dataset.zoomLevel || '1');
                const newZoom = Math.min(currentZoom + 0.1, 2);
                frame.style.transform = `scale(${newZoom})`;
                frame.dataset.zoomLevel = newZoom.toString();
            });
            
            document.getElementById('zoom-out').addEventListener('click', () => {
                const frame = document.getElementById('preview-frame');
                const currentZoom = parseFloat(frame.dataset.zoomLevel || '1');
                const newZoom = Math.max(currentZoom - 0.1, 0.5);
                frame.style.transform = `scale(${newZoom})`;
                frame.dataset.zoomLevel = newZoom.toString();
            });
            
            document.getElementById('zoom-reset').addEventListener('click', () => {
                const frame = document.getElementById('preview-frame');
                frame.style.transform = 'scale(1)';
                frame.dataset.zoomLevel = '1';
                frame.dataset.dragX = '0';
                frame.dataset.dragY = '0';
            });
        }
        
        // Show the modal
        previewModal.classList.remove('hidden');
        
        // Get elements
        const previewFrame = document.getElementById('preview-frame');
        const previewLoader = document.getElementById('preview-loader');
        const previewError = document.getElementById('preview-error');
        
        // Reset state
        previewLoader.classList.remove('hidden');
        previewError.classList.add('hidden');
        previewFrame.classList.add('hidden');
        
        // Reset zoom level and drag state
        previewFrame.style.transform = 'scale(1)';
        previewFrame.dataset.zoomLevel = '1';
        previewFrame.dataset.dragX = '0';
        previewFrame.dataset.dragY = '0';
        
        // First try to load as an image or pdf
        const ipfsUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
        
        try {
            // First try to get the content type
            const response = await fetch(ipfsUrl, { method: 'HEAD' });
            const contentType = response.headers.get('content-type');
            
            if (contentType && contentType.startsWith('image/')) {
                // For images, use direct embedding with a simple content frame
                previewFrame.onload = () => {
                    previewLoader.classList.add('hidden');
                    previewFrame.classList.remove('hidden');
                };
                
                // Simple HTML with no CSP restrictions
                const frameContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body, html { margin: 0; padding: 0; height: 100%; display: flex; justify-content: center; align-items: center; background: #f5f5f5; overflow: hidden; }
                            img { max-width: 100%; max-height: 100%; object-fit: contain; }
                            .watermark { position: absolute; top: 10px; right: 10px; font-family: Arial; font-size: 16px; color: rgba(0,0,0,0.3); pointer-events: none; }
                        </style>
                    </head>
                    <body>
                        <img src="${ipfsUrl}" />
                        <div class="watermark">PREVIEW ONLY</div>
                    </body>
                    </html>
                `;
                
                const blob = new Blob([frameContent], { type: 'text/html' });
                const blobUrl = URL.createObjectURL(blob);
                previewFrame.src = blobUrl;
                
            } else if (contentType && contentType === 'application/pdf') {
                // For PDFs, use the PDF viewer with limitations
                const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(ipfsUrl)}#pagemode=thumbs&toolbar=0&navpanes=0&statusbar=0&messages=0&scrollbar=1`;
                previewFrame.onload = () => {
                    previewLoader.classList.add('hidden');
                    previewFrame.classList.remove('hidden');
                };
                previewFrame.src = viewerUrl;
                
            } else if (contentType && (contentType.startsWith('text/') || contentType === 'application/json')) {
                // For text files, display with syntax highlighting
                const textResponse = await fetch(ipfsUrl);
                const text = await textResponse.text();
                
                const escapedText = text
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#039;');
                
                const frameContent = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <style>
                            body, html { margin: 0; padding: 20px; height: 100%; background: #f5f5f5; font-family: monospace; overflow: auto; user-select: none; }
                            .zoom-container { position: relative; transition: transform 0.2s ease; }
                            pre { white-space: pre-wrap; word-break: break-word; }
                            .watermark { position: fixed; top: 10px; right: 10px; font-family: Arial; font-size: 16px; color: rgba(0,0,0,0.3); pointer-events: none; }
                        </style>
                    </head>
                    <body>
                        <div class="zoom-container">
                            <pre>${escapedText}</pre>
                            <div class="watermark">PREVIEW ONLY</div>
                        </div>
                    </body>
                    </html>
                `;
                
                const blob = new Blob([frameContent], { type: 'text/html' });
                const blobUrl = URL.createObjectURL(blob);
                
                previewFrame.onload = () => {
                    previewLoader.classList.add('hidden');
                    previewFrame.classList.remove('hidden');
                };
                previewFrame.src = blobUrl;
                
            } else {
                // For other file types, show the error message
                previewLoader.classList.add('hidden');
                previewError.classList.remove('hidden');
                previewError.textContent = `Unable to preview this file type (${contentType || 'unknown'})`;
            }
        } catch (error) {
            console.error('Error loading preview:', error);
            previewLoader.classList.add('hidden');
            previewError.classList.remove('hidden');
            previewError.textContent = 'Error loading preview: ' + error.message;
        }
        
    } catch (error) {
        console.error('Error setting up preview:', error);
        showNotification('Failed to preview file: ' + error.message, 'error');
    }
}

// Handle zooming in the preview
function applyZoom(direction) {
    const frame = document.getElementById('preview-frame');
    if (!frame) return;
    
    // Get current zoom level (default to 1 if not set)
    let zoomLevel = parseFloat(frame.dataset.zoomLevel || '1');
    const oldZoomLevel = zoomLevel;
    
    // Apply zoom based on direction
    switch (direction) {
        case 'in':
            zoomLevel = Math.min(zoomLevel + 0.25, 3); // Maximum zoom: 3x
            break;
        case 'out':
            zoomLevel = Math.max(zoomLevel - 0.25, 0.5); // Minimum zoom: 0.5x
            break;
        case 'reset':
            zoomLevel = 1; // Reset to default
            // Also reset position when resetting zoom
            frame.dataset.dragX = '0';
            frame.dataset.dragY = '0';
            break;
    }
    
    // Reset position if zooming out to 1 or below
    if (zoomLevel <= 1) {
        frame.dataset.dragX = '0';
        frame.dataset.dragY = '0';
    }
    
    // Update zoom level
    const dragX = parseInt(frame.dataset.dragX || '0');
    const dragY = parseInt(frame.dataset.dragY || '0');
    
    frame.style.transform = `scale(${zoomLevel}) translate(${dragX}px, ${dragY}px)`;
    frame.dataset.zoomLevel = zoomLevel.toString();
    
    // If zoomed in and we weren't previously zoomed in, set up dragging
    if (zoomLevel > 1 && oldZoomLevel <= 1) {
        setupDragging(frame);
    }
}

// Setup dragging functionality for the preview frame
function setupDragging(frame) {
    if (!frame) return;
    
    const container = frame.closest('.preview-container');
    if (!container) return;
    
    let isDragging = false;
    let startX, startY;
    let initialTransform;
    
    // Make sure cursor shows we can grab
    container.style.cursor = 'grab';
    
    // Add event listeners
    container.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    
    // Touch events
    container.addEventListener('touchstart', startTouch, { passive: false });
    document.addEventListener('touchmove', dragTouch, { passive: false });
    document.addEventListener('touchend', endTouch);
    
    function startDrag(e) {
        e.preventDefault();
        const zoomLevel = parseFloat(frame.dataset.zoomLevel || '1');
        if (zoomLevel <= 1) return;
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialTransform = frame.style.transform;
        container.style.cursor = 'grabbing';
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        const zoomLevel = parseFloat(frame.dataset.zoomLevel || '1');
        const dx = (e.clientX - startX);
        const dy = (e.clientY - startY);
        
        // Calculate new position
        const dragX = parseInt(frame.dataset.dragX || '0') + dx / zoomLevel;
        const dragY = parseInt(frame.dataset.dragY || '0') + dy / zoomLevel;
        
        // Apply limits
        const maxDrag = 200;
        const limitedX = Math.max(-maxDrag, Math.min(maxDrag, dragX));
        const limitedY = Math.max(-maxDrag, Math.min(maxDrag, dragY));
        
        // Update transform
        frame.style.transform = `scale(${zoomLevel}) translate(${limitedX}px, ${limitedY}px)`;
        
        // Save position for next drag
        frame.dataset.dragX = limitedX.toString();
        frame.dataset.dragY = limitedY.toString();
        
        // Update start position for next move
        startX = e.clientX;
        startY = e.clientY;
    }
    
    function endDrag() {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = 'grab';
        }
    }
    
    function startTouch(e) {
        if (e.touches.length !== 1) return;
        
        const zoomLevel = parseFloat(frame.dataset.zoomLevel || '1');
        if (zoomLevel <= 1) return;
        
        e.preventDefault();
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        initialTransform = frame.style.transform;
    }
    
    function dragTouch(e) {
        if (!isDragging || e.touches.length !== 1) return;
        
        e.preventDefault();
        const zoomLevel = parseFloat(frame.dataset.zoomLevel || '1');
        const dx = (e.touches[0].clientX - startX);
        const dy = (e.touches[0].clientY - startY);
        
        // Calculate new position
        const dragX = parseInt(frame.dataset.dragX || '0') + dx / zoomLevel;
        const dragY = parseInt(frame.dataset.dragY || '0') + dy / zoomLevel;
        
        // Apply limits
        const maxDrag = 200;
        const limitedX = Math.max(-maxDrag, Math.min(maxDrag, dragX));
        const limitedY = Math.max(-maxDrag, Math.min(maxDrag, dragY));
        
        // Update transform
        frame.style.transform = `scale(${zoomLevel}) translate(${limitedX}px, ${limitedY}px)`;
        
        // Save position for next drag
        frame.dataset.dragX = limitedX.toString();
        frame.dataset.dragY = limitedY.toString();
        
        // Update start position for next move
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }
    
    function endTouch() {
        isDragging = false;
    }
}

// Completely remove the screenshot detection
function setupScreenshotDetection() {
    // Screenshot detection disabled
    console.log('Screenshot detection has been disabled');
}

// Add somewhere near the connectWallet function
// Function to disconnect wallet and return to landing page
function disconnectWallet() {
    // Clear currentAccount
    currentAccount = null;
    
    // Clear session storage
    sessionStorage.removeItem('fromLanding');
    
    // Show notification
    showNotification('Disconnecting wallet...', 'info');
    
    // Short delay before redirect
    setTimeout(() => {
        window.location.href = 'landing.html';
    }, 1000);
}