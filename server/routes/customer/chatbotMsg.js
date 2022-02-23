const express = require('express');
const router = express.Router();
//const chatBotMsg = require('../../models/customer/ChatBotMsgObj')
const chatBotSchema = require('../../models/customer/ChatBotSchema')

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

router.get('/:id', async (req, res, next) => {
    console.log('into get')
    console.log(req.params.id)

    const chatMsgs = await chatBotSchema.findOne({ custID: req.params.id })
    if (chatMsgs) {
        console.log('found')
        console.log(chatMsgs)
        res.send(chatMsgs.messages)
    }

    // chatBotSchema.find({custID: req.params.id})
    //     .then((result) => {
    //         console.log(result)
    //         res.send(result)
    //     })
    //     .catch(next)

})


module.exports = router