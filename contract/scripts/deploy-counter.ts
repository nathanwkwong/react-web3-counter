import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';

async function deploy() {
    const Counter = await ethers.getContractFactory('Counter');
    const counter = await Counter.deploy();
    console.log('The contract is deployed to:', counter.address);
    return counter;
}

// @ts-ignore
async function count(counter) {
    await counter.count();
    console.log('Counter', await counter.getCounter());
}

deploy().then(count);

// deploy counter contract: npx hardhat run scripts/deploy-counter.ts --network localhost

// case 1(a state changing transaction)- eth_sendTransaction: e.g. adding one to a member of a contract, no data out (because store is expensive, altered state need time)
// case 2(a call to a network - eth_call): read-only, no gas needed

// re-execute our deploy script
// to identify a counter - address and its interface

// deploy counter contract: npx hardhat run scripts/deploy-counter.ts --network localhost
// deploy counter contract: npx hardhat run scripts/deploy-counter.ts --network sepolia
