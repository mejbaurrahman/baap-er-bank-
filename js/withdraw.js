document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmountField = document.getElementById('withdraw-amount');
    const withdrawAmount = withdrawAmountField.value;
    const totalDepostField = document.getElementById('withdraw');
    const totalDepostAmount = totalDepostField.innerText;
    const totalwithdrawInInteger = parseInt(totalDepostAmount)
    console.log(totalwithdrawInInteger);
    const totalAmount = (parseInt(withdrawAmount)+ totalwithdrawInInteger);
    console.log(totalAmount)
    totalDepostField.innerText = totalAmount;
    
    const totalBalanceField = document.getElementById('balance');
    const totalBalanceAmount = totalBalanceField.innerText;
    const totalBalanceInInteger = parseInt(totalBalanceAmount);

    const totalBalance =  totalBalanceInInteger-parseInt(withdrawAmount);
    totalBalanceField.innerText = totalBalance;
    withdrawAmountField.value ='';

})