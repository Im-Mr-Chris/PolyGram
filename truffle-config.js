require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic = proces.env.MNEMONIC.toString().trim()

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // match any network id
    },
    matic: {
      provider: () =>
      new HDWalletProvider(
        mnemonic,
          'https://matic-mumbai.chainstacklabs.com',
      ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },


//  need to specify the contracts build directory, solidity version, and the compiler (solc) defaults.
//  contracts build directory is the default output directory path for compiled contracts.
//  we want the output to be our frontend.
contracts_build_directory: './src/abis/',
compilers: {
  solc: {
    version: '0.6.0',
    optimizer: {
      enabled: true,
      runs: 200,
    },
    },
  },
}