
import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CarPooling from './rider/CarPooling';
import image from "./images/bg.svg"; 
import ParkingForm from './forms/form'
import SignInSignupWithLocalStorage from './signup';

function App() {
  const [active, setActive] = useState("s");

  return (
  <div  style={{backgroundImage: `url(${image})`, backgroundRepeat: 'repeat',
  width:'100%',
  height: '100vh'}}>
    <div className="container pt-5 bg-image" >
      <div className="row">
        <h1 className="text-center"> Welcome to Parkation! </h1>

        <SignInSignupWithLocalStorage/>


      </div>

      <div>
        {active === 'first' && (
          <ParkingForm/>
        )}
      </div>

      <div>
        {active === 'Second' && (
         <CarPooling/>
        )}
      </div>
    </div>
    </div>
  )
}

export default App;
