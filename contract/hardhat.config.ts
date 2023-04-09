import 'hardhat-gas-reporter';
import '@nomiclabs/hardhat-waffle'; // work with TypeScript
import '@nomiclabs/hardhat-ethers';

import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.18',
    networks: {
        hardhat: {
            chainId: 1337 // match with metamask
        },
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [process.env.SEPOLIA_PRIVATE_KEY]
        }
    }
};
