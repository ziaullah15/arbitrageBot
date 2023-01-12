const bot = artifacts.require("ArbitrageBot");
module.exports = function (deployer) {
  deployer.deploy(bot);
};