const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    price_per_item: {
        type: Number,
        required: true,
    }
});

const stockRequestSchema = new mongoose.Schema({
    sourceType: {
        type: String,
        required: true
    },
    sourceId: {
        type: mongoose.Schema.Types.ObjectId,  
        required: true
    },
    date: {
        type: Date,
    },
    status: {   //pending, active
        type: String,
        required: true
    },
    products: [productSchema]
}) 

const StockRequest = mongoose.model('StockRequest', stockRequestSchema);
module.exports = StockRequest;

