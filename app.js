// Pinata Configuration
const PINATA_API_KEY = '04b078e0ad30bb4a6dc1';
const PINATA_API_SECRET = '6302b6e79fbe0818f878fe2ac1694d6335a19f2c19c27947eef0d1cc70359184';
const PINATA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTc5MTIyMC1mOTg2LTQ2OGEtYWFkMC04Y2VmMDU3ZmE4MDYiLCJlbWFpbCI6InNidmo3MjdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0YjA3OGUwYWQzMGJiNGE2ZGMxIiwic2NvcGVkS2V5U2VjcmV0IjoiNjMwMmI2ZTc5ZmJlMDgxOGY4NzhmZTJhYzE2OTRkNjMzNWExOWYyYzE5YzI3OTQ3ZWVmMGQxY2M3MDM1OTE4NCIsImV4cCI6MTc3MzczOTg1NX0.7zh6EHGHS-LssWoAFCG90Vtp0sIIbosKslm8n7-D2OA';

// Contract ABI - This would be generated when compiling the contract
const contractABI = [
    // Upload Data
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_ipfsHash",
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
    // Request Access
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
    // Approve Access
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
    // Revoke Access
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
    // Get Data Entry
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
    // Get Access Request
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
    // Get User Data
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
    // Get User Requests
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
    // Get Data Requests
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
    // Data Price
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
    }
];

// Contract address - This would be the deployed contract address
const contractAddress = "0xb207f00cDFf194b6e14990b13A605B957E5AB096"; // Replace with actual address

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
        
        const dataIds = await contract.getUserData(currentAccount);
        
        if (dataIds.length === 0) {
            userDataList.innerHTML = '<p class="empty-message">You have not uploaded any data yet</p>';
            return;
        }
        
        let html = '';
        
        for (const dataId of dataIds) {
            const data = await contract.getDataEntry(dataId);
            
            html += `
                <div class="data-card">
                    <h3>Data #${dataId}</h3>
                    <p><strong>IPFS Hash:</strong> ${truncateString(data.ipfsHash, 20)}</p>
                    <p><strong>Category:</strong> ${data.category === 0 ? 'Personal' : 'Educational'}</p>
                    <p><strong>Upload Time:</strong> ${formatDate(data.uploadTime)}</p>
                    <p><strong>Status:</strong> ${data.isActive ? 'Active' : 'Inactive'}</p>
                </div>
            `;
        }
        
        userDataList.innerHTML = html;
    } catch (error) {
        console.error('Error loading user data:', error);
        userDataList.innerHTML = '<p class="empty-message">Error loading data. Please try again.</p>';
    }
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
                        <h3>Data #${i}</h3>
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
            const requestIds = await contract.getDataRequests(dataId);
            
            for (const requestId of requestIds) {
                const request = await contract.getAccessRequest(dataId, requestId);
                
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
                        actions = '';
                    }
                }
                
                incomingHtml += `
                    <div class="request-card">
                        <h4>Request for Data #${dataId}</h4>
                        <span class="status ${statusClass}">${statusText}</span>
                        <p><strong>Requester:</strong> ${truncateString(request.requester, 10)}</p>
                        <p><strong>Start Time:</strong> ${formatDate(request.startTime)}</p>
                        <p><strong>End Time:</strong> ${formatDate(request.endTime)}</p>
                        <div class="actions">
                            ${actions}
                        </div>
                    </div>
                `;
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
        
        if (userRequestIds.length === 0) {
            outgoingRequests.innerHTML = '<p class="empty-message">No outgoing requests</p>';
            return;
        }
        
        // In a real application, you would need a way to map request IDs to data IDs
        // For this example, we'll assume a simple mapping
        for (const requestId of userRequestIds) {
            // This is a simplification - in a real app, you'd need to know which data ID this request belongs to
            const dataId = requestId; // This is just a placeholder
            
            try {
                const request = await contract.getAccessRequest(dataId, requestId);
                
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
                        <h4>Request for Data #${dataId}</h4>
                        <span class="status ${statusClass}">${statusText}</span>
                        <p><strong>Start Time:</strong> ${formatDate(request.startTime)}</p>
                        <p><strong>End Time:</strong> ${formatDate(request.endTime)}</p>
                    </div>
                `;
            } catch (error) {
                // Skip if request doesn't exist
                continue;
            }
        }
        
        outgoingRequests.innerHTML = outgoingHtml;
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
    
    if (!file) {
        showNotification('Please select a file to upload', 'error');
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
        const tx = await contract.uploadData(ipfsHash, category);
        await tx.wait();
        
        showNotification('Data uploaded successfully', 'success');
        
        // Reset form
        fileUpload.value = '';
        ipfsHashInput.value = '';
        
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
        showNotification('Revoking access...', 'info');
        
        const tx = await contract.revokeAccess(dataId, requestId);
        await tx.wait();
        
        showNotification('Access revoked successfully', 'success');
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error revoking access:', error);
        showNotification('Failed to revoke access', 'error');
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