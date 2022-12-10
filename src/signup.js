

import React, { useEffect, useRef, useState } from "react";
import Home from "./home";
import './signup.css';
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div className="container col-12 bg-white p-5 mt-5">
                    

      <div className="d-flex justify-content-center p-5">
   
            {showHome?<Home/>:
            (show?
                <form><div className="row justify-content-md-center">
                        
                        <div className="mb-3">
                            <input placeholder="Email" type='text' ref={email} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input placeholder="Password" type='password' ref={password}  className="form-control" />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div></form>
                :
                
                <form><h2 className="mb-5"> Register Form</h2>
                <div className="row justify-content-md-center">
                        <div className="mb-3">
                            <input placeholder="Name" type='text' ref={name}  className="form-control p-4"/>
                        </div>
                        <div className="mb-3">
                            <input placeholder="Email" type='email' ref={email} className="form-control p-4" />
                        </div>
                        <div className="mb-3">
                            <input placeholder="Password" type='password' ref={password}  className="form-control p-4" />
                        </div>
                        <button onClick={handleClick} className="btn btn-dark">Sign Up</button>
                </div></form>)
            }
        </div>
        </div>
    );
}
export default SignInSignupWithLocalStorage;