const dotenv = require('dotenv')
dotenv.config()

const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    bscscan: '2IQ7HGRG1JK283SMENAKXN4ITCQS4K454S', //bsc
    etherscan: 'UTGI398N6DI5Q3KBXDDCQI8YJDN89FWUFQ', //ether
    polygonscan: 'F8TAY97BTJHAVZZHV3WGK62E6IFPWSS6CE', //matic
    ftmscan: 'HUEK6CEPJ6X63S1BB24RNPB1K2QAKHI5X1', //ftm
    // etherscan: '5BPBFI4QSJCQWEM51D576A56YA7YUTGM85', //avax
  },

  networks: {
    BSC: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://data-seed-prebsc-2-s2.binance.org:8545/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 97,
      // gas: 30000000,
      // gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 2000,
      skipDryRun: true,
      networkCheckTimeout: 1000000
    },

   
    MAINNET: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl:
            'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 1,
      // gas: 5000000,
      // gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    ROPSTEN: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl:
            'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 3,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },rinkeby:{
      host: "localhost",
      provider: function() {
        return new HDWalletProvider( process.env.MNEMONIC, process.env.RINKEBY);
      },
      network_id:4
      , gas : 6700000
      , gasPrice : 10000000000,
      network_id: 4,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    GORLI: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl:
            'https://eth-goerli.g.alchemy.com/v2/4mBGqpQONSgJhpYHM8TlVZmpwH5Bn1fy',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 5,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    PULSE
      : {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl:
            'https://rpc.v2b.testnet.pulsechain.com            ',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 941,
      gas: 5000000,
      gasPrice: 25000000000,
     
    },
    KOVAN: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl:
            'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 42,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    MATIC: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://polygon-rpc.com/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 137,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    MATICTESTNET: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://rpc-mumbai.maticvigil.com/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 80001,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    FANTOM: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://rpcapi.fantom.network/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 250,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    FANTOMTESTNET: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://rpc.testnet.fantom.network/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 4002,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    XDAI: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://rpc.xdaichain.com/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 100,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    BSCMAIN: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://bsc-dataseed.binance.org/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 56,
      // gas: 5000000,
      // gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    MOONRIVER: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://rpc.moonriver.moonbeam.network',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 1285,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    AVALANCHE: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://api.avax.network/ext/bc/C/rpc',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 43114,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    FUJI: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 43113,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    HECO: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://http-mainnet-node.huobichain.com/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 128,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    HECOTESTNET: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://http-testnet.hecochain.com',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 256,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    HARMONY: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://api.harmony.one/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 1666600000,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    HARMONYTESTNET: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://api.s0.b.hmny.io/',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 1666700000,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    OKEX: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://exchainrpc.okex.org',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 66,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    OKEX_TESTNET: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY],
          providerOrUrl: 'https://exchaintestrpc.okex.org',
          numberOfAddresses: 1,
          shareNonce: true,
        }),
      network_id: 65,
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,
      timeoutBlocks: 700,
      skipDryRun: true,
    },
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",
      // from: "0xCd75bdb790376d4823f9324Bc30E8Acb9f6026fA"
      // Any network (default: none)
     },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.9', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 800,
        },
        evmVersion: 'berlin',
      },
    },
  },

  db: {
    enabled: false,
  },
}