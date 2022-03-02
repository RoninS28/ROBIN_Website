const User = require('../../models/auth/User')
const jwt = require('jsonwebtoken')
const Customer = require('../../models/customer/CustomerSchema')

// handle errors
const handleErrors = (err) => {
    let errors = { email: '', password: '' }
    console.log(err.message)
    // FOR LOGIN
    // incorrect email
    if (err.message === 'Incorrect email') {
        console.log("into incorrect meail")
        errors.email = 'This email is not registered'
    }
    // Incorrect password
    if (err.message === 'Incorrect password') {
        console.log("incorrect password")

        errors.password = 'Incorrect password'
    }


    // FOR SIGNUP

    // duplicate error code
    if (err.code === 11000) {
        console.log("11000")

        errors.email = 'that email is already registered'
        return errors
    }

    // validation errors
    if (err.message.includes('User validation failed')) {
        console.log("into uvf")
        Object.values(err.errors).forEach(({ properties }) => {//the object includes a properties attribute in which the message is mentioned. here we are tapping onto the properties attribute directly
            errors[properties.path] = properties.message // properties.path includes the path like email or password
            console.log(properties)
        })
    }

    return errors

}

const maxAge = 60 * 1000 * 10 //10 minutes

const createToken = (id) => {
    return jwt.sign({ id }, 'robinsecretsignature', {//todo add this to env
        expiresIn: maxAge
    })
}


module.exports.signup_get = (req, res) => {
    console.log("signup get request!!");
    res.render('signup')
}

module.exports.login_get = (req, res) => {
    return res.status(201).json({ hello: "hello" })
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body

    try {
        const role = "customer"
        console.log("into try block")
        // const user = await User.create({ email, password, role })
        User.create({ email, password, role }).then((result) => {
            console.log("result is " + result._id)
            const token = createToken(result._id)
            res.cookie('jwttoken', token, { httpOnly: true, maxAge: maxAge })
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
            const newcust = new Customer({
                _id: result._id,
                fname: 'Saudagar',
                mname: 'Rajesh',
                lname: 'Londhe',
                emailID: email,
                contact: 9767880733,

                DOB: Date.parse("2000-08-16"),
                address: address1,
                ownedEVs: [

                ],
                serviceCentreChat: [

                ],
                chatbotChat: [

                ]
            })
            newcust.save().then((result2) => {
                console.log("new cust saved")
                return res.status(201).json({ user: result._id })

            })

        })
    } catch (err) {

        const errors = handleErrors(err)
        console.log('NODEJS ERROR ISS ', errors)
        return res.status(400).json({ errors })
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwttoken', token, { httpOnly: true, maxAge: maxAge })
        return res.status(200).json({ user: user._id })

    } catch (err) {
        const errors = handleErrors(err)
        console.log(errors)
        return res.status(400).json({ errors })
    }
}


module.exports.logout_get = (req, res) => {
    // you cannot directly delete a cookie. instead we create a new cookie with the same name
    // in that case, it replaces the preious cookie and we set the expiry very short
    res.cookie('jwttoken', '', { maxAge: 1 })
    res.redirect('/')
}