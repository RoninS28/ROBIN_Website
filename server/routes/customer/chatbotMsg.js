const express = require('express');
const router = express.Router();
//const chatBotMsg = require('../../models/customer/ChatBotMsgObj')
const chatBotSchema = require('../../models/customer/ChatBotSchema')
//const {getUserID} = require('../../middleware/customerMiddleware')
const jwt = require('jsonwebtoken')

// router.post('/post', (req, res) => {
//     const newChatMsg = chatBotSchema({
//         custID : "620ca024239ba21fd81992a1",
//         messages : [
//         {
            
//             sender: 'user',
//             message : 'My EV is not switching on. Tried jumpstarting it but to no avail',
//             timestamp: Date.now(),
//             msgCategories : [
//                 'Motor Issue'
//             ]
//         },
//         {
            
//             sender: 'bot',
//             message : 'Try switching it off, and putting the choke. Was this helpful?',
//             timestamp: Date.now(),
//             msgCategories : [
//                 'Yes',
//                 'No',
//                 'Need technical assist'
//             ]
//         }
//         ]
//     }
        
//     )
//     newChatMsg.save()
//         .then((result) => {
//             console.log('saved')
//             res.send('saved')
//         })
//         .then((result1) => {
//             res.redirect('/')
//         })

// })

// fetch all the messages

// router.get('/:id', async (req, res, next) => {
//     console.log('into get')
//     console.log(req.params.id)

//     const chatMsgs = await chatBotSchema.findOne({ custID: req.params.id })
//     if (chatMsgs) {
//         console.log('found')
//         console.log(chatMsgs)
//         res.send(chatMsgs.messages)
//     }

    // chatBotSchema.find({custID: req.params.id})
    //     .then((result) => {
    //         console.log(result)
    //         res.send(result)
    //     })
    //     .catch(next)

// })

router.get('/conv', async (req, res, next) => {
    console.log('into conv get')
    //const user = res.locals.user
    const token = req.cookies.jwttoken
    //console.log(req.params.id)
    if(!token)
    {
        console.log("No token")
    }
    jwt.verify(token, 'robinsecretsignature', async (err, decodedToken) => {
        if (err) { //signatures dont match
            console.log("error "+err)
            res.send("You must be logged in to view this page")

        }
        else {
            console.log(decodedToken.id)
            chatBotSchema.findOne({ "custID" : decodedToken.id }).then((result)=>{
                console.log('found')
                console.log(result)
                res.send(result.messages)

            })
            
        }
    })

    

})


module.exports = router