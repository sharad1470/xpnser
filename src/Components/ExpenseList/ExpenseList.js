import React, { useEffect, useState } from 'react';
import './ExpenseList.css';
import Card from './Card';
import { useSelector } from 'react-redux';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ExpenseList = () => {
    let list=useSelector(state=>state.expenses.expenseList);
    let quer=useSelector(state=>state.expenses.query);
    const filteredList=list.filter((item)=>item.title.includes(quer));
    const notifySuccess=()=>toast.success("Expense deleted");

    
    console.log(quer);
    
    return (
        <div className='expense-list'>
             <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {filteredList.length>0?(
                filteredList.map(item =>
                    <Card item={item} notifySuccess={notifySuccess}/>
                )
            ):(<div className='empty-state'>
                <img src={"https://static8.depositphotos.com/1029150/894/i/450/depositphotos_8941896-stock-photo-empty-box.jpg"} alt="emptybox"/>
                <div>List is Empty!!</div>
            </div>)}
        </div>
        
    );
};


export default ExpenseList;