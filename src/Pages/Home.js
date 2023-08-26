import React from 'react';
import TopFold from '../Components/TopFold/TopFold';
import './Home.css';
import ExpenseList from '../Components/ExpenseList/ExpenseList';
const Home = () => {
    return (
        <div className='home'>
            <TopFold/>
            <ExpenseList/>
        </div>
    );
};

export default Home;