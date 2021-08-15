 
// handle deposit button even
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposit
  const depositInput =document.getElementById('deposit-input');
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText)
  // console.log(depositAmount);


  // update deposit total

  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText)
  const newDepositTotal = previousDepositAmount + newDepositAmount
  depositTotal.innerText = newDepositTotal;

  // update account balance

  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;


//   clear the deposit input field
  depositInput.value = '';

});
 
// handle withdraw even han 
document.getElementById('withdraw-button').addEventListener('click',function(){
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmountText = withdrawInput.value;
  const withdrawAmount = parseFloat(withdrawAmountText)
  console.log(withdrawAmount);
   
  // set withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  
  const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;

  //  updete balance

  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  previousBalanceTotal = parseFloat(previousBalanceText);
  const newBalanceTotal = previousBalanceTotal - withdrawAmount;
  balanceTotal.innerText = newBalanceTotal;


  // clear withdraw input

  withdrawInput.value = '';
})

