const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],// suppose the value is false, that msg is triggered
        unique: true, // for unique property we cannot put tru false like the one above. hence we access the err.codes
        lowercase: true,
        validate: [isEmail, 'Please enter a validate email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },

})

// ! SIGNUP
// fire a function before the foc saved to db
userSchema.pre('save', async function (next) {
    console.log('user about to be created and saved', this) //'this' is the doc to be saved ti the db

    // password hashing
    // we take the user password, add asalt to it and then pass it through the hashing algorithm
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)

    next() //next takes the code to the next middleware
})



//! LOGIN
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password) // bcrypt does then hashing under the hood for arg1 for us
        if (auth) {
            return user
        }
        throw Error('Incorrect password')
    }
    throw Error('Incorrect email')
}


const CustUser = mongoose.model('CustUser', userSchema)
module.exports = CustUser