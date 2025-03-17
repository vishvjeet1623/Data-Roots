// Pinata Configuration
const PINATA_API_KEY = '04b078e0ad30bb4a6dc1';
const PINATA_API_SECRET = '6302b6e79fbe0818f878fe2ac1694d6335a19f2c19c27947eef0d1cc70359184';
const PINATA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTc5MTIyMC1mOTg2LTQ2OGEtYWFkMC04Y2VmMDU3ZmE4MDYiLCJlbWFpbCI6InNidmo3MjdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0YjA3OGUwYWQzMGJiNGE2ZGMxIiwic2NvcGVkS2V5U2VjcmV0IjoiNjMwMmI2ZTc5ZmJlMDgxOGY4NzhmZTJhYzE2OTRkNjMzNWExOWYyYzE5YzI3OTQ3ZWVmMGQxY2M3MDM1OTE4NCIsImV4cCI6MTc3MzczOTg1NX0.7zh6EHGHS-LssWoAFCG90Vtp0sIIbosKslm8n7-D2OA';

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

// DOM Elements
const connectWalletBtn = document.getElementById('connect-wallet');
const accountInfo = document.getElementById('account-info');
const accountAddress = document.getElementById('account-address');
const accountBalance = document.getElementById('account-balance');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const closeNotificationBtn = document.getElementById('close-notification');
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

// Initialize the application
async function init() {
    setupEventListeners();
    
    // Check if MetaMask is installed
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // Check if already connected
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
            await connectWallet();
        }
    } else {
        showNotification('Please install MetaMask to use this application', 'error');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Connect wallet button
    connectWalletBtn.addEventListener('click', connectWallet);
    
    // Close notification
    closeNotificationBtn.addEventListener('click', () => {
        notification.classList.add('hidden');
    });
    
    // Tab navigation
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to selected tab
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
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
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Initialize provider and signer
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        currentAccount = await signer.getAddress();
        
        // Initialize contract
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        
        // Update UI
        connectWalletBtn.classList.add('hidden');
        accountInfo.classList.remove('hidden');
        accountAddress.textContent = `${currentAccount.substring(0, 6)}...${currentAccount.substring(38)}`;
        
        // Get and display balance
        const balance = await provider.getBalance(currentAccount);
        accountBalance.textContent = ethers.utils.formatEther(balance).substring(0, 6);
        
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
async function loadUserData() {
    try {
        userDataList.innerHTML = '<p class="loading">Loading your data...</p>';
        
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
                            <a href="https://ipfs.io/ipfs/${data.ipfsHash}" target="_blank" class="view-btn">View File</a>
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
    } catch (error) {
        console.error('Error loading user data:', error);
        userDataList.innerHTML = '<p class="empty-message">Error loading data. Please try again.</p>';
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
async function loadAllData() {
    try {
        allDataList.innerHTML = '<p class="loading">Loading available data...</p>';
        
        // In a real application, you would need a way to get all data IDs
        // For this example, we'll assume data IDs are sequential from 1 to 10
        const maxDataId = 10; // This would be dynamic in a real app
        let html = '';
        let dataCount = 0;
        
        for (let i = 1; i <= maxDataId; i++) {
            try {
                const data = await contract.getDataEntry(i);
                
                // Skip if data is not active or if it's the current user's data
                if (!data.isActive || data.owner.toLowerCase() === currentAccount.toLowerCase()) {
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
    } catch (error) {
        console.error('Error loading all data:', error);
        allDataList.innerHTML = '<p class="empty-message">Error loading data. Please try again.</p>';
    }
}

// Load requests
async function loadRequests() {
    try {
        incomingRequests.innerHTML = '<p class="loading">Loading incoming requests...</p>';
        outgoingRequests.innerHTML = '<p class="loading">Loading outgoing requests...</p>';
        
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
                                actions = `<button onclick="revokeRequest(${dataId}, ${requestId})">Revoke</button>`;
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
                            <div class="request-card">
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
    } catch (error) {
        console.error('Error loading requests:', error);
        incomingRequests.innerHTML = '<p class="empty-message">Error loading requests. Please try again.</p>';
        outgoingRequests.innerHTML = '<p class="empty-message">Error loading requests. Please try again.</p>';
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

// Revoke request
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
        
        // Get contract balance before revoking
        const contractBalance = await provider.getBalance(contractAddress);
        console.log('Contract balance:', ethers.utils.formatEther(contractBalance));
        
        // Get the data price and refund percentage
        const dataPrice = await contract.DATA_PRICE();
        const refundPercentage = await contract.REFUND_PERCENTAGE();
        
        // Calculate remaining time for refund
        const remainingTime = request.endTime - Math.floor(Date.now() / 1000);
        const totalDuration = request.endTime - request.startTime;
        
        // Calculate refund amount
        const refundAmount = dataPrice.mul(remainingTime).mul(refundPercentage).div(totalDuration).div(100);
        
        console.log('Refund details:', {
            dataPrice: ethers.utils.formatEther(dataPrice),
            refundPercentage: refundPercentage.toString(),
            remainingTime: remainingTime,
            totalDuration: totalDuration,
            refundAmount: ethers.utils.formatEther(refundAmount)
        });
        
        // Inform the user about the revocation process
        if (confirm('You are about to revoke access. Continue?')) {
            showNotification('Revoking access... Please confirm the transaction in your wallet', 'info');
            
            try {
                // Try with optimized gas settings
                const tx = await contract.revokeAccess(dataId, requestId, {
                    gasLimit: 1000000 // Much higher gas limit
                });
                
                showNotification('Transaction submitted. Waiting for confirmation...', 'info');
                
                // Wait for transaction with timeout
                const receipt = await tx.wait();
                
                if (receipt.status === 1) {
                    showNotification('Access revoked successfully', 'success');
                    loadRequests();
                } else {
                    throw new Error('Transaction failed');
                }
            } catch (txError) {
                console.error('Transaction error:', txError);
                
                // Show a more helpful error message
                showNotification('The revocation transaction failed. This could be due to contract limitations with the refund mechanism.', 'error');
                
                // Offer to contact support
                if (confirm('Would you like to contact support for assistance with this issue?')) {
                    // Here you would typically open a support form or provide contact information
                    showNotification('Please contact support at support@dataroots.com for assistance', 'info');
                }
            }
        }
    } catch (error) {
        console.error('Error revoking access:', error);
        showNotification('Failed to prepare revocation. Please try again later.', 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    notification.className = 'hidden';
    setTimeout(() => {
        notificationText.textContent = message;
        notification.classList.remove('hidden', 'error', 'success', 'warning');
        notification.classList.add(type);
    }, 10);
}

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

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally
window.openRequestModal = openRequestModal;
window.approveRequest = approveRequest;
window.revokeRequest = revokeRequest; 
window.copyToClipboard = copyToClipboard;

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

window.deleteData = deleteData;
window.claimPayment = claimPayment;
window.processExpiredAccess = processExpiredAccess;
