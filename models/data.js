const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
        name: {
            type: String,
            required: [true, 'Name is required']
        },
        
        ratings: {
            type: Number
        }
});

const Htl = mongoose.model('restro',HotelSchema);

module.exports = Htl;