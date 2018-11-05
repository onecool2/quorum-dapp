const fs = require ('fs');
const solc = require ('solc');
const Web3 = require ('web3-quorum');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22000"));
console.log('Reading Contract...');
const input = fs.readFileSync('./1companyInfo/companyInfo.sol');
console.log('Compiling Contract...');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':companyInfo'].bytecode;
const abi = output.contracts[':companyInfo'].interface;
//Compile contract
console.log('abi' + ': ' + abi)
console.log('bytecode' + ': ' + bytecode)


//Contract Object
const companyContract = web3.eth.contract(JSON.parse(abi));
console.log('unlocking Coinbase account');
const password = "";
try {
        web3.personal.unlockAccount("0xed9d02e382b34818e88b88a309c7fe71e65f419d", password, 100);
} catch(e) {
        console.log(e);
        return;
}

console.log("Deploying the contract");
const companyContractInstance = companyContract.new(
    {
        data: '0x' + bytecode,
        from: "0xed9d02e382b34818e88b88a309c7fe71e65f419d",
        gas: 2000000,
    }, (err, res) => {
        if (err) {
           console.log('Err: ' + err);
           return;
        }
        console.log('TX: ' + res.transactionHash);
        web3.eth.getTransactionReceipt(res.transactionHash, function(err, ad) {
        //if (ad) {
            console.log('AD: ' + JSON.stringify(ad));
        //    console.log('contractAddress: ' + ad.contractAddress);
        //    break;
        });

    //console.log('Contract address: ' + res.address);
    // If we have an address property, the contract was deployed
    /*if (res.address) {
       console.log('Contract address: ' + res.address);
    }
    console.log('res: ' + JSON.stringify(res));*/
   });
