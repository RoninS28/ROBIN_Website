
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { useLocation, useHistory } from 'react-router-dom';
import './login.css';
// import React, {useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import  {useState} from 'react'



const Homepage=()=>{
    
  const navigate = useNavigate();
  const [email,setEmail] =useState('');
  const [password,setPassword]=useState('');

const loginUser = async (e) =>{
      e.preventDefault();

  const res = await fetch('factory/homepage',{
      method:"POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          email, password
      })
  });

  const data=res.json();
  if(res.status === 400 || !data)
  {
      window.alert("Invalid");
  }
  else
  {
      window.alert("Login Success");
      navigate("factory/manufacture");
  }
}

  return(
      <div>
             <div className="center">
              <h1>Login</h1>

               <form method="POST">
                <div className="txt_field">
                   <input type="text" name="email" required 
                        value={email}
                      onChange={(e)=> setEmail(e.target.value)}
                  />
                  <span></span>
                  <label>Email</label>
                </div>

                <div className="txt_field">
                  <input type="password" name="password" required 
                       value={password}
                      onChange={(e)=> setPassword(e.target.value)}
                  />
                  <span></span>
                  <label>Password</label>
                </div>

                {/* <div className="pass">Forgot Password?</div> */}
                <input type="submit" name="uregister"
                   onClick={loginUser} value="ulogin"
                    />
                {/* <div className="signup_link">
                  Not a member? <a href="#">Signup</a>
                </div> */}
              </form>

            </div>



      

           {/* <div>
               <p>New User?</p>
               <NavLink to='/register'>Register</NavLink>
           </div> */}


      </div>
  )
}

export default Homepage;
// const Homepage=()=>{


//   const navigate = useNavigate();
//   const[user,setUser]= useState({
//       name:"",email:"",password:"",age:""
//   });
  
//   let name,value;
//   const handleInputs = (e) =>{
//       console.log(e);
//       name=e.target.name;
//       value=e.target.value;

//       setUser({...user,[name]:value});
//   }

//  const PostData = async (e) =>{
//      e.preventDefault();

//      const {name,email,password,age} = user;

//      const res = await fetch('/homepage', {
//          method:"POST",
//          headers: {
//              "Content-Type": "application/json"
//          },
//          body: JSON.stringify({
//              name,email,password,age
//          })
//      });

//      const data =await res.json();

//      if(res.status === 422 || !data)
//      {
//          window.alert("Invalid Registration");
//          console.log("Invalid registration");
//      }
//      else
//      {
//       window.alert("Registration Successful");
//       console.log("successful registration");

//       navigate("/manufacture");
//      }
//  }
   
//   return(
//       <div>


//            <form method="POST" id="userregister">
//               <div class="container">
//                   <h1>Register</h1>
//                   <p>Please fill in this form to create an account.</p>
//                   <hr />

//                   <label for="name"><b>Name</b></label>
//                   <input type="text" placeholder="Enter Name" name="name" required 
//                       value={user.name}
//                       onChange={handleInputs}
//                   /><br></br><br></br>

//                   <label for="email"><b>Email</b></label>
//                   <input type="text" placeholder="Enter Email" name="email" required 
//                        value={user.email}
//                       onChange={handleInputs}
//                   /><br></br><br></br>

              

//                   <label for="password"><b>Password</b></label>
//                   <input type="password" placeholder="Enter Password" name="password"  required 
//                        value={user.password}
//                       onChange={handleInputs}
//                   /><br></br><br></br>

//                   <label for="age"><b>Age</b></label>
//                   <input type="text" placeholder="Age" name="age" required 
//                        value={user.age}
//                       onChange={handleInputs}
//                   /><br></br><br></br>
//                   <hr />

//                   {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}
//                   <input type="submit" name="uregister" onClick={PostData} value="register" />
//               </div>
//            </form>


//            {/* <div>
//                   <p>Already have an account?</p>
//                   <NavLink to='/login'>Log in</NavLink>
//             </div> */}

//       </div>
//   )
// }

// export default Homepage;
    
// function Homepage()
// {
//   const navigate = useNavigate();
//   const [email,setEmail] =useState('');
//   const [password,setPassword]=useState('');
  
   
//   const loginUser = async (e) =>{
//     e.preventDefault();

//     const res = await fetch('/login',{
//         method:"POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             email, password
//         })
//     });

//     const data=res.json();
//     if(res.status === 400 || !data)
//     {
//         window.alert("Invalid");
//     }
//     else
//     {
//         window.alert("Login Success");
//         navigate("/manufacture");
//     }
//     }

//   return(
//     <div>
//            <div className="center">
//               <h1>Login</h1>

//               <form method="POST">
//                 <div className="txt_field">
//                   <input type="text" name="email" required 
//                         value={email}
//                         onChange={(e)=> setEmail(e.target.value)}
//                   />
//                   <span></span>
//                   <label>Email</label>
//                 </div>

//                 <div className="txt_field">
//                   <input type="password" name="password" required 
//                      value={password}
//                      onChange={(e)=> setPassword(e.target.value)}
//                   />
//                   <span></span>
//                   <label>Password</label>
//                 </div>

//                 {/* <div className="pass">Forgot Password?</div> */}
//                 <input type="submit" value="Login" 
//                   onClick={loginUser}
//                 />
//                 {/* <div className="signup_link">
//                   Not a member? <a href="#">Signup</a>
//                 </div> */}
//               </form>

//             </div>
//     </div>
//   );
// }

// export default Homepage;
