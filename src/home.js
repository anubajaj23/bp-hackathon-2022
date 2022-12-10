import React, { useState } from "react";
import ParkingForm from './forms/form'
import CarPooling from './rider/CarPooling';

function Home(){
  const [active, setActive] = useState("s");

  const logout=()=>{
      localStorage.removeItem("signUp")
      window.location.reload()
  }
  const deleteAccount=()=>{ 
      localStorage.clear()
      window.location.reload()
  }
  
  return(
    
      <div className="col mb-5 text-center">
          <h3>Welcome {localStorage.getItem('name')}</h3>
          <button onClick={logout} className="logout btn btn-outline-secondary">LogOut</button>
          <button onClick={deleteAccount} className="delete btn btn-outline-secondary ms-2">Delete</button>

        <div className=" mt-5">
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
  );
}
export default Home;