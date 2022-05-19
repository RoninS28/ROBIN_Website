const factoryBatchSchema = require('../../models/factory/updateBatchSchema');
const Factory = require('../../models/factory/factorySchema');



const factoryBatchesGet = (req, res, next) => {
    factoryBatchSchema.find({}).then(function (data) {
        res.send(data);
    }).catch(next);
}

const factoryBatchPost = (req, res, next) => {
    factoryBatchSchema.create(req.body).then(function (data) {
        res.send(data);
    }).catch(next);
}

const factoryBatchPut = (req, res, next) => {
    factoryBatchSchema.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(function (data) {
        factoryBatchSchema.findOne({ _id: req.params.id }).then(function (data) {
            res.send(data);
        });
    });
}

const factoryBatchDelete = (req, res, next) => {
    factoryBatchSchema.findOneAndDelete({ _id: req.params.id }).then(function (data) {
        res.send(data);
    });
}

const factoryBatchGet = async (req, res) => {
    factoryBatchSchema.findOne({ _id: req.params.id }).then(function (data) {
        res.send(data);
    });
}

const getNextBatch = async (req, res) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, "mynameispictpunemaharashtraindia");
        console.log("into get next batch")

        const rootUser = await Worker.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (rootUser) {

            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
            Factory.findOne({ _id: rootUser.factoryID }).then((result) => {
                let current = result.currentLastBatchOngoing
                current += 1
                console.log(`new current is ${current}`)
                Factory.updateOne({ _id: rootUser.factoryID }, { '$set': { 'currentLastBatchOngoing': current } }).then((result1) => {
                    res.send("current++")
                    console.log("current++")
                })
            })
        }

    }
    catch (e) {
        console.log(e)
    }

}


module.exports = {
    factoryBatchesGet,
    factoryBatchPost,
    factoryBatchPut,
    factoryBatchDelete,
    factoryBatchGet,
    getNextBatch
}