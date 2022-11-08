require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:'.env'})

const POLYGON_TESTNET_HTTP_URL = process.env.POLYGON_TESTNET_HTTP_URL;
const INNFURA_GOERLI_API_KEY = process.env.INNFURA_GOERLI_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url:POLYGON_TESTNET_HTTP_URL,
      accounts:[PRIVATE_KEY]
    },
    goerli:{
      url:`https://goerli.infura.io/v3/${INNFURA_GOERLI_API_KEY}`,
      accounts:[PRIVATE_KEY]
    },
  }
};
