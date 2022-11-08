const {ethers} = require('hardhat')
const fs = require('fs')

async function main(){

    const whitelist = await ethers.getContractFactory("Whitelist");
    const maxAddresses = 12;
    const deployWhiteList = await whitelist.deploy(maxAddresses);

    await deployWhiteList.deployed();

    fs.writeFileSync('helper.js',`export const whiteListGoelri = ${deployWhiteList.address}`)
    console.log('WhiteList goerli deplyed to' , deployWhiteList.address);
}
main().catch((error)=>{
    console.error(error)
    process.exitCode =1
});