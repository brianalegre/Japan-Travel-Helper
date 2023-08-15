// Mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

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
});

// Export
const Currency = mongoose.model('Currency', currencySchema);
module.exports = Currency;

