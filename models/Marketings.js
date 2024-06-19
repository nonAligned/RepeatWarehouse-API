const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarketingSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    target_audience: {
        type: String,
        required: true
    },
    age_group: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Marketings', MarketingSchema);