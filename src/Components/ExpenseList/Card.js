import React from 'react';
import './Card.css';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions/Actions';
const Card = ({ item ,notifySuccess}) => {
    const time=moment(item.createdAt).fromNow();
    const dispatch=useDispatch();
    const handleDelete=(item)=>{
        dispatch(deleteExpense(item));
        notifySuccess();
    }
    return (
        <div className='card' 
        style={{borderRight:`6px solid ${item.category.color}`}}
        >
            <div className='card-icon'>
                {item.category.icon}
                
            </div>

            <div className='card-info'>
                <label className='card-title'>{item.title}</label>
                <label className='card-time'>{time}</label>
            </div>
            <div className='card-right'>
                <div className='card-amount'>
                    $ {item.amount}
                </div>
                <div className='delete-icon' onClick={()=>handleDelete(item)} >
                    <i class="fa-regular fa-trash-can"></i>
                </div>

            </div>
            
              
            
            
        </div>
    );
};

export default Card;