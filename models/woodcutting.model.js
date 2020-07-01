const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema({
    tree : { 
        type: String, 
        required: [true, "Tree name required"],
        trim: true
    },
    tree_confidence: {type: Number, default: 0, sparse: true}
});

const woodcuttingSchema = new Schema({
    trees : { type: treeSchema, required: true},
}, {
    timestamps: true,
});

module.exports =  woodcuttingSchema;

// const Woodcutting = mongoose.model('Woodcutting', woodcuttingSchema);

// module.exports = Woodcutting;
