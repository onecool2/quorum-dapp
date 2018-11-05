var arguments = process.argv.splice(2);
const Web3 = require ('web3-quorum');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22000"));
account = arguments[0];
str = arguments[1];
//"0xed9d02e382b34818e88b88a309c7fe71e65f419d";
var str = web3.toHex(str);
console.log("hex: "+str);
var msg = web3.eth.sign(account, str);
console.log("signed: " +msg);
/*******************************************/

