const express = require('express');
// const stageController = require('../../controller/customer/stageController')
const router = express.Router();
const Model = require('../../models/common/ModelSchema')
const Customer = require('../../models/customer/CustomerSchema')
const jwt = require('jsonwebtoken')
const Employee = require('../../models/common/employeeSchema')
const Factory = require('../../models/factory/factorySchema')
const Order = require('../../models/factory/OrderSchema')
// router.post('/post', (req, res) => {
//     const newmodel = Model({
//         modelID: 'M1362',
//         modelName: 'PATRIOT',
//         releaseDate: Date.now(),
//         waitingPeriod: 45,
//         price: 68000

//     })
//     newmodel.save()
//         .then((result) => {
//             console.log('saved')
//         })
//         .then((result1) => {
//             res.redirect('/')
//         })

// })

// fetch all the products
const convertISOtoStringDate = (dateISO) => {
    const stringDate = dateISO.getDate() + '/' + dateISO.getMonth() + '/' + dateISO.getFullYear()
    return stringDate

}

router.get('/', (req, res, next) => {
    console.log('into get')
    Model.find({})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch(next)

})


// for a particular id, show a detailed page

router.get('/:id', async (req, res) => {
    console.log("hello bunty")
    console.log(req.params.id)

    const model = await Model.findOne({ modelID: req.params.id })
    if (model) {
        console.log('found')
        console.log(model)
        res.send(model)
    }
    // else {
    // console.log('out of th go')
    // res.status(404).redirect('/products')
    // }
})
router.get('/:id/book', async (req, res) => {
    console.log("hello bunty")
    console.log(req.params.id)

    const model = await Model.findOne({ modelID: req.params.id })
    if (model) {
        console.log('found')
        console.log(model)
        res.send(model)
    }
    // else {
    // console.log('out of th go')
    // res.status(404).redirect('/products')
    // }
})



// ! product checkout get
router.get('/:id/checkout', async (req, res) => {
    console.log(req.params.id)
    console.log('into checkout')
    const token = req.cookies.jwttoken
    //console.log(req.params.id)
    if (!token) {
        console.log("No token")
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) { //signatures dont match
            console.log("error " + err)
            res.send("You must be logged in to view this page")

        }
        else {
            console.log(decodedToken.id)
            Customer.findOne({ "_id": decodedToken.id }).then((customer) => {
                console.log(customer.fname)
                Model.findOne({ modelID: req.params.id }).then((model) => {
                    var expectedDeliveryDate = new Date()
                    expectedDeliveryDate.setDate(expectedDeliveryDate.getDate() + model.waitingPeriod)
                    //todo add a function to determine which factory and manager should be in charge of this order
                    const expDelDate = expectedDeliveryDate.getDate() + '/' + expectedDeliveryDate.getMonth() + '/' + expectedDeliveryDate.getFullYear()
                    const data = {
                        modelID: model.modelID,
                        modelName: model.modelName,
                        custID: customer._id,
                        factoryName: 'Alpha Industries',
                        factoryAddress: '22, Hingna Rd, Midc, Marol MIDC Industry Estate, Hingna',
                        factoryManager: 'Akhilesh Yadav',
                        customerName: customer.fname + ' ' + customer.lname + '',
                        expectedDeliveryDate: convertISOtoStringDate(expectedDeliveryDate),
                        expectedDeliveryDateISO: expectedDeliveryDate,
                        totalAmount: model.price,
                        modelImg: model.image
                    }
                    res.send(data)

                })


            })

        }
    })

})
const generateChassis = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return n;
};
// ! checkout post
router.post('/confirmOrder', async (req, res) => {
    console.log('into checkout post')
    console.log(req.body.color)
    Factory.findOne({ 'name': "Alpha Industries" }).then((factresult) => {
        Employee.findOne({ 'name': 'Akhilesh Yadav' }).then((empresult) => {
            Customer.findById(req.body.custID).then((custresult) => {
                console.log('into customer find')
                console.log("fact id is " + factresult._id)
                const newOrder = new Order({
                    purchaseDate: Date.now(),
                    custID: custresult._id,
                    factoryID: factresult._id,
                    factoryManagerID: empresult._id,
                    modelID: req.body.modelID,
                    modelName: req.body.modelName,
                    color: req.body.color,
                    active: true,
                    expectedDeliveryDate: req.body.expectedDeliveryDateISO,// Date.parse('2022-02-10'),
                    variant: req.body.variant,
                    fault: false,

                    stages: [
                        { stage1: 'Pending' },
                        { stage2: 'Pending' },
                        { stage3: 'Pending' },
                        { stage4: 'Pending' },
                        { stage5: 'Pending' },
                        { stage6: 'Pending' },
                        { stage7: 'Pending' },
                        { stage8: 'Pending' },
                        { stage9: 'Pending' },
                    ]
                })
                var nextservDate = new Date()
                // req.body.expectedDeliveryDateISO
                const eddateISO = new Date(req.body.expectedDeliveryDateISO)
                console.log(eddateISO.getDate())

                nextservDate.setDate(eddateISO.getDate() + 200)//first servicing would be after 200 days from delivery date

                newOrder.save().then((result) => {
                    const myvehicle = {
                        ticketID: result._id,
                        status: true,
                        factoryID: factresult._id,
                        factoryManagerID: empresult._id,
                        modelID: req.body.modelID,
                        modelName: req.body.modelName,
                        image: req.body.modelImage,
                        color: req.body.color,
                        deliveryDate: req.body.expectedDeliveryDateISO,
                        variant: req.body.variant,
                        currentStage: 0,
                        nextServicingDate: nextservDate,
                        stages: [
                            { stage1: 'Pending' },
                            { stage2: 'Pending' },
                            { stage3: 'Pending' },
                            { stage4: 'Pending' },
                            { stage5: 'Pending' },
                            { stage6: 'Pending' },
                            { stage7: 'Pending' },
                            { stage8: 'Pending' },
                            { stage9: 'Pending' },
                        ],
                        // vehicleNumber: 'MH12 NV 5606',
                        chassisNumber: generateChassis().toString().toUpperCase(),


                    }
                    console.log(myvehicle)

                    Customer.findOneAndUpdate({ '_id': custresult._id }, { $push: { ownedEVs: myvehicle } }).then((pp) => {
                        res.send(result._id)
                        console.log('cust saved too')
                    })

                })

            })
        })
    })

})






module.exports = router