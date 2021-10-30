import React, { useRef, useState } from "react";
import '../PagesStyles/Chatbot.css'
import ChatMessage from "./ChatMessageModel";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SendIcon from '@mui/icons-material/Send';

import PropTypes from 'prop-types'
import { withStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import {
    usePopupState,
    bindTrigger,
    bindPopover,
} from 'material-ui-popup-state/hooks'

const styles = (theme) => ({
    typography: {
        // margin: theme.spacing.unit * 2,
        padding: '20px',
        marginBottom: '50px'
    },
})


const ChatRoom = ({ classes }) => {
    const dummy = useRef()
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoPopover',
    })

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
                    <Button  {...bindTrigger(popupState)}>Category</Button>


                    <Popover
                        className="chatbotPopover"
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',


                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',


                        }}
                        marginThreshold='100'

                        sx={{ marginBottom: '30px', width: '100%' }}
                        style={{ marginBottom: '80px', width: '100%' }}
                    >
                        <div style={{ padding: '80px', width: '100%' }}>
                            hello
                        </div>
                        {/* <Typography className={classes.typography}>
                            The content of the Popover.
                        </Typography> */}
                    </Popover>

                    <button type="submit" onClick={sendMessage}><SendIcon style={{ color: '#4EBCEC' }} /></button>
                </form>
            </div>
        </div>
    );
}

ChatRoom.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ChatRoom);
