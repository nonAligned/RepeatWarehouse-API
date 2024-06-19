const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    _id: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    shoulder_width: {
        type: Number,
        required: true
    },
    waist_width: {
        type: Number,
        required: true
    },
    hip_width: {
        type: Number,
        required: true
    },
    leg_width: {
        type: Number,
        required: true
    },
    sleeve_length: {
        type: Number,
        required: true
    },
    total_length: {
        type: Number,
        required: true
    },
    total_width: {
        type: Number,
        required: true
    },
    color: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    purchase_price: {
        type: Number,
        required: true
    },
    retail_price: {
        type: Number,
        required: true
    },
    sold: {
        type: Boolean,
        required: true
    },
    donated: {
        type: Boolean,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    stored: {
        type: Boolean,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    entry_date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Items', ItemSchema);