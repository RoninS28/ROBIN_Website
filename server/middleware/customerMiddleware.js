const jwt = require('jsonwebtoken')

const requireCustAuth = (req, res, next) => {

    const token = req.cookies.jwt

    // check json web token exists and is verified
    if (token) {
        jwt.verify(token, 'robinsecretsignature', (err, decodedToken) => {
            if (err) { //signatures dont match
                res.redirect('/signup')
            }
            else {
                next()
            }
        })
    }
    else {
        res.redirect('/signup')
    }


}

// check current user
const checkCustUser = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, 'robinsecretsignature', async (err, decodedToken) => {
            if (err) { //signatures dont match
                res.locals.user = null //this locals prop makes it available to te views

                next()

            }
            else {
                let user = await User.findById(decodedToken.id)
                res.locals.user = user //this locals prop makes it available to te views
                next()
            }
        })
    }
    else {
        res.locals.user = null //this locals prop makes it available to te views
        next()
    }
}

module.exports = { requireCustAuth, checkCustUser }