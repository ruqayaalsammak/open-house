const mongoose = require ('mongoose')

const listingSchema  =new mongoose.Schema({
    price: {
        type: Number,
        required: true,
        min: 0,
    }, 
    image: {
        type: String,
        default: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg'
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
        min: 0,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
   
}, { timestamps: true })

const Listing = mongoose.model('Listing', listingSchema)

module.exports = listing
