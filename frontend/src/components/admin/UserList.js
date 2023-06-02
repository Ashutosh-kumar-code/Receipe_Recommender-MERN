import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers= async()=>{
        let result = await fetch('http://localhost:5000/userlist',{
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
            }
        });
        result = await result.json();
        setUsers(result);

    }

    const deleteUser= async(id)=>{
        let result = await fetch(`http://localhost:5000/profile/${id}`,{
            method: 'Delete',
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
            }
        })
        result = await result.json();
        if(result){
            alert("Record is deleted");
            getUsers();
        }
    }

    const searchUser= async(event)=>{
        
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/usersearch/${key}`,{
                headers:{
                    Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
                }
            });
            result = await result.json();
            if(result){
                setUsers(result);
            }
        }else{
            getUsers();
        }       
    }

  return (
    <>
     <div className="user-list">
            <h1 >Users List</h1>
            <input className="searchBox" type="text" placeholder="Search User" onChange={searchUser} />
            <table className="table">
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>email</th>
                <th>Phone no.</th>
                <th>Operation</th>
                </tr>
         
            {
              users.length >0 ? users.map((item,index)=>
                <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td className="option"><button className="btn btn-warning" onClick={()=> deleteUser(item._id)}>Delete</button>
               
                </td>
            </tr>
                )
                : <h1>No  Result Found</h1>
            }
            </table>
        </div> 
    </>
  )
}

export default UserList
