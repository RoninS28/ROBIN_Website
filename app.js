const dotenv = require('dotenv');
const express = require('express');
const app = express();
const custAuthRoutes = require('./routes/authRoutes/customerAuthRoutes')
const { requireCustAuth, checkCustUser } = require('./middleware/customerMiddleware')

const cookieParser = require("cookie-parser");

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 5000;

require('./db/conn');
app.use(express.json());

app.use(cookieParser());
const mongoose = require('mongoose')



// const cust = mongoose.model("customer")
// mongoose.connection.deleteModel('CustomerProfile')
// const mongoose = require('mongoose')
// console.log(mongoose.model('Customer'))
// const Customer = require('../server/models/customer/CustomerSchema')
// // delete mongoose.models.customer
// delete mongoose.models.Customer


// const User = require('./models/S');

// app.use(require('./routes/stage'));

// app.use('/bookingsStage', require('./routes/customer/stage'));
// ! FACTORY ROUTES
app.use('/factories', require('./routes/factory/factory'));
app.use('/factory', require('./routes/factory/auth'));//todo change it
// ! OUTLET ROUTES
app.use('/outlets', require('./routes/outlet/outlet'));
app.use('/test-drives', require('./routes/outlet/testDrive'));
// ! SERVICE CENTRE ROUTES
app.use('/service-centers', require('./routes/service-center/serviceCenter'));
app.use('/services', require('./routes/service-center/services'));
// ! COMMON ROUTES
app.use('/employees', require('./routes/common/employee'));
app.use('/complaints', require('./routes/common/complaints'));
app.use('/complaintType', require('./routes/common/complaintType'));
app.use('/leaves', require('./routes/common/leaves'));
app.use('/stock-requests', require('./routes/common/stockRequest'));
app.use('/model', require('./routes/common/model'));
// app.use('/customers', require('./routes/customer/customer'));

// ! CUSTOMER ROUTER
app.use(custAuthRoutes)
app.use('/products', requireCustAuth, require('./routes/customer/products'));
app.use('/servicing', requireCustAuth, require('./routes/customer/servicing'));
app.use('/chatbot', requireCustAuth, require('./routes/customer/chatbotMsg'));
app.use('/myBooking',requireCustAuth, require('./routes/customer/myBookings'));
app.use('/myProfile',requireCustAuth, require('./routes/customer/myProfile'))

// ML MODEL
app.use('/reviewAnalysis', require('./routes/mlmodel/mlModelRoute'));


// ! TESTING ROUTES
app.use('/testing', require('./routes/customer/customer'))
// app.get('*', checkCustUser)



const path = require("path")

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });
}

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})

