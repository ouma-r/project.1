
// function createAccount(account){
//     for (var i=0;i<account;i++){
//         if(account!==)



//     }
// }



    var balance = 0;
      
    function deposit(amount) {
      balance += amount;
      $("#balance").text("$" + balance.toFixed(2));//toFixed returns number to string
    }
    
    function withdraw(amount) {
      if (balance >= amount) {
        balance -= amount;
        $("#balance").text("$" + balance.toFixed(2));
      } else {
        alert("Insufficient funds!");
      }
    }
    
    $(document).ready(function() {
      $("#depositBtn").click(function() {
        var amount = parseFloat(prompt("Enter deposit amount:"));//parseFloat returns typed number to float","
        if (!isNaN(amount) && amount > 0) {
          deposit(amount);
        } else {
          alert("Invalid amount!");
        }
      });
      
      $("#withdrawBtn").click(function() {
        var amount = parseFloat(prompt("Enter withdrawal amount:"));
        if (!isNaN(amount) && amount > 0) {
          withdraw(amount);
        } else {
          alert("Invalid amount!");
        }
      });
    });
  

