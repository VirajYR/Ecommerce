import React, { useState } from 'react'
import "./CSS/LoginSignup.css"
const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const login = async () => {

    console.log("Login Function Executed", formData);
    let responseData;
    await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json())
      .then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    console.log("Sign Up Function Executed", formData);
    let responseData;
    await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json())
      .then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.errors)
    }
  }
  return (
    <>
      <div className="LoginSignup">
        <div className="SignUp">
          <h1>
            {state}
          </h1>
          <div className="inputs">
            {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
            <input name='email' value={formData.email} onChange={changeHandler} type="text" placeholder='Email Address' />
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          </div>
          <div className="SignUpBtn">
            <button onClick={() => { state === "Login" ? login() : signup() }} >Continue</button>
          </div>
          <div className="loginText">
            {state === "Sign Up" ? <p>Already have an account ? <span onClick={() => { setState("Login") }} >Login here</span></p> : <p>Create an account ? <span onClick={() => { setState("Sign Up") }}>Click Here</span></p>}



          </div>
          <div className="privacyPolicy">

            <input type="checkbox" />
            <p>By continuing , I agree to the terms of use & privacy policy</p>
          </div>


        </div>
      </div>
    </>
  )
}

export default LoginSignup