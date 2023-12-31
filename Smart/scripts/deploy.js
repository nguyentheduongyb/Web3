// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions")
  const transactions = await Transactions.deploy()
  let provider = new ethers.providers.JsonRpcProvider(
    "HTTP://172.20.80.1:7545"
  );
  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }
  catch (error) {
    console.log(error);
    process.exit(1);
  }
}
runMain()