import { ethers } from "hardhat";
// scripts/deploy.js
async function deploy() {
   // 1. Get the contract to deploy
   const MyNFT = await ethers.getContractFactory('NFTCollectible');
   console.log('Deploying MyNFT...');

   // 2. Instantiating a new Box smart contract
   const mynft = await MyNFT.deploy();

   // 3. Waiting for the deployment to resolve
   await mynft.deployed();

   // 4. Use the contract instance to get the contract address
   console.log('MyNFT deployed to:', mynft.address);
}

deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

