

export const multiChain = async(network)=>{

    console.log('network',network);
    let chainConnected;

    if(network == '0x1'){
        chainConnected = 'ethereum'
    }else if(network == '0x13881'){
        chainConnected = 'mumbai'
    }else if(network == '0x5'){
        chainConnected = 'goerli'
    }

    return chainConnected
}
