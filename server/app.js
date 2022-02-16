const dotenv = require('dotenv');
const express = require('express');
const app = express();
const custAuthRoutes = require('./routes/authRoutes/customerAuthRoutes')
const { requireCustAuth, checkCustUser } = require('./middleware/customerMiddleware')

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

require('./db/conn');
app.use(express.json());

// const User = require('./models/S');

// app.use(require('./routes/stage'));

// app.use('/bookingsStage', require('./routes/customer/stage'));

app.use('/factories', require('./routes/factory/factory'));
//app.use('/customers', require('./routes/customer/customer'));
app.use('/outlets', require('./routes/outlet/outlet'));
app.use('/service-centers', require('./routes/service-center/serviceCenter'));
app.use('/services', require('./routes/service-center/services'));
app.use('/test-drives', require('./routes/outlet/testDrive'));
app.use('/employees', require('./routes/common/employee'));
app.use('/complaints', require('./routes/common/complaints'));
app.use('/complaintType', require('./routes/common/complaintType'));
app.use('/leaves', require('./routes/common/leaves'));
app.use('/stock-requests', require('./routes/common/stockRequest'));
app.use('/products', require('./routes/customer/products'));
app.get('*', checkCustUser)
app.use(custAuthRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})