const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Pusher = require('pusher');
const DB = process.env.DATABASE;

const pusher = new Pusher({
    appId      : '1403877',
    key        : '241be100f37c47926dda',
    secret     : 'b5502af0a6281d3bfc13',
    cluster    : 'ap2',
    encrypted  : true,
  });
  const channel = 'orders'

  const app = express();

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  



const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', () => {
  
    const ordersCollection = db.collection('orders');
    const changeStream = ordersCollection.watch();
    
    //console.log("In change Stream outer");

    changeStream.on('change', (change) => {
    // console.log("In change Stream");
      console.log(change);
        
      if(change.operationType === 'insert') {
        const order = change.fullDocument;
        pusher.trigger(
          channel,
          'inserted', 
          {
            orderID: order._id,
            modelName: order.modelName,
          }
        ); 
      } 
    //   else if(change.operationType === 'delete') {
    //     pusher.trigger(
    //       channel,
    //       'deleted', 
    //       change.documentKey._id
    //     );
    //   }
    });
  });