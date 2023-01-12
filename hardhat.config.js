const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: './.env.local'});
// npx hardhat accounts
task("accounts","Getting all accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})
// 0x351f4D404021f1A91eE754e0288030bd8Fd40348
const privateKey = process.env.PUBLIC_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "polygon",
  networks:{
    hardhat: {},
    polygon:{
      url: process.env.PUBLIC_RPC_URL,
      accounts: [privateKey]
    }
  }
};
