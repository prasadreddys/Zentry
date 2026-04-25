import hre from "hardhat";

async function main() {
  console.log("Deploying ClickerGame contract...");

  const ClickerGame = await hre.ethers.getContractFactory("ClickerGame");
  const clickerGame = await hre.ethers.deployContract("ClickerGame");

  await clickerGame.waitForDeployment();

  const address = await clickerGame.getAddress();
  console.log("ClickerGame deployed to:", address);

  // Save the contract address to a file or environment variable
  console.log("Contract address:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });