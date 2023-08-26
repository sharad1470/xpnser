import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AddExpense from './Components/AddExpense/AddExpense';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    
      <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='add-expense' element={<AddExpense/>}/>
      </Routes>
      <Footer/>
      </Router>
    
  );
}

export default App;
