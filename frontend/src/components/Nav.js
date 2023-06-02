import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate(); 

    const auth = localStorage.getItem('user');
    const admin = auth.role;
    // console.log("hh"+admin);
    const logout = ()=>{
        localStorage.clear();
        navigate('/login');
    }
  return (
    <>
      {/* <ul className="nav-ul">
            <li><Link to="/ho">Receipe</Link></li>
            <li><Link to="/add-receipe">Add Receipe</Link></li>
            
           
        </ul>  */}
        { auth ? <ul className="nav-ul">
            <li><Link to="/home"> <img className='nav-icon' src="/images/receipe-man.png" alt="" /> &nbsp; Receipe Recommender </Link></li>
            <li><Link to="/add-receipe">Add Receipe</Link></li>
            {/* <li><Link to="/update/:id">Update Product</Link></li> */}
           {JSON.parse(auth).role == 1 ? <> <li><Link to="/profile">Profile</Link></li> <li><Link to="/dashboard">Dashboard</Link></li> </> : <> <li><Link to="/profile">Profile</Link></li> </> }
            {/* <li><Link to="/profile">profile</Link></li> */}
            {/* <select name="sysytem" id="hh">
              <option value="dashboard"><li>Dashbo</li></option>
              <option value="dashboard"><li>Dashbo</li></option>
            </select> */}
            <li><Link to='/login' onClick={logout}>Logout  ({JSON.parse(auth).username}) </Link> </li>
        </ul> 
         :   <ul className="nav-ul nav-right" >
            <li> <Link to="/">Sign Up</Link></li>
             <li><Link to="/login" >Login</Link></li>
         </ul>
        }
    </>
  )
}

export default Nav;
