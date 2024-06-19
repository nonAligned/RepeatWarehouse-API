const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OtherExpenseSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    entry_date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('OtherExpenses', OtherExpenseSchema);