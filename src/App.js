
import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CarPooling from './rider/CarPooling';
import image from "./images/bg.svg"; 


function App() {
  const [active, setActive] = useState("s");

  return (
  <div  style={{backgroundImage: `url(${image})`, backgroundRepeat: 'repeat',
  width:'100%',
  height: '100vh'}}>
    <div className="container pt-5 bg-image" >
      <div className="row">
        <h1 className="text-center"> Welcome to Parkation! </h1>
        <div className="col mb-5 mt-5 text-center">
        <button 
          className={`button ${active === "first" ? "btn-dark btn-active" : ""} btn btn-secondary btn-lg btn-block`} 
          onClick={() => {setActive("first");}}
        >
         Reserve your slot
        </button>
        <button
          className={`button ${active === "Second" ? "btn-dark active" : ""} btn btn-secondary btn-lg btn-block ms-3`}
          onClick={() => {setActive("Second");}}
          >
          Car Pooling 
        </button>
        </div>
      </div>

      <div>
        {active === 'first' && (
          <h1> Book your slot </h1>
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
