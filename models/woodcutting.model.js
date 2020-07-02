const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema( 
    
{
    _id: String,
    tree : { 
        type: String, 
        required: [true, "Tree name required"],
        trim: true
    },
    tree_confidence: {type: Number, default: 0}
},

{
    timestamps: true,
});

const woodcuttingSchema = new Schema({
    trees : { type: [treeSchema], required: true},
},
{_id: false});

module.exports =  woodcuttingSchema;