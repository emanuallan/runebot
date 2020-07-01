const mongoose = require('mongoose');
const woodcuttingSchema = require('./woodcutting.model');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
    color: { 
        type: String, 
        required: [true, "Color Required"],
        unique: [true, "Color must be unique"],
        trim: true
    },
    woodcutting: {type: woodcuttingSchema, required: true},
}, {
    timestamps: true,
});

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
