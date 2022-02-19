
const discount = {
    discountID: {
        type: String,
        required: true
    },
    validFrom: {
        type: Date,
        required: true
    },
    validto: {
        type: Date,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    },
    validOn: [//array of modelIDs of vehicles on which discount is available
        {
            type: String
        }
    ],
    maxDiscountPrice: {// for eg 20% off upto Rs. 1000 
        type: Number,
        required: true
    }
}

module.exports = discount