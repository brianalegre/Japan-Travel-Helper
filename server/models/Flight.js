// Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose


// Schema
const flightSchema = new Schema({
    flightNumber: {
        type: String,
        required: [true, 'Flight number is required'],
        trim: true,
    },
    airline: {
        type: String,
        required: [true, 'Airline is required'],
        trim: true,
    },
    departureLocation: {
        type: String,
        required: [true, 'Departure is required'],
        trim: true,
    },
    arrivalLocation: {
        type: String,
        required: [true, 'Arrival is required'],
        trim: true,
    },
    dateDepature: {
        type: String,
        required: [true, 'Date is required'],
        trim: true,
    },
    dateArrival: {
        type: String,
        required: [true, 'Date is required'],
        trim: true,
    },
    timeDepart: {
        type: String,
        required: [true, 'Time is required'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        trim: true,
    },
    returnDate: {
        type: String,
        required: [true, 'Return date is required'],
        trim: true,
    },
    returnFlightTime: {
        type: String,
        required: [true, 'Return time is required'],
        trim: true,
    },
    returnFlightAirline: {
        type: String,
        required: [true, 'Return airline is required'],
        trim: true,
    },

});


// Export
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;

