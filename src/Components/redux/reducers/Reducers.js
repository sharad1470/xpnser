import { useDispatch } from 'react-redux';
import { addExpense } from '../actions/Actions';
import { ADD_EXPENSE , DELETE_EXPENSE} from '../action-types/ActionTypes';



const redux = require('redux');
const initialList=()=>{
    const list=localStorage.getItem("expense-list");
    let expense=[];
    if(list){
        expense=JSON.parse(list);
    }
    return expense;
}

const initialState={

    expenseList:initialList(),
    query:""
    
}

export const expenseReducer=(state=initialState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':{

           localStorage.setItem("expense-list",JSON.stringify([...state.expenseList,action.data]));
            return {...state,expenseList:[...state.expenseList,action.data]}
        }

        case 'DELETE_EXPENSE':
            {
                const {data}=action;
                const updatedData=state.expenseList.filter((item)=>
                    item.createdAt !==data.createdAt
                )
                localStorage.setItem("expense-list",JSON.stringify(updatedData));

                 return {...state,expenseList:updatedData}
                
            }

            case 'SEARCH_EXPENSE':
                return {...state,query:action.query}

        default:
            return state;
    }

}