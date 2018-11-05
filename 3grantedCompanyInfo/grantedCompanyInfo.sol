pragma solidity ^0.4.15;
interface ConfidentialCompanyInfo {
  function getAll() external constant returns (string, int, string, string,
    string, uint, string );
          
}
contract grantedCompanyInfo {
  address public owner;
  ConfidentialCompanyInfo public confidentialCompanyInfo;
  /********************** Following are company's infomations *************/
  string public companyName;
  int public lineOfCredit;
  string public foundingTime;
  string founderName;
  string companyAddress;
  uint public registriedCapital;
  string public info;
  /************************************************************************/

  constructor (address ad ) public {
    owner = msg.sender;
    confidentialCompanyInfo = ConfidentialCompanyInfo(ad);  
    confidentialCompanyInfo.getAll();
   
    (companyName,lineOfCredit,foundingTime,founderName, companyAddress, 
    registriedCapital, info) = confidentialCompanyInfo.getAll();
  }

  function set(address ad) public {
    confidentialCompanyInfo = ConfidentialCompanyInfo(ad);
  }
}
