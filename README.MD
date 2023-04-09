# react-web3-counter

This repository contains a smart contact with a counter inside that can be deployed to a testnet block-chain with the help of [alchemy](https://www.alchemy.com/) for the blockchain connection. The counter value can be increased through a transaction.

## Dependencies Installation

Run the following command at the root of the repository to install dependencies on both contract and react workspaces:

```sh
yarn install
```

## Deploy contact

### Deploy to localhost

Run this command under /contract to make a node on localhost:

```sh
npx hardhat node
```

Then run this command to deploy the contract to localhost:

```sh
npx hardhat run scripts/deploy-counter.ts --network localhost
```

or

### Deploy to sepolia testnet via alchemy

Put your alchemy api key and sepolia wallet private key on /contract/.env.
Then run this command under /contract and the contact will be deployed to the sepolia testnet:

```sh
npx hardhat run scripts/deploy-counter.ts --network sepolia
```

## Make transaction via react app

Put the deployed address of the contact to /react/.env which can be find from the log after deployed the contact above. Then run the react app under /react:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) from a browser with metamask extension, metamask will prompt to ask what account that you want to connect to the counter page. After choosing an account, the counter value obtained from the deployed contract will be displyed. 

Click the increment button, then metamask will prompt and ask for a new transaction to increase the count. Click submit for the transcation and wait for a moment. The counter will be increased once the transaction success.
