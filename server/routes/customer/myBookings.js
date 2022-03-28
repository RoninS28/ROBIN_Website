const express = require('express');
const router = express.Router();

const Customer = require('../../models/customer/CustomerSchema')
const Employee = require('../../models/common/employeeSchema')
const Factory = require('../../models/factory/factorySchema')
const Order = require('../../models/factory/OrderSchema');
const jwt = require('jsonwebtoken')

router.get('/updateBooking', (req, res) => {
    Factory.findOne({ 'name': "Alpha Industries" }).then((factresult) => {
        Employee.findOne({ 'name': 'Akhilesh Yadav' }).then((empresult) => {
            Customer.findOne({ 'emailID': 'sushant@gmail.com' }).then((custresult) => {
                console.log("fact id is " + factresult._id)
                const newOrder = new Order({
                    purchaseDate: Date.now(),
                    custID: custresult._id,
                    factoryID: factresult._id,
                    factoryManagerID: empresult._id,
                    modelID: 'M1321',
                    modelName: 'PEGASUS',
                    color: '#ffeb3b',
                    active: true,
                    expectedDeliveryDate: Date.parse('2022-02-10'),
                    variant: 'TOP END MODEL',
                    fault: false,
                    stages: [
                        { stage1: 'Completed' },
                        { stage2: 'Completed' },
                        { stage3: 'Completed' },
                        { stage4: 'Completed' },
                        { stage5: 'Completed' },
                        { stage6: 'Completed' },
                        { stage7: 'Completed' },
                        { stage8: 'Completed' },
                        { stage9: 'Completed' },
                    ]
                })


                newOrder.save().then((result) => {
                    const myvehicle = {
                        ticketID: result._id,
                        status: true,
                        factoryID: factresult._id,
                        factoryManagerID: empresult._id,
                        modelID: 'M1321',
                        modelName: 'PEGASUS',
                        color: '#ffeb3b',
                        deliveryDate: Date.parse('2022-02-10'),
                        variant: 'TOP END MODEL',
                        stages: [
                            { stage1: 'Completed' },
                            { stage2: 'Completed' },
                            { stage3: 'Completed' },
                            { stage4: 'Completed' },
                            { stage5: 'Completed' },
                            { stage6: 'Completed' },
                            { stage7: 'Completed' },
                            { stage8: 'Completed' },
                            { stage9: 'Completed' },
                        ],
                        vehicleNumber: 'MH12 NV 5606',
                        chassisNumber: '1GNCS18Z3M0115561',


                    }

                    Customer.findOneAndUpdate({ '_id': custresult._id }, { $push: { ownedEVs: myvehicle } }).then((pp) => {
                        res.send('cust saved too')
                        console.log('cust saved too')
                    })

                })

            })
        })
    })
})
// router.post('/post', (req, res) => {
//     const newBooking = orderSchema({
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

//fetch all the messages

// router.get('/:id', async (req, res, next) => {
//     console.log('into get')
//     console.log(req.params.id)

//     const chatMsgs = await chatBotSchema.findOne({ custID: req.params.id })
//     if (chatMsgs) {
//         console.log('found')
//         console.log(chatMsgs)
//         res.send(chatMsgs.messages)
//     }

//     chatBotSchema.find({custID: req.params.id})
//         .then((result) => {
//             console.log(result)
//             res.send(result)
//         })
//         .catch(next)

// })




router.get('/myEVs', async (req, res, next) => {
    console.log('into conv get')
    //const user = res.locals.user
    const token = req.cookies.jwttoken
    //console.log(req.params.id)
    if(!token)
    {
        console.log("No token")
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) { //signatures dont match
            console.log("error "+err)
            res.send("You must be logged in to view this page")

        }
        else {
            console.log(decodedToken.id)
            Customer.findOne({ "_id" : decodedToken.id }).then((result)=>{
                console.log('found')
                console.log(result)
                res.send(result.ownedEVs)

            })
            
        }
    })

    

})

router.get('/myEVstage/:id', async (req, res, next) => {
    console.log('into conv get')
    //const user = res.locals.user
    const token = req.cookies.jwttoken
    //console.log(req.params.id)
    if(!token)
    {
        console.log("No token")
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) { //signatures dont match
            console.log("error "+err)
            res.send("You must be logged in to view this page")

        }
        else {
            var tid=req.params.id;
            console.log(decodedToken.id)
            Customer.findOne({ "_id" : decodedToken.id }).then((result)=>{
                console.log('found')
                result.ownedEVs.findOne({"tickedID":tid}).then((result2)=>{
                    res.send(result2)
                })
                //console.log(result)
                //res.send(result.ownedEVs)

            })
            
        }
    })

    

})


module.exports = router