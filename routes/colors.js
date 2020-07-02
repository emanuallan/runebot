const router = require('express').Router();
let Color = require('../models/color.model');
let TreeColor = require('../models/woodcutting/tree.model');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Color.find()
        .then(colors => res.json(colors))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/woodcutting/add').post((req, res) => {
    const color = req.body.color;
    let woodcutting = req.body.woodcutting;

    //creating and setting color-tree id
    let tree = woodcutting.trees[woodcutting.trees.length - 1];


//CHANGE
    tree = {...tree, _id: mongoose.Types.ObjectId(tree.tree + color)}



    woodcutting.trees[woodcutting.trees.length - 1] = tree;

    // creating new tree color
    const newTreeColor = new Color({ color, woodcutting});

    // save onto db
    newTreeColor.save()
        .then(() => res.json('Color Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/woodcutting/found_tree/:id').post((req, res) => {

    //CHANGE
    console.log(mongoose.Types.ObjectId(req.params.id).toString());

    TreeColor.findById(mongoose.Types.ObjectId(req.params.id).toString())
        .then(color => {
            console.log(color);

            

            color.save()
                .then(() => res.json('Color updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;