
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';
import Home from './components/Home';                    
import Cart from './components/Cart';                    
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    
    
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
