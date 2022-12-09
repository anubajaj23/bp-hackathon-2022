import React, { useState } from "react";
import Provider from './provider';
import Rider from './rider';

const CarPooling = () => { 
  const [active, setActive] = useState("s");

  return (

    <>
    <div className="row mb-5 mt-5 d-flex justify-content-center bg-white p-5">
      <div className="row mb-5 mt-5 d-flex justify-content-center bg-white p-5">
        <div className={`button ${active === "provider" ? "provider-click border-dark" : ""} btn col col-4 mt-3 border p-5`} 
          onClick={() => {setActive("provider");}}>
          <h2>Are you a provider ? </h2>
          <img src={require('../images/provider.jpeg')}  className="rounded img-thumbnail" alt="Provider" />
        </div>

        <div className={`button ${active === "rider" ? "rider-click border-dark" : ""} btn ms-3 col col-4 mt-3 border p-5`}
          onClick={() => {setActive("rider");}}>
          <h2>Are you a rider ? </h2>
          <img src={require('../images/provider.jpeg')} alt="Rider"  className="rounded img-thumbnail" />
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
