import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import Select from "react-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import '../PagesStyles/CustomerFeedbackConfirmed.css'




const CustomerFeedbackConfirmed = (props) => {


    const history = useHistory()




    const goBackToHomescreen = () => {
        history.push('/')
    }

    return (
        <div className="customerFeedbackConfirmedScreen" >
            <div className="contents" >

                <div className="iconDiv" >
                    <FontAwesomeIcon icon={faCircleCheck} fontSize='180px' color="gold" />
                </div>
                <div className="textDiv">
                    <div>Feedback Posted!</div>
                    <div id="caption"> We value your feedback and look forward to enhacne your experience</div>


                    <div style={{ marginTop: '80px' }} onClick={goBackToHomescreen}>
                        Go Back to Homescreen
                    </div>

                </div>

            </div>

        </div>
    );
}


export default CustomerFeedbackConfirmed;