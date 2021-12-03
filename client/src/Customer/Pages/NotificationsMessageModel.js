import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useHistory } from "react-router";
const NotificationMessage = (props) => {
    const msg = props.msg
    const history = useHistory()
    const messageClass = msg.sender === 'user' ? 'sent' : 'received';
    const trailerClass = msg.sender === 'user' ? 'trailersent' : 'trailerreceived';
    // const messageLoadClass = msg.sender === 'user' ? 'messageLoadsent' : 'messageLoadreceived';

    const actionHandler = (action) => {
        if (action === 'Yes' || action === 'No') {//send user message
            console.log('user responded')
        }
        else if (action === 'View Bill') {//redirect to bill page
            console.log('user wants to view bill')

        }

    }

    const handleQuickAccess = (quickAccess) => {
        if (quickAccess === 'Click here to book appointment') {

            history.push('servicingBook/2')
        }
        else if (quickAccess === 'Click here to call serviceman') {
            console.log('call serviceman')
            // const history = useHistory()
            // history.push('servicingBook/2')
        }
    }

    return (
        // <div className={messageLoadClass} style={{ display: 'flex' }}>

        <div className={`messageCol`}>
            <div className={`message ${messageClass}`}>

                <p>{msg.text}
                    {msg.sender !== 'user' && msg.quickAccess &&

                        <div className="quickAccessButtonDiv">
                            <button onClick={() => handleQuickAccess(msg.quickAccess)}>{msg.quickAccess}</button>

                        </div>
                    }
                </p>
                {msg.sender !== 'user' &&

                    <div className="actionsDiv">
                        {msg.actions.map((e) => (
                            <p className="actions" onClick={() => actionHandler(e)}>{e === 'Mark as Read' ? <RemoveRedEyeIcon /> : e}</p>

                        ))}
                    </div>


                }
            </div>
            <div className={` ${trailerClass}`}>
                <p className="timestamp"> {msg.timestamp} </p>
                {msg.trailers && msg.trailers.map((e) => (

                    <p>{e}</p>
                ))}
            </div>

        </div>
        // {msg.sender !== 'user' &&
        //     <div>

        //         <div>
        //             <p style={{ color: 'black' }}>yes</p>
        //         </div>
        //         <div>
        //             <p style={{ color: 'black' }}>yes</p>
        //         </div>
        //         <div>
        //             <p style={{ color: 'black' }}>yes</p>
        //         </div>
        //     </div>
        // }


        // </div>
    );
}

export default NotificationMessage;