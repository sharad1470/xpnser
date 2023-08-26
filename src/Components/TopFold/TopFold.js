import React, { useState } from 'react';
import './TopFold.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../redux/actions/Actions';
const TopFold = () => {
    const [query, setQuery]=useState();
    const dispatch=useDispatch();

    const handleQuery=(e)=>{
        const val=e.target.value;
        setQuery(val);

        dispatch(searchExpense(val));//dispatch is working faster that setquery so 
                                    //we need to pass val instead query variable
    }
    return (
        <div className='topfold'>
            {window.location.pathname==='/'
            ?(<div className='home-topfold'>
            <div className='searchbar'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder='search for expense' 
                        value={query}
                        onChange={(e)=>handleQuery(e)}
                />
            </div>
            <Link to='add-expense'>
            <div className='add-button'>
                <i className="fa-solid fa-circle-plus"></i>
                <label>Add</label>
            </div>
            </Link>
        </div>)
        :(
            <div className='add-topfold'>
                <Link to='/'>
                <div className='add-topfold-button'>
                    <i class="fa-solid fa-angle-left"></i>
                    <label>Back</label>
                </div>
                </Link>
                <div className='add-topfold-button'>
                    <i class="fa-solid fa-circle-xmark"></i>
                    <label>cancel</label>
                </div>
            </div>
)}
        
            
        </div>
    );
};

export default TopFold;