import { expect } from "chai";
import { ethers } from "hardhat";
import { NFTCollectible } from "../typechain";

describe("NFTCollectible", function() {
  let contract: NFTCollectible;
  let publisher: string;
  const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));


  beforeEach(async () => {
    const NFTCollectible = await ethers.getContractFactory("NFTCollectible");
    contract = await NFTCollectible.deploy();

  });

  describe("reserve", () => {
    it("should mint 10 NFTs on publisher account", async function() {

      const [owner] = await ethers.getSigners();
      await contract.deployed();

      await contract.reserveNFTs();
      let res = await contract.tokensOfOwner(owner.address);

      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
      expect(res.length).to.equal(10);
    });
  });
  describe("mintNft", () => {
    it("should mint x NFTs on publisher account when passing x", async function() {

      const [owner] = await ethers.getSigners();
      await contract.deployed();
        const { utils } = require("ethers");

      await contract.mintNFTs(5, utils.parseEther('1'));
      let res = await contract.tokensOfOwner(owner.address);

      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
      expect(res).to.be.not.NaN;
      expect(res.length).to.equal(5);

      await contract.mintNFTs(3, utils.parseEther('1'));
      res = await contract.tokensOfOwner(owner.address);

      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
      expect(res).to.be.not.NaN;
      expect(res.length).to.equal(8);
    });
  });
  describe("ContractImpl", () => {
    it("call pre implemented functions", async function() {

      const [owner, addr1] = await ethers.getSigners();
      await contract.deployed();

      await contract.reserveNFTs();
      let res = await contract.tokensOfOwner(owner.address);

      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
      expect(res.length).to.equal(10);

      let tokenId = res[0];

      await contract.transferFrom(owner.address, addr1.address, tokenId);

      res = await contract.tokensOfOwner(owner.address);
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
      expect(res.length).to.equal(9);

      res = await contract.tokensOfOwner(addr1.address);
      expect(res).to.be.not.undefined;
      expect(res).to.be.not.null;
      expect(res.length).to.equal(1);
      expect(res[0]).to.equal(tokenId);
    });
  });
});

