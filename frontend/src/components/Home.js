import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import {RxDividerVertical} from 'react-icons/rx';
import Footer from './Footer';

const Home = () => {

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

    const searchHandle= async(event)=>{
        
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

  return (
    <>
        <Nav/>
        <div className="home">
            <div className="container">
            <input className="searchBox" type="text" placeholder="🥘 Search Receipe" 
            onChange={searchHandle} />
            
<div className="row">
  {         receipe.length >0 ? receipe.map((item,index)=>
  <div className="col">
            <div class="card"  >
  <img src={item.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h3 class="card-title rep-name"> <Link className="update" to={"/receipe/"+item._id} >{item.name}</Link> </h3>
    
    <div className="row card-detail">
                <div className="col-3 compo">
                    <p>{item.components.split(";").length}</p>
                    <h6>Ingredients</h6>
                </div>
                <div className="col-1"><RxDividerVertical style={{height:'70px',fontSize:'40px',color:'rgb(198, 198, 198)'}}/></div>
                <div className="col-4">
                    <p>{item.time}</p>
                    <h6>Minutes</h6>
                </div>
                <div className="col-1"><RxDividerVertical style={{height:'70px',fontSize:'40px',color:'rgb(198, 198, 198)'}}/></div>
                <div className="col-3 calo">  
                    <p>{item.calories}</p>
                    <h6>Calories</h6>
                </div>
            </div>
  </div>
  
</div>  
</div>

)
: <h1>No  Result Found</h1>
}

</div>
</div>
        </div>

      <Footer/>
    </>
  )
}

export default Home;
