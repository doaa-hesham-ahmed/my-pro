//Bank Account
var account={
    id:1,
    name:"Doaa",
    balance:5000,
};

//show date for me (DeclearFunction)
function showacount(){
   console.log(`AcountID : ${account.id} `);
   console.log(`Name : ${account.name} `);
   console.log(`Balance : ${account.balance} `);
}
//deposit amount of balance  (DeclearFunction)  
function deposit(amount){ 
  if(amount>0) {
    account.balance+=amount;
    console.log(`deposit : ${amount}`);
     console.log(`NewBalance : ${account.balance}`);
  }
  else console.log("invaild amount")
}
//withdraw amount of balance  (arrowfunction)
const withdraw=(amount)=>{
   if(amount>0 && amount<=account.balance) {
    account.balance-=amount;
    console.log(`withdraw : ${amount}`);
     console.log(`NewBalance : ${account.balance}`);
   }  
  else console.log("invaild amount")

}
//change the name (arrowfunction)
const changeName =(newname)=>{
    account.name=newname;
    console.log(`NewName : ${newname}`)
}
showacount();
deposit(1000);
withdraw(2000);
changeName("Ahmed");
showacount();