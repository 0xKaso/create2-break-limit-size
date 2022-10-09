// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  const Middleware = await hre.ethers.getContractFactory("Middleware");
  const MiddlewareInstance = await Middleware.deploy();
  await MiddlewareInstance.deployed();

  const Factory = await hre.ethers.getContractFactory("Factory");
  const FactoryInstance = await Factory.deploy();
  await FactoryInstance.deployed();

  const newMain1 = await FactoryInstance.callStatic.create(
    MiddlewareInstance.address
  );

  await FactoryInstance.create(
    MiddlewareInstance.address
  );

  const newMain2 = await FactoryInstance.callStatic.create(
    MiddlewareInstance.address
  );

  await FactoryInstance.create(
    MiddlewareInstance.address
  );
  
  const newMain3 = await FactoryInstance.callStatic.create(
    MiddlewareInstance.address
  );

  await FactoryInstance.create(
    MiddlewareInstance.address
  );

  console.log("Middleware ", MiddlewareInstance.address);
  console.log("Factory ", FactoryInstance.address);
  console.log("Main1 ", newMain1);
  console.log("Main2 ", newMain2);
  console.log("Main3 ", newMain3);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
