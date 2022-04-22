const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const authenticate = require('../../middleware/authenticate');
// const authenticate = require('../../middleware/authenticate');

const cookieParser = require("cookie-parser");
router.use(cookieParser());

require('../../db/conn');
const Worker = require('../../models/factory/userSchema');
// const Worker = require('../../../models/factorys/factory');
const Updatebatch = require('../../models/factory/updateBatchSchema');
const Accessory = require('../../models/factory/addAccSchema');
const Mycart = require('../../models/factory/addToCartSchema');
const factoryworkerController = require("../../controller/factoryworker/factoryworkerController");



router.post('/homepage',async(req,res)=>{
    try{
        let token;
       const {email,password} =req.body;
       if(!email || !password)
       {
           return res.status(400).json({error:"Plz fill the data"})
       }
       const userLogin = await Worker.findOne({email:email});
       console.log(userLogin);

       if(userLogin)
       {
            token =await  userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires: new Date(Date.now()+25892000000),
                httpOnly: true
            })

            if(userLogin.password!=password)
            {
              res.status(400).json({error:"user error"});
            }
            else
            {
                res.json({message: "Login Successfull"});
            }
       }
       else
       {
         res.status(400).json({error:"user errorr"});
       }
    }
    catch(err)
    {
        console.log(err);
    }
});

router.get('/manufacture', authenticate, (req,res)=>{
    console.log('In Manufacture');
    res.send(req.rootUser);
});

router.post('/senddata',async(req,res)=>{
    console.log(req.body);

    const {description,stageno,myArray,updateddate} = req.body;
    var temp=0;
    for (let i = 0; i < myArray.length; i++) 
    {
        const filter = { 'BatchId': myArray[i] };
        const update = {$push : {'stages': { 'stageno':stageno, 'description': description , 'updateddate': updateddate }}} ;

         Updatebatch.findOneAndUpdate(filter, update, { upsert: true}, function(err,doc){
            if (err)
            {// return res.send(500, {error: err});
              console.log(err);
              temp=1;
            }
            else
            {
                console.log("success");
            }
           // return res.send('Succesfully saved.');
        });
        if(temp === 1)
        {
            break;
        }
    }
    if(temp === 1)
    {
        //error
        res.status(500).json({error: "Failed to registered"});
    }
    else
    {
        //success
        res.status(201).json({message: "user registered successfull"});
    }
    

});

router.get('/manufacturehistory/:id', (req,res)=>{
    // console.log('Hello');
    try{
        // console.log('Hello');
        const bid=req.params.id;
        console.log(bid);
        Updatebatch.find({ 'BatchId': bid}, function (err, docs) {
            if (err){
                console.log(err);
                res.status(404).send();
            }
            else{
                console.log("success");
                console.log(docs);
                console.log("heello");
                res.send(docs);
            }
        });

    }catch(e){
        console.log(e);
        res.status(500).send(e);
   }
});

router.get('/buycat/:id', (req,res)=>{
    console.log('Hello');
    try{
         console.log('Hello in buycat id');
        const bid=req.params.id;
        console.log(bid);
        let catName;
        if(bid === "cat1")
        {
            catName = 'Tyre and Wheels';
        }
        else if(bid === "cat2")
        {
            catName = 'Seats';
        }
        else if(bid === "cat3")
        {
            catName = 'Handles and rods';
        }
        else if(bid === "cat4")
        {
            catName = 'Electric Instruments';
        }
        console.log("you want",catName);
        Accessory.find({ 'category': catName}, function (err, docs) {
            if (err){
                console.log(err);
                res.status(404).send();
            }
            else
            {
                console.log("success");
                console.log(docs);
                console.log("heello");
                res.send(docs);
            }
        });

    }catch(e){
        console.log(e);
        res.status(500).send(e);
   }
});


router.get('/buyitem/:id', (req,res)=>{
    // console.log('Hello');
    try{
         console.log('Hello in buyitem');
        const bid=req.params.id;
        console.log(bid);
        // console.log("you want",catName);
        Accessory.find({'accid': bid}, function (err, docs) {
            if (err){
                console.log(err);
                res.status(404).send();
            }
            else
            {
                console.log("success");
                console.log(docs);
                console.log("heello");
                res.send(docs);
            }
         });

    }catch(e){
        console.log(e);
        res.status(500).send(e);
   }
});

router.get('/buyaccessories', (req,res)=>{
    console.log('Hello buyaccessories');
    try{
        // console.log('Hello');
        Accessory.find({}, function (err, docs) {
            if (err){
                console.log(err);
                res.status(404).send();
            }
            else{
                // console.log("successs");
                // console.log(docs);
                // console.log("heelloo");
                res.send(docs);
            }
        });

    }catch(e){
        console.log(e);
        res.status(500).send(e);
   }
});


router.get('/addtocart', (req,res)=>{
    console.log('Hello in addtocart');
    try{
    console.log('Hello in addtocart');
    // console.log(req.body);
    // console.log(req.body.name);
    // res.json({message: req.body});

    //Comfort seat which can withstand in all the seasons complying to better attachment solutions
    // const {accid,name,category,price,company,description,specifications} = req.body;

    // if(!accid || !name || !category || !price || !company || !description || !specifications )
    // {
    //     console.log('err');
    //     return res.status(422).json({error:"Plz fill all detils"});
    // }

    

          //const specifications = {'Model Number': 'VR_CA_WC', 'UV Ray Protection': 'Yes', 'Solid':'Yes'}

        // const acce = { 'stageno':stageno, 'description': description , 'updateddate': updateddate } ;

        //  const acc = new Accessory({accid,name,category,price,company,description,specifications});
        //  const accRegister = await acc.save();
        // if(accRegister)
        // {
        //     res.status(201).json({message: "acc added successfull"});
        // }
        // else
        // {
        //     res.status(500).json({error: "Failed to add"});
        // }
    }
    catch(err)
    {
        console.log(err);
    }
});



router.post('/addaccess',async(req,res)=>{
    console.log('Hello');
    console.log(req.body);
    // console.log(req.body.name);
    // res.json({message: req.body});

    //Comfort seat which can withstand in all the seasons complying to better attachment solutions
    const {accid,name,category,price,company,description,specifications} = req.body;

    if(!accid || !name || !category || !price || !company || !description || !specifications )
    {
        console.log('err');
        return res.status(422).json({error:"Plz fill all detils"});
    }

    try{

          //const specifications = {'Model Number': 'VR_CA_WC', 'UV Ray Protection': 'Yes', 'Solid':'Yes'}

        // const acce = { 'stageno':stageno, 'description': description , 'updateddate': updateddate } ;

         const acc = new Accessory({accid,name,category,price,company,description,specifications});
         const accRegister = await acc.save();
        if(accRegister)
        {
            res.status(201).json({message: "acc added successfull"});
        }
        else
        {
            res.status(500).json({error: "Failed to add"});
        }
    }
    catch(err)
    {
        console.log(err);
    }
});



router.get('/logout',(req,res) => {
    console.log('Hello Logout');
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('User Logout');
});



// router.post('/homepage',async(req,res)=>{
//     // console.log(req.body);
//     // console.log(req.body.name);
//     // res.json({message: req.body});

//     const {name,email,password,age} = req.body;

//     if(!name || !email || !password || !age)
//     {
//         return res.status(422).json({error:"Plz fill all detils"});
//     }

//     try{
//         const userExist = await Worker.findOne({email});
//         if(userExist)
//         {
//             return res.status(422).json({error: "Email already exist"});
//         }
//         // else if(password!=cpassword)
//         // {
//         //     return res.status(422).json({error: "password not matching"});
//         // }

//         const user = new Worker({name,email, password, age});

//         const userRegister = await user.save();

//         if(userRegister)
//         {
//             res.status(201).json({message: "user registered successfull"});
//         }
//         else
//         {
//             res.status(500).json({error: "Failed to registered"});
//         }
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// });


// router.post('/login',async(req,res)=>{
//     try{
//         let token;
//        const {email,password} =req.body;
//        if(!email || !password)
//        {
//            return res.status(400).json({error:"Plz fill the data"})
//        }
//        const userLogin = await User.findOne({email:email});
//        console.log(userLogin);

//        if(userLogin)
//        {
//             token =await  userLogin.generateAuthToken();
//             console.log(token);

//             res.cookie("jwtoken",token,{
//                 expires: new Date(Date.now()+25892000000),
//                 httpOnly: true
//             })

//             if(userLogin.password!=password)
//             {
//               res.status(400).json({error:"user error"});
//             }
//             else
//             {
//                 res.json({message: "Login Successfull"});
//             }
//        }
//        else
//        {
//          res.status(400).json({error:"user errorr"});
//        }

      

//     //    if(!userLogin)
//     //    {
//     //        res.status(400).json({error:"user errorr"});
//     //    }
//     //        res.json({message:"user Login Success"});
       
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// });


//====================================================================================================
// siddhesh code
router.get("/inspection", factoryworkerController.modelget);
router.post("/inspection/", factoryworkerController.modelpost);
router.put("/inspection/:id", factoryworkerController.modelput);
router.delete("/inspection/:id", factoryworkerController.modeldelete);


module.exports = router;