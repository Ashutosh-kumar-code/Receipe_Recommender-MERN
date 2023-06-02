import React, {useState} from 'react'
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const AddReceipe = () => {
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description,setDescription] = useState("");
    const [components, setComponents] = useState("");
    const [time, setTime] = useState("");
    const [calories, setCalories] = useState("");
    const [image,setImage] = useState("");

    function convertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
            console.log("Image = ",image);
        };     
        
        reader.onerror = error => {
            console.log("error: ", error);
        }
    }

    const addProduct= async()=>{

        if(!name || !description || !components || !time || !calories || !tagline || !image ){
            alert("enter details")
        }else{
        
        const userId = JSON.parse(localStorage.getItem('user'))._id ;
        let result = fetch('http://localhost:5000/addreceipe',{
            method: 'post',
            body: JSON.stringify({name, description, components, time, calories, tagline, userId, image}),
            headers:{
                'Content-Type':'application/json',
                Authorization: `bearer ${JSON.parse(localStorage.getItem('token')) }`
            }
        })
        result = await (await result).json();
        console.log(result);
        navigate('/home');
    }
}

  return (
    <>
    <Nav/>
    <div className='addreceipe'>
        <div className="container">
      <h1>Add Receipe</h1>

      <input className="inputBox" type="text" placeholder="enter name of receipe" value={name} onChange={(e)=> setName(e.target.value)} />   <br />
      <input className="inputBox" type="text" placeholder="enter behaviour for receipe" value={tagline} onChange={(e)=> setTagline(e.target.value)} />   <br />

            <textarea rows="4"  className="inputBox" type="text" placeholder="enter steps of receipe" value={description} onChange={(e)=> setDescription(e.target.value)} />  
            <h6>Use ' ; ' to seperate the lines</h6> <br />
            <textarea rows="4" className="inputBox" type="text" placeholder="enter components of receipe" value={components} onChange={(e)=> setComponents(e.target.value)} /> 
            <h6>Use ' ; ' to seperate the lines</h6> <br />
            
            <input className="inputBox" type="text" placeholder="enter time of making receipe" value={time} onChange={(e)=> setTime(e.target.value)} />   <br />
            <input className="inputBox" type="text" placeholder="enter calories in receipe" value={calories} onChange={(e)=> setCalories(e.target.value)} />   <br />
<br />
    <label htmlFor=""><h5>Choose Receipe Image : &nbsp;</h5></label>
           <input type="file" accept='image/*'  onChange={convertToBase64}  /> <br /> <br />
           {image=="" || image==null ? "":  <img src={image} width="100" height="100" alt="" />}
          <br />

<br />
            <button className='recepiebtn' type="button" onClick={addProduct} >Add Receipe</button>  
            <br /> <br />
            </div>
    </div>
    <Footer/>
    </>
  )
}

export default AddReceipe;
