const User = require('../../models/auth/CustomerUser')
const jwt = require('jsonwebtoken')

// handle errors
const handleErrors = (err) => {
    let errors = { email: '', password: '' }

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
    if (err._message.includes('User validation failed')) {
        console.log("into uvf")
        Object.values(err.errors).forEach(({ properties }) => {//the object includes a properties attribute in which the message is mentioned. here we are tapping onto the properties attribute directly
            errors[properties.path] = properties.message // properties.path includes the path like email or password
            console.log(properties)
        })
    }

    return errors

}

const maxAge = 3 * 24 * 60 * 60 //3 days

const createToken = (id) => {
    return jwt.sign({ id }, 'robinsecretsignature', {//todo add this to env
        expiresIn: maxAge
    })
}


module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.login_get = (req, res) => {
    res.render('login')
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge })
        res.status(201).json({ user: user._id })
    } catch (err) {

        const errors = handleErrors(err)
        console.log('NODEJS ERROR IS ', errors)
        res.json({ errors })
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge })
        res.status(200).json({ user: user._id })

    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}


module.exports.logout_get = (req, res) => {
    // you cannot directly delete a cookie. instead we create a new cookie with the same name
    // in that case, it replaces the preious cookie and we set the expiry very short
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/')
}