const RobCoin = artifacts.require("RobCoin");

module.exports = function (deployer) {
    const initialSupply = 100 * (10 ** 6); // Adjust initial supply as needed
    deployer.deploy(RobCoin, initialSupply);
};