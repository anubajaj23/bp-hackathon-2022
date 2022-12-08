import React,{useState} from 'react'
import './form.css';
import { useForm } from "react-hook-form";

const ParkationSignupForm = () =>{

    const [userRegistration, setUserRegistration]= useState({

        employeeId:"",
        vehicleNo:"",
        name:"",
        companyName:"",
        phoneNo:"",
        address:""

    });

    const [records, setRecords]= useState([]);

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value)

        setUserRegistration({...userRegistration,[name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...userRegistration, id : new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(newRecord);

        setUserRegistration({ employeeId:"",
        vehicleNo:"",
        name:"",
        companyName:"",
        phoneNo:"",
        address:""
})
    }

    

    return(

        <>
        <form action ="" onSubmit ={handleSubmit}>
            <div className='main'>
            <div>
                <label htmlFor="employeeId">Employee ID</label>
                <input type ="text" 
                value={userRegistration.employeeId}
                onChange={handleInput}
                name ="employeeId" id="employeeId"></input>
            </div>
            
            <div>
                <label htmlFor="vehicleNo">Vehicle No*</label>
                <input type ="text" 
                value={userRegistration.vehicleNo}
                onChange={handleInput}
                name ="vehicleNo" id="vehicleNo"></input>
            </div>

            <div>
                <label htmlFor="name">Name*</label>
                <input type ="text" 
                value={userRegistration.name}
                onChange={handleInput}
                name ="name" id="name"></input>
            </div>

            <div>
                <label htmlFor="companyName">Company Name*</label>
                <input type ="text" 
                value={userRegistration.companyName}
                onChange={handleInput}
                name ="companyName" id="companyName"></input>
            </div>

            <div>
                <label htmlFor="phoneNo">Phone No</label>
                <input type ="text"
                value={userRegistration.phoneNo}
                onChange={handleInput}
                name ="phoneNo" id="phoneNo"></input>
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <input type ="text"
                value={userRegistration.address}
                onChange={handleInput}
                name ="address" id="address"></input>
            </div>


            <button type="submit">Registration</button>

            </div>


        </form>
        
        </>
    )
}

export default ParkationSignupForm