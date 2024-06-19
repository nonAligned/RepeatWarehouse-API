const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConsumableSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    purchase_price: {
        type: Number,
        required: true
    },
    entry_date: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Consumables', ConsumableSchema);