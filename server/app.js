const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

require('./db/conn');
app.use(express.json());

// const User = require('./models/S');

// app.use(require('./routes/stage'));

app.use('/bookingsStage', require('./routes/customer/stage'));


app.use('/factories', require('./routes/factory/factory'));
app.use('/outlets', require('./routes/outlet/outlet'));
app.use('/service-centers', require('./routes/service-center/serviceCenter'));
app.use('/services', require('./routes/service-center/services'));

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})