const mongoose=require('mongoose');
// const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    age:{
        type:String,
        required: true
    },
    tokens: [
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
})


userSchema.methods.generateAuthToken =async function (){
    try{
        let token = jwt.sign({_id:this._id},"mynameispictpunemaharashtraindia");
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}

const Worker = mongoose.model('WORKER',userSchema);
module.exports = Worker;

