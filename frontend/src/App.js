import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import AddReceipe from './components/AddReceipe';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import UpdateReceipe from './components/admin/UpdateReceipe';
import Singlereceipe from './components/Singlereceipe';
import PrivateComponent from './components/private/PrivateComponent';


function App() {
  const auth = localStorage.getItem('user');
  return (
    <div>
    <BrowserRouter>
    
      <Routes>
      <Route element={<PrivateComponent/>} >

        <Route path='/home' element={<Home/> } />
    <Route path='/add-receipe' element={ <AddReceipe/>} />
    
    <Route path='/profile' element={<Profile/> } />
    <Route path='/dashboard' element={<Dashboard/> } />
    <Route path='/update/:id' element={<UpdateReceipe/>} />
    <Route path='/receipe/:id' element={<Singlereceipe/>} />
    
    </Route>
      
    <Route  path='/' element={<RegisterPage/>} />
    <Route path='/login' element={<LoginPage/>} />

      </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
