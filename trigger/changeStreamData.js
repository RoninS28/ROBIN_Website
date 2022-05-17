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

    const updateBatchCollection=db.collection('updatebatches');
    const changeStreamBatch=updateBatchCollection.watch('');

    const complaintsCollection=db.collection('complaints');
    const changeStreamComplaints=complaintsCollection.watch('');

    
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
            ID: order._id,
            detail: order.modelName,
            activity:"New Order Received"
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

    changeStreamBatch.on('change',(change)=>{

      if(change.operationType=='insert')
      {
        const batchStatus = change.fullDocument;
        pusher.trigger(
          "batchUpdate",
          'inserted', 
          {
            ID: batchStatus._id,
            activity:"New Batch Status Updated"
          }
        ); 

      }
      else if(change.operationType=='update')
      {
        const batchStatus = change.fullDocument;
        pusher.trigger(
          "batchUpdate",
          'updated', 
          {
            ID: batchStatus._id,
            activity:"Batch Status Updated"
          }
        );
      }
      else if(change.operationType=='delete')
      {
        const batchStatus = change.fullDocument;
        pusher.trigger(
          "batchUpdate",
          'deleted', 
          {
            ID: batchStatus._id,
            activity:"Batch Status Deleted"
          }
        ); 
      }
    });

    changeStreamComplaints.on('change',(change)=>{

      if(change.operationType=='insert')
      {
        const complaintStatus=change.fullDocument;
        pusher.trigger(
          "complaints",
          'inserted',
          {
            ID: complaintStatus._id,
            activity:"Complaint Added",
          }
        );
      }

    });

  });