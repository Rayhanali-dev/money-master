function getInputValue (id) {
    const incomeField = document.getElementById(id);
    const incomeFieldValue = parseInt(incomeField.value);
    return incomeFieldValue;
}

function getInnerText (id) {
    const element = document.getElementById(id);
    const elementText = parseInt(element.innerText);
    return elementText;
}

function setInnerText (id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

document.getElementById('calculate').addEventListener('click', function(){
    const incomeField = getInputValue ('income-field');
    const foodField = getInputValue('food-field');
    const rentField = getInputValue('rent-field');
    const chothField = getInputValue('clothed-field');


    const totalExpense = foodField + rentField + chothField;


    if (incomeField === '' || isNaN(incomeField)) {
        alert('please provide a valid number');
        return;
    } else if (foodField === '' || isNaN(foodField)) {
        alert('please provide a value');
        return;
    } else if (rentField === '' || isNaN(rentField)) {
        alert('please provide a valid number');
        return;
    } else if (chothField === '' || isNaN(chothField)) {
        alert('please provide a valid number');
        return;
    } else if (incomeField < totalExpense) {
        alert('vai ato tk nai');
        return;
    }

    setInnerText('total-expense', totalExpense);


    const totalExpenseAmount = getInnerText('total-expense');
    const totalBalance = incomeField - totalExpenseAmount;
    setInnerText('balance', totalBalance);
})

document.getElementById('save').addEventListener('click', function(){
    const incomeField = getInputValue ('income-field');
    const percentageAmount = getInputValue('percentage-amount');
    const dividedPercentage = percentageAmount / 100;
    const multiPercentage = incomeField * dividedPercentage;
    const saveAmount = multiPercentage
    const balance = getInnerText('balance');
    
    if (balance < saveAmount) {
        alert('balance insufficient');
        return;
    } else if (percentageAmount == '' || isNaN(percentageAmount)) {
        alert('please provide a valid number')
        return;
    } else {
        setInnerText('saving-amount', saveAmount);
    }
    
    const savingAmount = getInnerText('saving-amount');

    const remainingAmount = balance - savingAmount;
    setInnerText('remaining-amount', remainingAmount);
})