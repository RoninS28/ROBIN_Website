const testDriveSchema = require('../../models/outlet/testDriveSchema');



const testDrivesGet = (req,res,next) => {
    testDriveSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const testDrivePost = (req,res,next) => {
    testDriveSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
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