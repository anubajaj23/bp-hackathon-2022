
import React, { useState } from "react";
import './App.css';
import ParkationSignupForm from "./forms/form";
import 'bootstrap/dist/css/bootstrap.css';
import Register from './rider/register';


function App() {
  const [active, setActive] = useState("firsts");

  return (

    <div className="container pt-5 text-center">
      <div className="row">
        <h1> Welcome to Parkation! </h1>
        <div className="col mb-5 mt-5">
        <button 
          className={`button ${active === "first" ? "btn-dark" : ""} btn btn-secondary`} 
          onClick={() => {setActive("first");}}
        >
          Are you a provider ?
        </button>
        <button
          className={`button ${active === "Second" ? "btn-dark" : ""} btn btn-secondary ms-3`}
          onClick={() => {setActive("Second");}}
          >
          Are you a rider ?
        </button>
        </div>
      </div>

      <div>
        {active === 'first' && (
          <ParkationSignupForm />
        )}
      </div>

      <div>
        {active === 'Second' && (
          <Register />
        )}
      </div>
    </div>
  )
}

export default App;
