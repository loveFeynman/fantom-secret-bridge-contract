/**
    * @description      : 
    * @author           : Winner
    * @group            : 
    * @created          : 19/12/2021 - 05:49:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/12/2021
    * - Author          : Winner
    * - Modification    : 
**/
var FHM = artifacts.require('./src/contracts/FHM.sol');
var MultiSigSwapWallet = artifacts.require('./src/contracts/MultiSigSwapWallet.sol');
var owner = '0x13c671CD13C3b645A91b5a7dcbf58C10F4E4Fe6e';
var collector = '0x7dBcb75a8Bc11420d4974AF2C575D4d7cAFdE87C';

module.exports = async function(deployer) {
  await deployer.deploy(FHM, 10000000, 'FHM', "Fantohm", 18);
  await deployer.deploy(MultiSigSwapWallet, owner, 0, collector);
  // const deployedCowToken = await CowNFT.deployed();
  // const deployedFarmToken = await CowNFT.deployed();
};