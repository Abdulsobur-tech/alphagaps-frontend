

import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { Parent } from '../signup-page/Styles.Signup';




function Talk() {
const [title, seTtitle] = useState();
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [describtion, setDescription] = useState();
  
  const data= {
    title,
    location,
    date,
    describtion
  }
  const token =localStorage.getItem("token")
const navigate = useNavigate();
const onSubmit = async(e) => {
    e.preventDefault()
try{
const res =await axios.post(`https://aphagaps-backend.onrender.com/api/v1//addtalk`, data,{
    headers: { authorization: `Bearer ${token}` },})
console.log(data)
console.log(res.status,"kkkk");
if(res.status === 200){
    Swal.fire({
        icon: 'success',
        title: 'Hurray!',
        text: "You have registered successfully",
      })
      navigate("/home");
}
return {
    data:res,
    error:null
  };
}catch(error){
    console.log(error)
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.Error,
      })
}
}

  return (
    <Parent>
    <h1>Welcome to Talk page</h1>
    <form onSubmit={onSubmit}>
     <div>
  <label>
    <p className='firstname'>Title</p>
    <input  type="text" name="title" placeholder='Enter your event title here'
     onChange={event => seTtitle(event.target.value)} value={title}/>
  </label>
  </div>
  <div>
  <label>
    <p className='lastname'>Location</p>
    <input  type="text" name="location" placeholder='Enter your location here'
     onChange={event => setLocation(event.target.value)} value={location}/>
  </label>
  </div>
  <div>
  <label>
    <p className='phone'>Date</p>
    <input  type="text" name="date" placeholder='Enter Date here'
    onChange={event => setDate(event.target.value)} value={date}
    />
  </label>
  </div>
  <div>
  <label>
    <p className='description'>Description</p>
    <input  type="text" name="description" placeholder='Enter your description here'
    onChange={event => setDescription(event.target.value)} value={describtion}
    />
  </label>
  </div>
  
 
  <button type="submit">submit</button> 
  
</form>
    </Parent>
  )
}

export default Talk