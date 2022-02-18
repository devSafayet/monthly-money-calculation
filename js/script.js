// Main Part Calculation 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodCost = document.getElementById('food-cost').value ;
    const rentCost = document.getElementById('rent-cost').value ;
    const clothesCost = document.getElementById('clothes-cost').value;
   
    // total cost 
    const totalCost = parseFloat(foodCost)+ parseFloat(rentCost)+ parseFloat(clothesCost);
    console.log(totalCost);
    const totalExpenses = document.getElementById('total-expenses');
    // error handle total expenses
    if(totalCost>0){
        totalExpenses.innerText = totalCost;
    }

    // total income and income cost 
    const totalIncome = document.getElementById('tota-income').value;
    const totalMinusIncome = parseFloat(totalIncome) - parseFloat(totalCost);
    const totalMinusBalance = document.getElementById('minus-balance');
    
     // error handle total  minus income
    if(totalMinusIncome>0){
        totalMinusBalance.innerText=totalMinusIncome;
    }
    
})
//saving Area
    document.getElementById('saving-button').addEventListener('click', function(){
    const persent= document.getElementById("persent");
    const savingAmmount= document.getElementById("saving-ammount");
    const mainingBalance= document.getElementById("maining-balance");
    const totalIncome = document.getElementById('tota-income');
    const income= parseInt(totalIncome.value);
    const totalMinusBalance = document.getElementById('minus-balance');
    const savings= (parseInt(persent.value) / 100) * income;
    savingAmmount.innerText=savings;
    const remainingBalance =parseInt(totalMinusBalance.innerText)-savings;
    mainingBalance.innerText= remainingBalance;


})