const RobCoin = artifacts.require("RobCoin");

contract("RobCoin", accounts => {
    const [deployerAccount, recipientAccount] = accounts;

    it("should assign the initial supply to the deployer", async () => {
        let instance = await RobCoin.deployed();
        let totalSupply = await instance.totalSupply();
        let deployerBalance = await instance.balanceOf(deployerAccount);

        assert.equal(deployerBalance.toNumber(), totalSupply.toNumber(), "Initial supply is not assigned to the deployer");
    });

    it("should transfer token between accounts", async () => {
        const amount = 100;
        let instance = await RobCoin.deployed();
        await instance.transfer(recipientAccount, amount, { from: deployerAccount });
        let balance = await instance.balanceOf(recipientAccount);

        assert.equal(balance.toNumber(), amount, "The recipient account did not receive the tokens");
    });
});