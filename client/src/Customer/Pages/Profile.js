import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import '../PagesStyles/Signup.css'
export default function Profile() {

    const [myProfile, setMyProfile] = useState('');
    const getProfile = () => {
    axios.get("/myProfile").then((response) => {
        console.log(`RESPONSE IS ${response.data}`)

        if (response.data == "You must be logged in to view this page") {
            history.push('/login');
        }
        else {
            let tempmyProfile = response.data


            console.log(tempmyProfile)
            setMyProfile(response.data)
            console.log(response.data.fname+ "    fname")
             setEmail(response.data.emailID);
             setPassword(response.data.password);
             

             setFname(response.data.fname);
             setMname(response.data.mname);
             setLname(response.data.lname);
             setContact(response.data.contact);
             
             //setAddress(response.data.address);
             setDob(response.data.DOB);
                }
    })
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [contact, setContact] = useState('');
    const [contactError, setContactError] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');

    const history = useHistory()
    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        // setContactError('')
        // var phoneno = /^\d{10}$/;
        // if (!(contact.match(phoneno))) {// phone number is not valid
        //     setContactError('Invalid Contact Info')
        // }
        // else {

            const res = axios.put('myProfile/updateProfile', {
                user : {
                    email: email, password: password, fname: fname, mname: mname, lname: lname, contact: contact, dob: dob, address: address,
                }
            }).then((result) => {
                
                const data = result.data;
            console.log(data);

            if (!data || res.status === 400) {
                console.log(data.errors.email)
                console.log(data.errors.password)
                setEmailError(data.errors.email)
                setPasswordError(data.errors.password)
                setContactError(data.errors.contact)
            }
            else {
                alert(result.data);
                window.location.reload();
            }
            });
            
            // history.push('/');
            

            
        // }

    }
    useEffect(() => {
        
        getProfile();
    }, []);

    return myProfile?(
        <div className='signupScreen'>

            <form method="POST" style={{
                width: '360px', margin: '0 auto', padding: '30px', boxShadow: '1px 2px 3px rgba(0,0,0,0.1)',
                borderRadius: '10px', background: 'white', justifyContent: 'center'
            }}>
                <h2 style={{ fontSize: '2.4em', fontWeight: '750', marginBottom: '40px' }}>Update Profile</h2>

                <label for="email" >Email</label>

                <input type="email" name="email" value={email} defaultValue={myProfile.email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />

                <div class="email error" name="emailError" style={{ color: '#ff0099', margin: '10px 2px', fontSize: '0.8em', fontWeight: 'bold' }}>
                    {emailError}
                </div>

                {/* <label for="password" style={{ display: 'block', margin: '20px 0 10px' }}>Password</label>

                <input type="password" name="password" value={password} defaultValue={myProfile.password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />

                <div class="password error" name="passwordError" style={{ color: '#ff0099', margin: '10px 2px', fontSize: '0.8em', fontWeight: 'bold' }}>
                    {passwordError}
                </div> */}


                <label for="fname" style={{ display: 'block', margin: '20px 0 10px' }}>First Name</label>
                <input type="text" name="fname" value={fname} defaultValue={myProfile.fname} onChange={(e) => setFname(e.target.value)} placeholder="Enter First Name" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />

                <label for="mname" style={{ display: 'block', margin: '20px 0 10px' }}>Middle Name</label>
                <input type="text" name="mname" value={mname} defaultValue={myProfile.mname} onChange={(e) => setMname(e.target.value)} placeholder="Enter Middle Name" style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />

                <label for="lname" style={{ display: 'block', margin: '20px 0 10px' }}>Last Name</label>
                <input type="text" name="lname" value={lname} defaultValue={myProfile.lname} onChange={(e) => setLname(e.target.value)} placeholder="Enter Last Name" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />

                <label for="contact" style={{ display: 'block', margin: '20px 0 10px' }}>Contact No</label>
                <input type="text" name="contact" value={contact} defaultValue={myProfile.contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact No" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />
                <div class="contact error" name="contactError" style={{ color: '#ff0099', margin: '10px 2px', fontSize: '0.8em', fontWeight: 'bold' }}>
                    {contactError}
                </div>
                
                {/* <label for="dob" style={{ display: 'block', margin: '20px 0 10px' }}>Date of Birth</label>
                <input type="date" name="dob" value={dob} defaultValue={myProfile.dob} onChange={(e) => setDob(e.target.value)} placeholder="Enter Date of Birth" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} /> */}

                {/* <label for="address" style={{ display: 'block', margin: '20px 0 10px' }}>Address</label>
                <textarea cols={50} type="text" name="address" value={address} defaultValue={myProfile.address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Residential Address" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} /> */}



                <center>

                    <button

                        style={{
                            marginTop: '30px',
                            borderRadius: '36px',
                            background: '#FEE996',
                            border: '0',
                            textTransform: 'uppercase',
                            fontWeight: '700',
                            fontSize: '0.8em',
                            display: 'block',
                            padding: '10px 16px',
                            letterSpacing: '2px'
                        }}
                        onClick={handleUpdateProfile}
                    >Update</button>
                    {/* <div style={{ marginTop: '30px' }}>Already have an Account?<a href="/login" style={{ marginLeft: '10px', color: 'blue', textDecoration: 'underline' }}>Login</a></div> */}
                </center>

            </form>
        </div>


    ):(<div>Loading</div>);
}