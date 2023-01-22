import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Parent,SignupButton,LoginButton } from "./Navbar.styled";



// const { REACT_APP_BASE_URL } = process.env;
// const client = axios.create({
//   baseURL: `${process.env.REACT_APP_BASE_URL}`,
// });
function Navbar() {
  const [talk, setTalk] = useState([]);

  const fetchData = () => {
    return axios.get(`https://aphagaps-backend.onrender.com/api/v1/talks`)
          .then((response) => setTalk(response.data));
          
  }
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  },[])
  const gotoRegisterPage = () => {
    navigate("/register")
  }

  const gotoTalkPage = () => {
    navigate("/talk")
  }
  return (
    <div>
      <SignupButton onClick={gotoRegisterPage}>Signup</SignupButton>
      <LoginButton onClick={gotoTalkPage}>add a talk</LoginButton>
    <Parent>
    <h1>Welcome to Alpha Gaps</h1>
    <h4>The Following are up coming talks</h4>
    {talk.map((talk) => (
      <div>
        <h1 className="content" key="{talk.id}">{talk.title}</h1>
        <p>{talk.describtion}</p>
        <div>{talk.location}</div>
        <p className="left-side-p">
                <b>
                  {new Date(talk.date).toLocaleDateString("ng", {
                    
                  })}
                  ,
                </b>{" "}
                {new Date(talk.date).toLocaleTimeString("ng", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
        </div>
      ))}
    </Parent>
    </div>
  )
}

export default Navbar