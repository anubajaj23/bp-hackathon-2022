import React, { useState } from "react";
import Provider from './provider';
import Rider from './rider';
const CarPooling = () => { 
  const [active, setActive] = useState("s");

  return (

    <>
    <div className="row mb-5 d-flex justify-content-center bg-white p-5">
      <div className="row mb-5 mt-5 d-flex justify-content-center bg-white">
        <div role="button" tabIndex="0" className={`button ${active === "provider" ? "provider-click border-dark" : ""} btn col col-4 mt-3 border p-5`} 
          onClick={() => {setActive("provider");}}>
          <h2>Are you a provider ? </h2>
          <img src={require('../images/carpooling.png')} width="200" height="200" className="rounded" alt="Provider" />
        </div>

        <div role="button" tabIndex="0" className={`button ${active === "rider" ? "rider-click border-dark" : ""} btn ms-3 col col-4 mt-3 border p-5`}
          onClick={() => {setActive("rider");}}>
          <h2>Are you a rider ? </h2>
          <img src={require('../images/rider.jpeg')} width="200" height="200" alt="Rider" className="rounded" />
        </div>
        
        <div>
        {active === 'provider' && (
           <Provider/>
        )}
      </div>

      <div>
        {active === 'rider' && (
         <Rider/>
        )}
      </div>

      </div>
      </div>

      
    </>
  );
};
export default CarPooling;
