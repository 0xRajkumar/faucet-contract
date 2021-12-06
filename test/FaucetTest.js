const chai = require('chai');
const BN = require('bn.js');
// const { ethers } = require('ethers');

// Enable and inject BN dependency
chai.use(require('chai-bn')(BN));

describe("Faucet unit test", () => {
    before(async () => {
        const Faucet = await ethers.getContractFactory('Faucet')
        this.faucet = await Faucet.deploy()
    })
    beforeEach(async () => {
        await this.faucet.deployed()
    })
    it("is contract deployed succesfully?", async () => {
        console.log(this.faucet.address)
    })
})