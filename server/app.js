const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");
const custAuthRoutes = require("./routes/authRoutes/customerAuthRoutes");
const {
  requireCustAuth,
  checkCustUser,
} = require("./middleware/customerMiddleware");

const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

require("./db/conn");
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use(cookieParser());
const mongoose = require("mongoose");
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
app.use("/factories", require("./routes/factory/factory"));
// ! OUTLET ROUTES
app.use("/outlets", require("./routes/outlet/outlet"));
app.use("/test-drives", require("./routes/outlet/testDrive"));

// ! Factory Worker Routes
app.use("/api/factory-worker", require("./routes/factoryworker/workers"));

// ! SERVICE CENTRE ROUTES
app.use("/service-centers", require("./routes/service-center/serviceCenter"));
app.use("/services", require("./routes/service-center/services"));
// ! COMMON ROUTES
app.use("/employees", require("./routes/common/employee"));
app.use("/complaints", require("./routes/common/complaints"));
app.use("/complaintType", require("./routes/common/complaintType"));
app.use("/leaves", require("./routes/common/leaves"));
app.use("/stock-requests", require("./routes/common/stockRequest"));
app.use("/model", require("./routes/common/model"));
// app.use('/customers', require('./routes/customer/customer'));

// ! CUSTOMER ROUTER
app.use(custAuthRoutes);
app.use("/products", requireCustAuth, require("./routes/customer/products"));
app.use("/servicing", requireCustAuth, require("./routes/customer/servicing"));
app.use("/chatbot", requireCustAuth, require("./routes/customer/chatbotMsg"));
app.use("/myBooking", requireCustAuth, require("./routes/customer/myBookings"));

// ! TESTING ROUTES
app.use("/testing", require("./routes/customer/customer"));
// app.get('*', checkCustUser)

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
