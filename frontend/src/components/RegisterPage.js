import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate(); 

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password,setPassword] = useState("");

    const collectData= async()=>{
        console.log(username,email,phone,password);
        if(!username, !email, !phone , !password){ 
            alert("Enter data properly");
        } else {
        const result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({username,email,phone,password}),
            headers:{
                'Content-Type':'application/json'
            }
        }) 
            const show = await result.json();
            console.log(show);
            localStorage.setItem('user',JSON.stringify(show));
            // localStorage.setItem('token',JSON.stringify(show.auth));
        if(show){
            navigate('/login');
        }
            }
        }
     

     const changePage = ()=>{
        navigate('/login');
      }

  return (
    <div className='register'>
     <div className="signup">
        
        <div className="signup-box">
                <h1> 🥘Receipe Recommender</h1>
            <input type="text" placeholder="enter Name" value={username} onChange={(e)=> setUsername(e.target.value)} />   <br />
            <input type="text" placeholder="enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />  <br />

            <input type="text" placeholder="enter phone" value={phone} onChange={(e)=> setPhone(e.target.value)} /> <br />
            
            <input type="password" placeholder="enter password" value={password} onChange={(e)=> setPassword(e.target.value)} /> <br />

            <button type="button" onClick={collectData}>Sign Up</button> 
            <h3>Or</h3>
            <button type="button" onClick={()=>changePage()} >Login</button>
            </div>
     </div> 
    </div>
  )
}

export default RegisterPage;
