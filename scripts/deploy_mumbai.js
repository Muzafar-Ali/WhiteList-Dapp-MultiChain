const { ethers } = require("hardhat");
const fs = require('fs')

async function main() {
  
  const whitelist = await ethers.getContractFactory("Whitelist")
  const maximumAddresses = 10;
  const deployWhiteList = await whitelist.deploy(maximumAddresses);

  await deployWhiteList.deployed();

  fs.writeFileSync('helper.js', `export const whiteListContractAddress = ${deployWhiteList.address}`)
  
  console.log('WhiteList deployed to ', deployWhiteList.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
