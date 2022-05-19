const testDriveSchema = require('../../models/outlet/testDriveSchema');
const jwt = require('jsonwebtoken')
const EVModel = require('../../models/common/ModelSchema');
const Outlet = require('../../models/outlet/outletSchema');


const testDrivesGet = (req,res,next) => {
    testDriveSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const testDrivePost = (req,res,next) => {
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
            console.log("||"+req.body.model+"||"+req.body.outlet)
            Outlet.findOne({"name": req.body.outlet}).then((result)=>{
                EVModel.findOne({"modelName": req.body.model}).then((result2)=>{
                    console.log(result)
                    console.log(result2)
                    console.log(req.body.time+ "outlet" +req.body.outlet)

                    const newTest = new testDriveSchema({
                        customer: decodedToken.id,
                        date: req.body.date, 
                        time: req.body.time, 
                        model: result2._id,
                        address: req.body.address, 
                        outlet: result._id,
                        contact: req.body.contact,  
                        pincode: req.body.pincode, 
                        dob: req.body.dob, 
                        name: req.body.name
                        
                    })
                    newTest.save().then(() => {
                        console.log("new test drive saved")
                        return res.send("Booked")
        
                    })
                })
                
            })
            
        }})
}

const testDrivePut = (req,res,next) => {
    testDriveSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        testDriveSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const testDriveDelete = (req,res,next) => {
    testDriveSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const testDriveGet = async (req, res) => {
    testDriveSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    testDrivesGet,
    testDrivePost,
    testDrivePut,
    testDriveDelete,
    testDriveGet
}