require("@nomicfoundation/hardhat-toolbox");
// https://eth-mainnet.g.alchemy.com/v2/C0mm-cGs7-6eBsMLx7qndwNIzO_7o2ee
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/C0mm-cGs7-6eBsMLx7qndwNIzO_7o2e',
      accounts: ['0e39e2710676805c9882bb0983ac8aafc4271a4ffa4e3278764d9a55e693a664']
    }
  }
};
