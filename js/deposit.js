document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmountField = document.getElementById('deposit-amount');
    const depositAmount = depositAmountField.value;
    const totalDepostField = document.getElementById('deposit');
    const totalDepostAmount = totalDepostField.innerText;
    const totalDepositInInteger = parseInt(totalDepostAmount)
    console.log(totalDepositInInteger);
    const totalAmount = (parseInt(depositAmount)+ totalDepositInInteger);
    console.log(totalAmount)
    totalDepostField.innerText = totalAmount;
    
    const totalBalanceField = document.getElementById('balance');
    const totalBalanceAmount = totalBalanceField.innerText;
    const totalBalanceInInteger = parseInt(totalBalanceAmount);

    const totalBalance = parseInt(depositAmount)+ totalBalanceInInteger;
    totalBalanceField.innerText = totalBalance;
    depositAmountField.value ='';

    
    


})