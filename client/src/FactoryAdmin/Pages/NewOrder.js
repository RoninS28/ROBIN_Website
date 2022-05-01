import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router";
import '../Shared/Navbar/NewOrder.css'

function NewOrder(props) {

    const [orderID,setOrderID]=useState(props.location.state.orderID);
    const [modelName,setModelName]=useState(props.location.state.modelName);
    const history = useHistory()

    const goBackToHomescreen = () => {
        history.push('/')
    }

  return (
    <div className="servicingConfirmedScreen" >
            <div className="contents" >

                <div className="iconDiv" >
                    <FontAwesomeIcon icon={faCircleCheck} fontSize='180px' color="lightgreen" />
                </div>
                <div className="textDiv">
                    <div>Order Received</div>
                    <div>Order ID: {orderID} </div>
                    <div>Model Name: {modelName} </div>


                    <div style={{ marginTop: '80px' }} onClick={goBackToHomescreen}>
                        Go Back to Homescreen
                    </div>

                </div>

            </div>

</div>
  )
}

export default NewOrder