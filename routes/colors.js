const router = require('express').Router();
let Color = require('../models/color.model');
let Woodcutting = require('../models/woodcutting.model');
const woodcuttingSchema = require('../models/woodcutting.model');

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
    tree = {...tree, _id: tree.tree + color}
    woodcutting.trees[woodcutting.trees.length - 1] = tree;

    // creating new tree color
    const newTreeColor = new Color({ color, woodcutting});

    // save onto db
    newTreeColor.save()
        .then(() => res.json('Color Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/woodcutting/found_tree/:id').post((req, res) => {
    Color.findById(req.params.id)
        .then(color => {
            console.log(color);
            color.color = "red"

            

            color.save()
                .then(() => res.json('Color updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;