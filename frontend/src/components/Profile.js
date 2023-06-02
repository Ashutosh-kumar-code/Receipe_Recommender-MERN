import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Profile = () => {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');

    const deleteProduct= async(id)=>{
        let result = await fetch(`http://localhost:5000/profile/${id}`,{
            method: 'Delete',
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
            }
        })
        result = await result.json();
       let clear = await localStorage.clear();
        if(result || clear){
            alert("Record is deleted");
            // getProduct();
            navigate('/');
        }
    }

  return (
    <>
      <Nav/>
      <div className="profile">
            <img src="/images/chef.png" alt="" />  <br /> <br />
           <h2> <b> Name: </b><span> { JSON.parse(auth).username } </span> </h2> 
           <h2><b>Email Id: </b><span> { JSON.parse(auth).email } </span> </h2> 
            <h2><b>Your Id: </b><span>{ JSON.parse(auth)._id }</span></h2>
            <h2><b>Phone no. : </b><span>{JSON.parse(auth).phone}</span></h2>  
            <br /> 
            <button className="btn btn-danger delete" onClick={()=> deleteProduct(JSON.parse(auth)._id)}>Delete Account</button>
            <br />
        </div>
        <Footer/>
    </>
  )
}

export default Profile;
