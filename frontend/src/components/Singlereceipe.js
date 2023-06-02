import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { useParams, useNavigate } from "react-router-dom";
import {AiFillLock} from 'react-icons/ai';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {RxDividerVertical} from 'react-icons/rx';
import Footer from './Footer';

const Singlereceipe = () => {

    // const [receipe,setReceipe] = useState([]);

    const [name,setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description,setDescription] = useState("");
    const [components, setComponents] = useState("");
    const [time, setTime] = useState("");
    const [calories, setCalories] = useState("");
    const [image,setImage] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails= async()=>{
        console.log(params);
    let result = await fetch(`http://localhost:5000/receipe/${params.id}`,{
        headers:{
            Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
        }
    });
    result = await result.json();
        setName(result.name);
        setTagline(result.tagline);
        setDescription(result.description);
        setComponents(result.components);
        setTime(result.time);
        setCalories(result.calories);
        setImage(result.image);
    }

  return (
    <>
      <Nav/>
      <div className="single-receipe">
      <div className="container">
        <br />
        <div className="row">
        <div className="col-5">
            <h1>{name}</h1>
            <h6>{tagline}</h6>
            <br />  <br />  
            <div className="row rece-detail">
                <div className="col-3 compon">
                    <p>{components.split(";").length}</p>
                    <h5>Ingredients</h5>
                </div>
                <div className="col-1"><RxDividerVertical style={{height:'100px',fontSize:'80px',color:'rgb(198, 198, 198)'}}/></div>
                <div className="col-4">
                    <p>{time}</p>
                    <h5>Minutes</h5>
                </div>
                <div className="col-1"><RxDividerVertical style={{height:'100px',fontSize:'80px',color:'rgb(198, 198, 198)'}}/></div>
                <div className="col-3 calori">  
                    <p>{calories}</p>
                    <h5>Calories</h5>
                </div>
            </div>
            <br />  <br />  <br />
            <div className="single-extra">
                <div className="row">
                <div className='col-4 directi'> <p> Read Directions</p></div>
                <div className="col-2"><img src="/images/Cooking-Recipe.png" alt="" /></div>
                <div className="col-5 locke"><p1><AiFillLock style={{fontSize:'22px',marginBottom:'5px',color:'rgb(235, 171, 51)'}} /> Add to Meal Planner </p1></div>
                </div>
            </div>
        </div>
        <div className="col-7">
            <img className='img' src={image} alt="" />
        </div>
        </div>
<br />
<hr />
{/* <br /> */}
        <div className="ingredients">
            <div className="row">
            <h2>Ingredients</h2>  
            </div>
            <br />
        <h5>{components.split(";").map((line,i) => <div key={i}>
       <BsFillArrowRightCircleFill style={{fontSize:'26px',color:'rgb(230, 184, 98)'}}/> {line} <p></p> </div>)}</h5>
        </div>
        <hr />
<div className="nutrition">
<div className="row">
           <div className="col"><h2>Nutrition</h2></div>   
           <div className="col viewm"><p><AiFillLock style={{fontSize:'20px',marginBottom:'5px'}} /> View More</p></div> 
            </div>
            <p> &nbsp; Unlock full nutritional details with subscription</p>
            <br />
            <div className="row">
                <div className="col circle"><b>{calories} </b> <br /> CALORIES</div>
                <div className="col circle"><AiFillLock style={{fontSize:'22px',color:'gray'}} /> <br /> SODIUM</div>
                <div className="col circle"><AiFillLock style={{fontSize:'22px',color:'gray'}} /> <br /> FAT</div>
                <div className="col circle"><AiFillLock style={{fontSize:'22px',color:'gray'}} /> <br /> CARBS</div>
                <div className="col circle"><AiFillLock style={{fontSize:'22px',color:'gray'}} /> <br /> FIBER</div>
                <div className="col circle"><AiFillLock style={{fontSize:'22px',color:'gray'}} /><br /> POTASSIUM</div>
            </div>
           
</div>
<hr />
<div className="steps">
    <h2>Instructions to make receipe</h2>
    <p>{description.split(";").map((line,i) => <div key={i}> {line} <p></p> </div>)}</p>
</div>
<hr />
<div className="steps">
<div className="row">
           <div className="col"><h2>Reviews</h2></div>   
           <div className="col viewm"><p><AiFillLock style={{fontSize:'20px',marginBottom:'5px'}} /> View More</p></div> 
            </div>
    <p> <img src="/images/avatar-s.webp" alt="" /> &nbsp; Unlock reviews with subscription</p>
</div>
      </div>
      </div>

<Footer/>
    </>
  )
}

export default Singlereceipe;
