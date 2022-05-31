npx hardhat run --network moonbase scripts/deploy.js # 0xE97521529B9d44DEA8E13E16E90687ed615E42fB

npx hardhat console --network moonbase

const MyNft = await ethers.getContractFactory('NFTCollectible');

const mynft = await MyNft.attach('0xE97521529B9d44DEA8E13E16E90687ed615E42fB'); # put adrress instead

await mynft.reserveNFTs();

await mynft.mintNFTs(3);

const { utils } = require("ethers");
await mynft.mintNFTs(3, { value: utils.parseEther('0.03') });

await mynft.tokensOfOwner("0x4DA3A083831D9863b0C2bE734C351e6c0Cf83Fad")



