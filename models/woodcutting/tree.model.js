const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const treeSchema = new Schema( 
    
{
    //CHANGE
    _id: {type: mongoose.Schema.Types.ObjectId},
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

const Tree = mongoose.model('Tree', treeSchema);

module.exports =  Tree;