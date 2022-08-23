function getInputValue(elementId){
    const element = document.getElementById(elementId);
    const value = parseFloat(element.value);
    element.value = "";
    return value;
}

function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const value = parseFloat(element.innerText);
    return value;
}
function setElementValue(elementId, value){
    const element =  document.getElementById(elementId);
    element.innerText = value;
}
document.getElementById('calculation').addEventListener('click', function(){
    const income = getInputValue('income-input-field');
    const foodExpense = getInputValue('food-input-field');
    const rentExpense = getInputValue('rent-input-field');
    const clothesExpense = getInputValue('clothes-input-field');

    const totalExpenses = foodExpense + rentExpense + clothesExpense;
    const balance = income - totalExpenses;

    if(isNaN (totalExpenses) || isNaN(balance)){
        alert('Input a valid amount');
        return;
    }

    setElementValue('total-expenses', totalExpenses);
    setElementValue('balance', balance);
})
document.getElementById('btn-save').addEventListener('click', function(){
    const balance = getElementValue('balance');
    const savePercentage = getInputValue('save-input-field');
    const savingAmmount = balance * (savePercentage / 100);
    const remainingBalance = balance - savingAmmount;

    if(isNaN(savingAmmount) || isNaN(remainingBalance)){
        alert('Input a valid amount');
        return;
    }

    setElementValue('saving-amount', savingAmmount);
    setElementValue('remaining-amount', remainingBalance);
})