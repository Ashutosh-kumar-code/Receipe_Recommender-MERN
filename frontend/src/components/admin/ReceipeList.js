import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ReceipeList = () => {

    const [receipe,setReceipe] = useState([]);

    useEffect(()=>{
        getReceipe();
    },[]);

    const getReceipe= async()=>{
        let result = await fetch('http://localhost:5000/receipelist',{
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
            }
        });
        result = await result.json();
        setReceipe(result);

    }

    const searchReceipe= async(event)=>{
        
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`,{
                headers:{
                    Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
                }
            });
            result = await result.json();
            if(result){
                setReceipe(result);
            }
        }else{
            getReceipe();
        }     
    }

    const deleteReceipe= async(id)=>{
        let result = await fetch(`http://localhost:5000/receipe/${id}`,{
            method: 'Delete',
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
            }
        })
        result = await result.json();
        if(result){
            alert("Record is deleted");
            getReceipe();
        }
    }

  return (
    <>
      <div className="receipe-list">
            <h1 >Receipe List</h1>
            <input className="searchBox" type="text" placeholder="Search User" onChange={searchReceipe} />
            <table className="table">
                <tr>
                <th>S.No</th>
                <th>Receipe Name</th>
                <th>Description</th>
                <th>Calories</th>
                <th>Update Receipe</th>
                <th>Delete Receipe</th>
                </tr>
         
            {
              receipe.length >0 ? receipe.map((item,index)=>
                <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.tagline}</td>
                <td>{item.calories}</td>
                {/* <td>{item.components.split(";").map((line,i) => <div key={i}>{line}</div>)}</td> */}
                <td className="option "><button className="btn btn-warning update" ><Link className="update" to={"/update/"+item._id} >Update</Link></button> </td>
                {/* <Link className="update" to={"/update/"+item._id} >update</Link> */}
          <td className="option"><button className="btn btn-warning" onClick={()=> deleteReceipe(item._id)}>Delete</button> </td>
            </tr>
                )
                : <h1>No  Result Found</h1>
            }
            </table>
        </div> 
    </>
  )
}

export default ReceipeList;
