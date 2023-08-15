// Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;


// Schema
const currencySchema = new Schema({
    yen: {
        type: Number,
        required: [true, 'Yen is required'],
        trim: true,
    },
    usd: {
        type: Number,
        required: [true, 'USD is required'],
        trim: true,
    },
    date: {
        type: String,
        required: [true, 'Date is required'],
        trim: true,
    },
});

// Export
const Currency = mongoose.model('Currency', currencySchema);
module.exports = Currency;

