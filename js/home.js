//Add Money Form
document.getElementById("add-money-button").addEventListener("click", function(){
    let moneyField = getDataById("amount-add-money").value;
    let pinField = getDataById("pin-number").value;
    
    //String To Number Conversion
    const addMoneyAmount = parseFloat(moneyField); 
    const pinNumber = parseFloat(pinField);

    //validation 
    if(pinNumber == 123 && addMoneyAmount > 0){
        let balance = getDataById("available-balance").innerText;
        let availableBalance = parseFloat(balance);
        availableBalance = availableBalance + addMoneyAmount;
        document.getElementById("available-balance").innerText = availableBalance;
        getDataById("amount-add-money").value = '';
        getDataById("pin-number").value = '';
    }
    else{
        alert("Wrong Input");
        getDataById("amount-cash-out").value = '';
        getDataById("cash-out-pin").value = '';
    }
})

//Cash Out Form
document.getElementById("cash-out-button").addEventListener("click", function(){
    let moneyField = getDataById("amount-cash-out").value;
    let pinField = getDataById("cash-out-pin").value;
    
    //String To Number Conversion
    const cashMoneyAmount = parseFloat(moneyField); 
    const pinNumber = parseFloat(pinField);
    let balance = getDataById("available-balance").innerText;
    let availableBalance = parseFloat(balance);

    //validation 
    if(pinNumber == 123 && availableBalance > cashMoneyAmount > 0){
        availableBalance = availableBalance - cashMoneyAmount;
        document.getElementById("available-balance").innerText = availableBalance;
        getDataById("amount-cash-out").value = '';
        getDataById("cash-out-pin").value = '';
    }
    else{
        alert("Wrong Input");
        getDataById("amount-cash-out").value = '';
        getDataById("cash-out-pin").value = '';
    }
})


//Show and Hide Add Money Form + Cash Out Form 
getDataById("btn-cash-out").addEventListener('click', function(){
    getDataById("cash-out-form").classList.remove("hidden");
    getDataById("add-money-form").classList.add("hidden");

})
getDataById("btn-add-money").addEventListener('click', function(){
    getDataById("cash-out-form").classList.add("hidden");
    getDataById("add-money-form").classList.remove("hidden");

})