document.getElementById('expense-calculate').addEventListener('click', function () {

    let getIncome = document.getElementById('income-input');

    //income ballance
    let incomeText = getIncome.value;
    let totalIncome = parseFloat(incomeText);
    // getIncome.value = '';


    //all expense
    const getFood = document.getElementById('food-input');
    const getRent = document.getElementById('rent-input');
    const getCloths = document.getElementById('cloths-input');

    //convert input value into number
    const foodText = getFood.value;
    const foodExpense = parseFloat(foodText);

    const rentText = getRent.value;
    const rentExpense = parseFloat(rentText);

    const clothsText = getCloths.value;
    const clothsExpense = parseFloat(clothsText);

    //Expense error handling
    if (isNaN(foodExpense) || foodExpense < 0) {
        return alert('Enter a Valdi Number')
    }
    else if (isNaN(rentExpense) || rentExpense < 0) {
        return alert('Enter a Valdi Number')
    }
    else if (isNaN(clothsExpense) || clothsExpense < 0) {
        return alert('Enter a Valdi Number')
    }

    //get all expense calculation
    const result = foodExpense + rentExpense + clothsExpense;

    //get all expense result
    const totalExpense = document.getElementById('total-expanse');
    const expenseText = totalExpense.innerText;
    totalExpense.innerText = result;

    //clear input field
    getFood.value = '';
    getRent.value = '';
    getCloths.value = '';

    //get total Balance
    let totalBalance = totalIncome - result;

    const balance = document.getElementById('total-balance');
    const balanceText = balance.innerText;
    balance.innerText = totalBalance;


    //Savings calculation part

    document.getElementById('total-saveings').addEventListener('click', function () {


        let getIncome = document.getElementById('income-input');
        //income ballance
        let incomeText = getIncome.value;
        let totalIncome = parseFloat(incomeText);


        let getParcent = document.getElementById('save-parcent');
        let parcentText = getParcent.value;
        let parcentage = parseFloat(parcentText);

        //Parcentage
        let saveAmount = (parcentage / 100) * totalIncome;
        let savingAmount = document.getElementById('saved-amount');
        let expenseAmountText = savingAmount.innerText;
        savingAmount.innerText = saveAmount;

        //remining balance
        let reminingBalance = document.getElementById('reamining-balance');
        let totalRemBalance = reminingBalance.innerText;
        reminingBalance.innerText = totalBalance - saveAmount;


    })


})


