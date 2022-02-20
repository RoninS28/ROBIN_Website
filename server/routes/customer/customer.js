const express = require('express');
const customerController = require('../../controller/customer/customerController')
const router = express.Router();
const testcust = require('../../models/test/test1');

const address = require('../../models/common/ResidentialAddressObj')
const myvehicle = require('../../models/customer/VehicleObj')
const serviceCentreMsg = require('../../models/common/ServiceCentreChatMsgObj')
const feedbackMsg = require('../../models/common/FeedbackChatMsgObj')
const chatbotMsg = require('../../models/customer/ChatBotMsgObj')
const Customer = require('../../models/customer/CustomerSchema')
const Model = require('../../models/common/ModelSchema')

router.get('/', customerController.customersGet)
router.post('/', customerController.customerPost)

router.get('/update', (req, res) => {
    Model.updateMany({ 'highlights.unit': 'KWH' }, { '$set': { 'highlights.$.highlight': 'LITHIUM-ION' } }).then((result) => {
        console.log('updated')
        res.send('updated')
    })
})

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

router.get('/addcustomer', (req, res) => {
    console.log('into new customer')
    const address1 = {
        flatNo: 'A-302',
        buildingName: 'Hari',
        residencyName: 'Ramnagar',
        streetName: 'Pashan',
        landmark: 'DSK Raanwara',
        area: 'Pashan',
        city: 'Pune',
        state: 'Maharashtra'
    }
    const newCust = new Customer({

        fname: 'Om',
        mname: 'Niraj',
        lname: 'Choudhary',
        contact: 9767880733,
        emailID: 'om@gmail.com',
        DOB: Date.parse("2000-08-16"),
        address: address1,
        ownedEVs: [

        ],
        serviceCentreChat: [

        ],
        chatbotChat: [

        ]

    })
    newCust.save().then((result) => console.log(result))
})

router.get('/addmodel', (req, res) => {
    const mycolors = [
        {
            color: '#ffeb3b',
            image: '../Assets/v3.jpeg'
        },
        {
            color: '#2196f3',
            image: '../Assets/v3.jpeg'
        },
        {
            color: '#4caf50',
            image: '../Assets/v3.jpeg'
        },
        {
            color: '#ff9800',
            image: '../Assets/v3.jpeg'
        },
    ]
    const myhighs = [
        {
            highlight: 'LITHIUM - ION\nREMV. BATTERY',
            quantity: '1.9',
            unit: 'KWH'
        },
        {
            highlight: 'RANGE',
            quantity: '85',
            unit: 'KM'
        },
        {
            highlight: 'VOLTAGE',
            quantity: '72',
            unit: 'VOLT'
        },
        {
            highlight: 'CHARGING TIME',
            quantity: '3-4',
            unit: 'HRS'
        },
        {
            highlight: 'GROUND CLEARANCE',
            quantity: '170',
            unit: 'MM'
        },
    ]

    const myfeatures = [
        {
            feature: "3 Modes Drive",
            img: '../Assets/i1.jpg'
        },
        {
            feature: "Thief Alert",
            img: '../Assets/i2.jpg'
        },
        {
            feature: "Li-on\nBattery",
            img: '../Assets/i3.jpg'
        },
        {
            feature: "Key Less\nDrive",
            img: '../Assets/i4.jpg'
        },
        {
            feature: "Tubeless Tyre",
            img: '../Assets/i5.jpg'
        },
        {
            feature: "Dual Disc",
            img: '../Assets/i6.jpg'
        },
    ]
    const newmodel = new Model({
        modelID: 'M1362',
        modelName: 'PATRIOT',
        image: '../Assets/v7.png',
        releaseDate: Date.parse('2020-05-01'),
        waitingPeriod: 5,
        price: 68000,
        enginePower: 100,//cc
        emissionCriteria: 'BS IV',
        torque: '10.3 Nm @ 5000 rpm',
        mileage: 40,
        suspension: 'Spring Loaded',
        brakingSystem: 'Drum',
        fuelTankCapacity: '15',
        emergencyFuelCapacity: '2',
        turningRadius: 1500,//mm
        colors: mycolors,
        height: 1.115, //mm
        weight: 110,//kg
        trunkCapacity: 15,//litre
        groundClearance: 170,//mm
        highlights: myhighs,
        featureList: myfeatures

    })
    newmodel.save().then((result) => console.log('created'))
    res.send('saved')
})

router.get('/:id', customerController.customerGet)
router.put('/:id', customerController.customerPut)
router.delete('/:id', customerController.customerDelete)

module.exports = router