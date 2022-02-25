import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router";
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
import { Avatar, Badge, Grid } from "@material-ui/core";
import i1 from '../Assets/i1.jpg'
import i2 from '../Assets/i2.jpg'
import i3 from '../Assets/i3.jpg'
import i4 from '../Assets/i4.jpg'
import i5 from '../Assets/i5.jpg'
import i6 from '../Assets/i6.jpg'

import axios from 'axios'

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

    const history = useHistory();

    const [badgeCount, setBadgeCount] = useState(0)

    const [categoryList, setcategoryList] = useState([
        {
            id: 1,
            feature: "3 Modes Drive",
            img: i1,
            selected: false
        },
        {
            id: 2,
            feature: "Thief Alert",
            img: i2,
            selected: false
        },
        {
            id: 3,
            feature: "Li-on\nBattery",
            img: i3,
            selected: false
        },
        {
            id: 4,
            feature: "Key Less\nDrive",
            img: i4,
            selected: false
        },
        {
            id: 5,
            feature: "Tubeless Tyre",
            img: i5,
            selected: false
        },
        {
            id: 6,
            feature: "Dual Disc",
            img: i6,
            selected: false
        },
    ])

    const handleCategory = (cat) => {
        const newList = categoryList.map((item) => {
            if (item.id === cat.id) {
                const updatedItem = {
                    ...item,
                    selected: !item.selected
                }
                return updatedItem
            }
            return item
        })
        setcategoryList(newList)
        setBadgeCount(categoryList.filter(item => item.selected === true).length)

    }

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

    const [ChatMsgs, setChatMsgs] = useState([])

    const getChatMsgs = () => {

        const tempChats = []

        //static cust id given, extract it from token(cookie)
        const id = "620ca024239ba21fd81992a1";
        axios.get("/chatbot/conv").then((response) => {
          console.log(`RESPONSE IS ${response.data}`)
    
          if (response.data == "You must be logged in to view this page") {
            history.push('/login');
          }
          else {
            let msgArr = response.data
            
            msgArr.map(item => {
    
              tempChats.push(item)
              
            })
    
            console.log(tempChats)
            setChatMsgs(tempChats)
            console.log(ChatMsgs)
          }
        })
      }

      useEffect(() => {
        
        getChatMsgs()
        console.log('rerender')
      }, []);


    return (
        <div id="chatbotScreen">

            <div className="header" id="chatbotHeader" >
                SMART CHATBOT
            </div>


            <div className="main">

                {ChatMsgs && ChatMsgs.map(msg => <ChatMessage key={msg.id} msg={msg} />)}
                <div ref={dummy}></div>


            </div>

            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <div style={{ color: 'red', width: '20px', height: '20px', backgroundColor: 'red', marginBottom: '170px', height: '10vh', position: 'fixed' }}>


                    hellosvsdvsdvdvv

                </div>

                <form onSubmit={avoidRefresh} className="chatbotForm" >

                    <input type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write your response" className="chatbotInput" />


                    <Button  {...bindTrigger(popupState)}>
                        <Badge color="secondary" badgeContent={badgeCount} >

                            Category
                        </Badge>

                    </Button>



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


                    >
                        <div style={{ padding: '60px', borderRadius: '20px' }} className="actionsGridDiv">
                            <Grid container spacing={3}>
                                {categoryList.map(category => (

                                    <Grid item xs={6} md={3} lg={2} xl={2} >
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={() => handleCategory(category)}>

                                            <Avatar src={category.img} className="categoryAvatar" style={{ height: '60px', width: '60px', }} />
                                            <p className="actiondesc" style={{ textAlign: 'center', fontFamily: 'Secular One, sans-serif', fontSize: '20px' }}>{category.feature}</p>
                                        </div>
                                    </Grid>
                                ))}



                            </Grid>

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
