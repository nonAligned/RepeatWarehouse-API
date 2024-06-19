const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
    _id: {
        type: Number
    },
    fullName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    itemsBoughtList: {
        type: Array,
        required: true
    },
    moneySpent: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Buyers', BuyerSchema);