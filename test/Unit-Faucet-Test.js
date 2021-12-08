const {assert} = require('chai');
const chai = require('chai');
const BN = require('bn.js');
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
        assert(this.faucet.address !== '', 'Not deployed')
    })
})