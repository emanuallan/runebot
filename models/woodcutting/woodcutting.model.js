const mongoose = require('mongoose');
const treeSchema = require('./tree.model').schema;
const Schema = mongoose.Schema;


const woodcuttingSchema = new Schema({
    trees : { type: [treeSchema], required: true},
},
{_id: false});

const Woodcutting = mongoose.model('Woodcutting', woodcuttingSchema);

module.exports =  Woodcutting;