var util = require("util")
const Web3 =  require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:22000"));
var grantListABI = [{"constant":true,"inputs":[{"name":"startIndex","type":"uint256"},{"name":"creator","type":"address"}],"name":"findIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mapSize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"signedCode","type":"string"}],"name":"updateRecord","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"toCompany","type":"string"},{"name":"fromCompany","type":"string"},{"name":"accessCode","type":"string"},{"name":"fromCompanyPubKey","type":"string"},{"name":"signedCode","type":"string"}],"name":"insertRecord","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"mapIndex","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"mapAccess","outputs":[{"name":"toCompany","type":"string"},{"name":"fromCompany","type":"string"},{"name":"accessCode","type":"string"},{"name":"fromCompanyPubKey","type":"string"},{"name":"signedCode","type":"string"},{"name":"creator","type":"address"},{"name":"contractAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
const Contract = web3.eth.contract(grantListABI);

console.log('unlocking Coinbase account');
accountOne = "0xed9d02e382b34818e88b88a309c7fe71e65f419d";
account1 = "0x7f5eae0fd3a3c1fa19f4cd7ec9e8f65b4e3a5dc9";
account2 = "0xc2f70fc643452e0ab26470e342734c4f38d13b11";
account3 = "0x28385794c1b151a5ad64b1348efd01e76983de95";
const password = "";
try {
        web3.personal.unlockAccount(accountOne, password, 100);
} catch(e) {
        console.log(e);
        return;
}

CallContract = Contract.at("0xc6d951a64ef1b5152e38117f13d02beb889124b0");
CallContract.updateRecord.sendTransaction(0, "0xc5c31b25b459e0372b3997c82ff0bdd36fa28e5bd1b53b22e07f737226aedf147d74db77d191712d60643d77d2c1d752467ce8831c73f9b774f126729b37ddc21b" , {from:accountOne, gas:3000000}, function(error, result){
	console.log('result:' +result);
	console.log('error:' + error);
        //CallContract.get.call(function(error, result){
        //	console.log('after change:' + result);
});
/*
var account_one = web3.eth.accounts[0];
tokenContract.methods.set(124).send({from: "0x3f1d095f1293d5b2a14ee5c885984779b01a1052"}, function(error, result){
 console.log('result:' + result);
});

r = tokenContract.methods.get.call(function(error, result){
   console.log('error:' + error);
   console.log('r=' + r);
});
*/
