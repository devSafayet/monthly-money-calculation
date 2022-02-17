// Main Part Calculation 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodCost = document.getElementById('food-cost').value ;
    const rentCost = document.getElementById('rent-cost').value ;
    const clothesCost = document.getElementById('clothes-cost').value;
    // total cost 
    const totalCost = parseFloat(foodCost)+ parseFloat(rentCost)+ parseFloat(clothesCost);
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;

    // total income and income cost 
    const totalIncome = document.getElementById('tota-income').value;
    const totalMinusIncome = parseFloat(totalIncome) - parseFloat(totalCost);
    
    const totalMinusBalance = document.getElementById('minus-balance');
    
    totalMinusBalance.innerText = totalMinusIncome;
})