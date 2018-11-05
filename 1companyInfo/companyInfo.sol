pragma solidity ^0.4.15;

contract companyInfo {
  struct Company{
      address ethereumPublicKey;
      /* Following are company's infomations */
      string  companyName;
      string  foundingTime;
      string founderName;
      string companyAddress;
      string  quorumPublicKey;
      string  info;
  }
  
  address public owner;
  uint public mapSize;
  mapping (uint=> Company) public mapCompany;
  mapping (uint=>address) public mapIndex;
  /***************************************/
  constructor () public {
      mapSize = 0;
      owner = msg.sender;
  }
  
  function newCompany (address PublicKey, string companyName, string foundingTime 
    ) public{
      require(msg.sender == owner, "Only owner can call newCompany!");
      mapCompany[mapSize].ethereumPublicKey = PublicKey;
      mapCompany[mapSize].companyName = companyName;
      mapCompany[mapSize].foundingTime = foundingTime;
      mapSize++;
  }
  
  function modifyCompany (string founderName, string companyAddress, string quorumPublicKey, string info ) 
      public returns (bool) {
      for (uint i = 0; i < mapSize; i++) {
          if (mapCompany[i].ethereumPublicKey == msg.sender) {
              mapCompany[i].founderName = founderName;
              mapCompany[i].companyAddress = companyAddress;
              mapCompany[i].quorumPublicKey = quorumPublicKey;
              mapCompany[i].info = info;
              return true;
          }
      }
      return false;
  }
}
