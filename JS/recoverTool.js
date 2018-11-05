var arguments = process.argv.splice(2);

const Web3 = require ('web3-quorum');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22000"));
/*******************************************/
str = arguments[0];
msg = arguments[1];
var strHex = web3.toHex(str);
var address = web3.personal.ecRecover(strHex, msg);
console.log("signed by:" +address);
