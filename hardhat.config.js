/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { https://eth-sepolia.g.alchemy.com/v2/a8g4QmusSJRwDFdlgkTuYynEBhW8nXzK, a8g4QmusSJRwDFdlgkTuYynEBhW8nXzK } = process.env;

module.exports = {
    solidity: "0.7.3",
    defaultNetwork: "sepolia",
    networks: {
        hardhat: {},
        sepolia: {
            url: https://eth-sepolia.g.alchemy.com/v2/a8g4QmusSJRwDFdlgkTuYynEBhW8nXzK,
            accounts: [`0x${a8g4QmusSJRwDFdlgkTuYynEBhW8nXzK}`]
        }
    },
}
