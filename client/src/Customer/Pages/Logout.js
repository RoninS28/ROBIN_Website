import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import '../PagesStyles/Logout.css'
import axios from 'axios'

export default function Logout() {

    const history = useHistory()
    const goBackToHomescreen = () => {
        history.push('/')
    }

    useEffect(() => {
        // defa
        axios.get('/logout').then(() => {
            goBackToHomescreen()
        })
    }, []);

    return (
        <div className="logoutScreen">
            <div className="contents" >

                <div className="iconDiv" >
                    <FontAwesomeIcon icon={faCircleCheck} fontSize='180px' color="lightgreen" />
                </div>
                <div className="textDiv">
                    <div>Logged Out Successfully</div>


                    <div style={{ marginTop: '80px' }} onClick={goBackToHomescreen}>
                        Go Back to Homescreen
                    </div>

                </div>

            </div>
        </div>
    )
}