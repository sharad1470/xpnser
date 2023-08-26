import React, { useState } from 'react';
import './AddForm.css';
import { categories } from '../../constants/categoryData';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer} from 'react-toastify';
import { addExpense, deleteExpense } from '../redux/actions/Actions';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal';
const AddForm = () => {
    const dispatch=useDispatch();
    const cat=categories;
    const [categoryOpen, setCategoryOpen]=useState(false);
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [title, setTitle]=useState('');
    const[amount,setAmount]=useState('');
    const[category, setCategory]=useState();
    const[selectedCategory, setSelectedCategory]=useState();

    const handleAmount=(e)=>{
        const val=parseFloat(e.target.value);
        if(isNaN(val)){
            alert('enter correct type');
            return;
        }
        setAmount(val);

    }

    const handleCategory=(category)=>{
        setCategory(category);
        setCategoryOpen(false);
        setSelectedCategory(category.title);

    }
    const handleSubmit=()=>{
        if(title==='' || amount==='' || !category){
            const notify = () => toast("Please enter valid data");
            notify();
            return;
        }
        
        const data={
            title,
            amount,
            category,
            createdAt:new Date().toString()
        }
        

        dispatch(addExpense(data));
       setIsModalOpen(true);
    }
    return (
        <div className='add-form'>
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

            <SuccessModal isModalOpen={isModalOpen}/>
            <div className='form-item'>
                <label className='form-title'>Title</label>
                <input placeholder='Give a name to yor expenditure' 
                value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='form-item' >
                <label>Amount</label>
                <input placeholder='Enter Amount' className='amount-input'
                value={amount} onChange={(e)=>handleAmount(e)}/>
            </div>

            <div className='category-container-parent'>

                <div className='category-dropdown' 
                onClick={()=>setCategoryOpen(!categoryOpen)}>
                    <label>{selectedCategory?selectedCategory:"category"}</label>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                

                {categoryOpen && <div className='category-container'>
                    
                        
                        {cat.map((category)=>{
                            return  <div 
                                    className='category-item'
                                    style={{borderRight:`5px solid ${category.color}`}}
                                    onClick={()=>handleCategory(category)}
                                    >
                                        <label>{category.title}</label>
                                        <img src={category.icon} alt=""/>
                                    </div>


                        })}
                       
                       </div>
                }
               
                
            </div>
            <div className='form-add-button'>
                    <div onClick={handleSubmit}>
                        <label>Add</label>
                        <i class="fa-regular fa-paper-plane"></i>
                    </div>
                </div>
            
        </div>
    );
};

export default AddForm;