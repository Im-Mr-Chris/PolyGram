/*

    Deploy the smart contract to our development blockchain Ganache.
    Be sure it is already running in a separate window or tab.

    This JavaScript file deploys the contract to the blockchain.  
    By executing this file, we can put the smart contract on a 
    blockchain by running the following command.

    truffle migrate

*/
const MyNFT = artifacts.requre('NFT')
module.exports = function (deployer) {
   deployer.deploy(MyNFT)
}