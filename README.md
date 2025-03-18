# DataRoots - Decentralized Data Sharing Platform

DataRoots is a blockchain-based platform that enables secure, decentralized sharing of data with fine-grained access control. Users can upload their data to IPFS, register it on the blockchain, and grant or revoke access to other users.

## Features

- **Decentralized Storage**: All data is stored on IPFS, ensuring censorship resistance and availability
- **Blockchain-Based Access Control**: Smart contracts manage access permissions
- **Custom Data Names**: Users can name their data for easy identification
- **Data Categories**: Organize data by categories (Personal, Educational)
- **Time-Limited Access**: Grant access for specific time periods
- **Refund Mechanism**: Partial refunds when access is revoked before expiration
- **Data Deactivation**: Ability to remove data from the platform

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Blockchain**: EDU Chain
- **Smart Contracts**: Solidity
- **Storage**: IPFS via Pinata
- **Web3 Integration**: ethers.js

## Getting Started

### Prerequisites

- MetaMask or another Ethereum wallet
- Access to EDU Chain network

### EDU Chain Network Details

To connect to the EDU Chain network, add the following configuration to your MetaMask:

- **Network Name**: EDU Chain Testnet
- **RPC URL**: https://rpc.open-campus-codex.gelato.digital
- **Chain ID**: 656476 (0xa045c in hex)
- **Currency Symbol**: EDU
- **Decimals**: 18
- **Block Explorer URL**: https://explorer.open-campus-codex.gelato.digital

### Connecting to EDU Chain

When you connect your wallet through the application, it will automatically attempt to:

1. Detect if you're connected to EDU Chain
2. Switch to EDU Chain if you're on a different network
3. Add EDU Chain to your wallet if it's not already configured


