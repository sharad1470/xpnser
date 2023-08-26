import React from 'react';
import './AddExpense.css';
import TopFold from '../TopFold/TopFold';
import AddForm from '../addForm/AddForm';
const AddExpense = () => {
    return (
        <div className='add-expense'>
            <TopFold/>
            <AddForm/>
            
        </div>
    );
};

export default AddExpense;