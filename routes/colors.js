const router = require('express').Router();
let Color = require('../models/color.model');

router.route('/').get((req, res) => {
    Color.find()
        .then(colors => res.json(colors))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/woodcutting/add').post((req, res) => {
    const color = req.body.color;
    const woodcutting = req.body.woodcutting;

    const newColor = new Color({ color, woodcutting });
    // color model still needs the woodcutting schema type

    newColor.save()
        .then(() => res.json('Color Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/woodcutting/update/:id').post((req, res) => {
    Color.findById(req.params.id)
        .then(color => {
            color.color = req.body.color;
            color.woodcutting = req.body.woodcutting;

            color.save()
                .then(() => res.json('Color updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;