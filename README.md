# quorum
grantInfomation
There are three roles : government A company and B company, and B wants to know A's info, so

0. Prepare quorum with Tessera
1. Run following scripts to deploy basic contract. 
   1) `0confidentialCompanyInfo/run.sh`   //private contract
   2) `node 1companyInfo/deployCompanyInfo.js` //public contract
   3) `node 2grantList/deployGrantList.js` //public contract
   
2. government department could add a new company(A company) with following script
   1) `companyInfo/newCompanyInfo.sh`
   2) A company could update infomation use `1companyInfo/modifyCompany.sh`

3. visitor(B) want to know A's info 
   1) B insert a request record into grantList contract with `node 2grantList/insertGrantList.js`
   2) A agree B to get A's info,  so A run `node 2grantList/updateGrantList.js` to send A's signature.
   
4. government verify A's signature from grantList.sol, and create a new contract for B with A's info by 
   `node 3grantedCompanyInfo/deployGrantedCompanyInfo.js`
