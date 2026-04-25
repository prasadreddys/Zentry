# Web3 Game

A simple web3 clicker game built with Next.js, TypeScript, Tailwind CSS, and RainbowKit for wallet connection.

## Features

- Connect your wallet using RainbowKit
- Simple clicker game to earn points
- Smart contract for storing high scores on-chain
- Web3 integration ready for blockchain features

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Connect your wallet and start clicking!

## Smart Contracts

The project includes a `ClickerGame` smart contract written in Solidity.

### Compile Contracts
```bash
npm run compile
```

### Run Tests
```bash
npm run test
```

### Deploy Contracts
```bash
npm run deploy
```

Note: For deployment to testnets, set up your `.env` file with `SEPOLIA_URL` and `PRIVATE_KEY`.

## Technologies Used

- Next.js 16
- TypeScript
- Tailwind CSS
- RainbowKit
- Wagmi
- Viem
- Ethers
- Hardhat
- Solidity

## Next Steps

- Integrate the frontend with the smart contract
- Add NFT rewards
- Create a leaderboard
- Deploy to a testnet

## Deploy on Vercel

Deploy your app to Vercel for easy hosting.
