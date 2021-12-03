import React, { useRef, useState } from "react";
import '../PagesStyles/NotificationsChat.css'
import NotificationMessage from "./NotificationsMessageModel";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const NotificationsRoom = () => {
    const dummy = useRef()

    const [messages, setMessages] = useState([
        {
            id: '1',
            sender: 'ServiceCentre',
            text: 'Hello! Your EV [MH 12 SG 5488] is due for servicing on 08/09/2021 Kindly book for the same!',
            timestamp: '17/09/2021 9:20am',
            trailers: [
                'Servicing Update'
            ],
            actions: [
                'Mark as Read'
            ],
            quickAccess: 'Click here to book appointment'


        },
        {
            id: '2',
            sender: 'ServiceCentre',
            text: 'The battery of your EV needs to be changed, which costs ₹ 500. Should we proceed?',
            timestamp: '17/10/2021 11:20am',
            trailers: [
                'Service Query'
            ],
            actions: [
                'Yes',
                'No'
            ],
            quickAccess: 'Click here to call serviceman'

        },
        {
            id: '3',
            sender: 'ServiceCentre',
            text: 'Your EV is ready to be collected. Outstanding bill is ₹1,500.',
            timestamp: '17/10/2021 03:15pm',
            trailers: [
                'Service Completion'
            ],
            actions: [
                'View Bill'
            ]
        },
    ]
    )
    const [formValue, setFormValue] = useState('')


    const sendMessage = async (e) => {
        e.preventDefault();
        if (formValue != '') {

            setMessages(messages => messages.concat({
                id: '3',
                sender: 'user',
                text: formValue,
                timestamp: '09/09/2021 9:20am',
                trailers: [

                ]
            }))

            setFormValue('')
            dummy.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const avoidRefresh = (e) => {
        e.preventDefault();
    }

    return (
        <div id="notificationChatScreen">

            <div className="header" id="notificationChatHeader" >
                Notifications
            </div>


            <div className="main">

                {messages && messages.map(msg => <NotificationMessage key={msg.id} msg={msg} />)}
                <div ref={dummy}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <form onSubmit={avoidRefresh} className="notificationChatForm" >

                    <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write your response" className="notificationChatInput" />
                    <button >Category</button>
                    <button type="submit" onClick={sendMessage}><SendIcon style={{ color: '#4EBCEC' }} /></button>
                </form>
            </div>
        </div>
    );
}

export default NotificationsRoom;
