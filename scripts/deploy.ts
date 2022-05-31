import { ethers } from "hardhat";
// scripts/deploy.js
async function deploy() {
   const MyNFT = await ethers.getContractFactory('NFTCollectible');
   console.log('Deploying MyNFT...');

   const mynft = await MyNFT.deploy();

   await mynft.deployed();

   console.log('MyNFT deployed to:', mynft.address);
}

deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

