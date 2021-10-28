import React, { useRef, useState } from "react";
import '../PagesStyles/Chatbot.css'
import ChatMessage from "./ChatMessageModel";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SendIcon from '@mui/icons-material/Send';

const ChatRoom = () => {
    const dummy = useRef()

    const [messages, setMessages] = useState([
        {
            id: '1',
            sender: 'user',
            text: 'My EV is not switching on. Tried jumpstarting it but to no avail',
            timestamp: '09/09/2021 9:20am',
            trailers: [
                'Motor Issue'
            ]
        },
        {
            id: '2',
            sender: 'bot',
            text: 'Try switching it off, and putting the choke. Was this helpful?',
            timestamp: '09/09/2021 9:20am',
            trailers: [
                'Yes',
                'No',
                'Need technical assist'
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
        <div id="chatbotScreen">

            <div className="header" id="chatbotHeader" >
                SMART CHATBOT
            </div>


            <div className="main">

                {messages && messages.map(msg => <ChatMessage key={msg.id} msg={msg} />)}
                <div ref={dummy}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <form onSubmit={avoidRefresh} className="chatbotForm" >

                    <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write your response" className="chatbotInput" />
                    <button >Category</button>
                    <button type="submit" onClick={sendMessage}><SendIcon style={{ color: '#4EBCEC' }} /></button>
                </form>
            </div>
        </div>
    );
}

export default ChatRoom;
