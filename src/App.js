
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import image from "./images/bg.svg"; 
import SignInSignupWithLocalStorage from './signup';

function App() {

  return (
  <div  style={{backgroundImage: `url(${image})`, backgroundRepeat: 'repeat',
  width:'100%',
  height: '100vh'}}>
    <div className="container pt-5 bg-image" >
      <div className="row">
        <h1 className="text-center"> Welcome to Parkation! </h1>

        <SignInSignupWithLocalStorage/>


      </div>


    </div>
    </div>
  )
}

export default App;
