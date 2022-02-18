const express = require('express');
const customerController = require('../../controller/customer/customerController')
const router = express.Router();
const testcust = require('../../models/test/test1');

const address = require('../../models/common/ResidentialAddressObj')
const myvehicle = require('../../models/customer/VehicleObj')
const serviceCentreMsg = require('../../models/common/ServiceCentreChatMsgObj')
const feedbackMsg = require('../../models/common/FeedbackChatMsgObj')
const chatbotMsg = require('../../models/customer/ChatBotMsgObj')

router.get('/', customerController.customersGet)
router.post('/', customerController.customerPost)


// ! test
// router.get('/testtest', (req, res) => {
//     console.log('into the est')
//     const ownedev1 = {
//         ticketID: 't12345',
//         status: true,
//         modelID: 'm1234',
//         variant: 'topend',
//         vehicleNumber: 'mh12sp1665'
//     }
//     const ownedev2 = {
//         ticketID: 't12346',
//         status: false,
//         modelID: 'm0001',
//         variant: 'topend',
//         vehicleNumber: 'mh12gg5555'
//     }
//     const address1 = {
//         flatNo: 'a302',
//         buildingName: 'agnipankh',
//         residencyName: 'none',
//         streetName: 'bavdhan',
//         landmark: 'dsk',
//         area: 'bavdhan',
//         city: 'pune',
//         state: 'mh'
//     }
//     const t1 = new testcust({
//         custID: 'id1234',
//         fname: 'rohan',
//         mname: 'shekhar',
//         lname: 'shivesh',
//         contact: 1212121212,
//         emailID: 'rohan@gmail.com',
//         DOB: Date.now(),
//         address: address1,
//         ownedEVs: [
//             ownedev1,
//             ownedev2
//         ],


//     })
//     t1.save().then((result) => {
//         res.send('saved')
//     })

// })

router.get('/:id', customerController.customerGet)
router.put('/:id', customerController.customerPut)
router.delete('/:id', customerController.customerDelete)

module.exports = router