import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); 
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate("/home");
    }
},[])

  const handleLogin= async()=>{
    // console.warn(email,password);
    let result = await fetch('http://localhost:5000/login',{
        method:'post',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type':'application/json'
        }
    })
   result = await result.json();
   console.log(result);
   if(result.auth){
    localStorage.setItem("user",JSON.stringify(result.user));
    localStorage.setItem("token",JSON.stringify(result.auth));

    navigate("/home");
   }else{
    alert("please enter correct details")
   }
}

  const changePage = ()=>{
    navigate('/')
  }

  return (
    <div className='register'>
      <div className="signup">
        
        <div className="signup-box">
                <h1> 🥘Receipe Recommender</h1>
     
            <input type="text" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} />  <br />

            <input type="password" placeholder="enter password" value={password} onChange={(e)=> setPassword(e.target.value)} /> <br />

            <button type="button" onClick={handleLogin}>LogIn</button> 
            <h3>Or</h3>
            <button type="button" onClick={()=>changePage()} >SignUp</button>
            </div>
     </div> 
    </div>
  )
}

export default LoginPage;
