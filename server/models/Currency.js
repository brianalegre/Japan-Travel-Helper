// Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;


// Schema
const currencySchema = new Schema({
    yen: {
        type: String,
        required: [true, 'Yen is required'],
        trim: true,
    },
    usd: {
        type: String,
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

