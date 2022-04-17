import React, {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.css';

// import '../App.css';
import { NavLink, useNavigate } from 'react-router-dom';
// import { useState } from 'react';


const InsertAccessory=()=>{


    const navigate = useNavigate();
    const[user,setUser]= useState({
        accid:"",name:"",price:"",company:"",description:"",specifications:""
    });
    
    let name,value;
    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

   const AccData = async (e) =>{
       e.preventDefault();

       const {accid,name,price,company,description} = user;

       const res = await fetch('/addaccess', {
           method:"POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
            accid,name,price,company,description
           })
       });

       const data =await res.json();

       if(res.status === 422 || !data)
       {
           window.alert("Invalid Registration");
           console.log("Invalid registration");
       }
       else
       {
        window.alert("Addes Successful");
        console.log("successful Added");

        navigate("/");
       }
   }
     
    return(
        <div>

             <form method="POST" id="userregister">
                <div class="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />


                    <label for="accid"><b>ID</b></label>
                    <input type="text" placeholder="Enter Id" name="accid" required 
                        value={user.accid}
                        onChange={handleInputs}
                    /><br></br><br></br>

                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" required 
                        value={user.name}
                        onChange={handleInputs}
                    /><br></br><br></br>

                    <label for="price"><b>Price</b></label>
                    <input type="number" placeholder="Enter Price" name="price" required 
                         value={user.price}
                        onChange={handleInputs}
                    /><br></br><br></br>

                    <label for="company"><b>Company</b></label>
                    <input type="text" placeholder="Enter Company" name="company" required 
                         value={user.phone}
                        onChange={handleInputs}
                    /><br></br><br></br>

                    <label for="description"><b>Description</b></label>
                    <input type="text" placeholder="Enter description" name="description" required
                         value={user.description}
                        onChange={handleInputs}

                     /><br></br><br></br>

                 
                    <hr />

                    {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}
                    <input type="submit" name="uregister" onClick={AccData} value="register" />
                </div>
             </form>


      

        </div>
    )
}

export default InsertAccessory;