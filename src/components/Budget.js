import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);},0);
        if(newBudget > 20000) {
            alert("Budget cannot exceed the fund of £ 20000");
            return("");
        }
        if(newBudget < totalExpenses) {
            console.log(totalExpenses);
            alert("Budget cannot be less than Spending £ " + parseInt(totalExpenses));
            return("");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
