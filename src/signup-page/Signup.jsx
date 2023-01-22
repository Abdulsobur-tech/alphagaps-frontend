
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
import { Parent } from './Styles.Signup'




function Signup() {
const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const data= {
    firstname,
    lastname,
    phone,
    email,
    password,
    confirmpassword
  }
const navigate = useNavigate();
const onSubmit = async(e) => {
    e.preventDefault()
try{
const res =await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1//signup`, data
)
console.log(data)
const token = res.data.token;
localStorage.setItem("token",token)
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
    <h1>Welcome to Signup page</h1>
    <form onSubmit={onSubmit}>
     <div>
  <label>
    <p className='firstname'>Firstname</p>
    <input  type="text" name="firstname" placeholder='Enter your firstname here'
     onChange={event => setFirstname(event.target.value)} value={firstname}/>
  </label>
  </div>
  <div>
  <label>
    <p className='lastname'>Lastname</p>
    <input  type="text" name="lastname" placeholder='Enter your lastname here'
     onChange={event => setLastname(event.target.value)} value={lastname}/>
  </label>
  </div>
  <div>
  <label>
    <p className='phone'>Phone</p>
    <input  type="tel" name="phone" placeholder='Enter your phonr number here'
    onChange={event => setPhone(event.target.value)} value={phone}
    />
  </label>
  </div>
  <div>
  <label>
    <p className='email'>Email</p>
    <input  type="email" name="email" placeholder='Enter your mail here'
    onChange={event => setEmail(event.target.value)} value={email}
    />
  </label>
  </div>
  <div>
  <label>
    <p className='password'>Password</p>
    <input  type="password" name="password" placeholder='Enter your password here'
    onChange={event =>setPassword(event.target.value)} value={password}
    />
  </label>
  </div>
  <div>
  <label>
    <p className='confirm-password'>Confirm Password</p>
    <input  type="password" name="password" placeholder='Enter your password here'
    onChange={event => setConfirmpassword(event.target.value)} value={confirmpassword}
    />
  </label>
  </div>
  <button type="submit">submit</button> 
  
</form>
    </Parent>
  )
}

export default Signup