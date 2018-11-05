pragma solidity ^0.4.15;

contract confidentialCompanyInfo {
  address public owner;
  /* Following are company's infomations */
  string public companyName;
  int public lineOfCredit;
  string public foundingTime;
  string founderName;
  string companyAddress;
  uint public registriedCapital;
  string public info;
  /***************************************/

  constructor (string companyN, int lineOC, string foundingT,
      string founderN, string companyAd, uint registriedC, string inf ) public {
      owner = msg.sender;
      companyName = companyN;
      lineOfCredit = lineOC;
      foundingT = foundingT;
      founderName = founderN;
      companyAddress = companyAd;
      registriedCapital = registriedC;
      info = inf;
  }

  function set(int lineOC) public {
    require(msg.sender == owner);
    lineOfCredit = lineOC;
  }

  function getAll() public constant returns (string , int , string ,
      string , string , uint , string ) {
          return (companyName, lineOfCredit, foundingTime, founderName, 
            companyAddress, registriedCapital, info);
    
  }
  
  function get() public constant returns (int lineOC) {
    return lineOfCredit;
  }
}

