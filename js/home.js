//Add Money Form
document.getElementById("add-money-button").addEventListener("click", function(){
    let moneyField = getInputFieldById("amount-add-money").value;
    let pinField = getInputFieldById("pin-number").value;
    
    //String To Number Conversion
    const addMoneyAmount = parseFloat(moneyField); 
    const pinNumber = parseFloat(pinField);

    //validation 
    if(pinNumber == 123 && addMoneyAmount > 0){
        let balance = getInputFieldById("available-balance").innerText;
        let availableBalance = parseFloat(balance);
        availableBalance = availableBalance + addMoneyAmount;
        document.getElementById("available-balance").innerText = availableBalance;
        getInputFieldById("amount-add-money").value = '';
        getInputFieldById("pin-number").value = '';
    }
    else{
        alert("Wrong Input");
        getInputFieldById("amount-cash-out").value = '';
        getInputFieldById("cash-out-pin").value = '';
    }
})

//Cash Out Form
document.getElementById("cash-out-button").addEventListener("click", function(){
    let moneyField = getInputFieldById("amount-cash-out").value;
    let pinField = getInputFieldById("cash-out-pin").value;
    
    //String To Number Conversion
    const cashMoneyAmount = parseFloat(moneyField); 
    const pinNumber = parseFloat(pinField);
    let balance = getInputFieldById("available-balance").innerText;
    let availableBalance = parseFloat(balance);

    //validation 
    if(pinNumber == 123 && availableBalance > cashMoneyAmount > 0){
        availableBalance = availableBalance - cashMoneyAmount;
        document.getElementById("available-balance").innerText = availableBalance;
        getInputFieldById("amount-cash-out").value = '';
        getInputFieldById("cash-out-pin").value = '';
    }
    else{
        alert("Wrong Input");
        getInputFieldById("amount-cash-out").value = '';
        getInputFieldById("cash-out-pin").value = '';
    }
})


//Show and Hide Add Money Form + Cash Out Form 
getInputFieldById("btn-cash-out").addEventListener('click', function(){
    getInputFieldById("cash-out-form").classList.remove("hidden");
    getInputFieldById("add-money-form").classList.add("hidden");

})
getInputFieldById("btn-add-money").addEventListener('click', function(){
    getInputFieldById("cash-out-form").classList.add("hidden");
    getInputFieldById("add-money-form").classList.remove("hidden");

})