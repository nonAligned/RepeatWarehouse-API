const express = require('express');
const router = express.Router();

const controller = require('../../controller');

const Consumables = require('../../models/Consumables');

router.get('/', async (req, res) => {
    try {
        let consumables = await Consumables.find();
        if(!consumables) throw Error ('No consumables found');

        res.status(200).json({count: consumables.length, results: consumables});
        
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const consumable = await Consumables.findById(req.params.id);
        if(!consumable) throw Error ('No consumable with specified id');

        res.status(200).json(consumable);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const consumable  = await Consumables.findByIdAndDelete(req.params.id);
        if (!consumable) throw Error('No consumable found');

        res.status(200).json(consumable);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.post('/', async (req, res) => {
    const newConsumable = new Consumables(req.body);

    try {
        const consumable = await newConsumable.save();
        if(!consumable) throw Error('Something went wrong while saving the new consumable');
    
        res.status(200).json(consumable);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const consumable = await Consumables.findByIdAndUpdate(req.params.id, req.body);
        if(!consumable) throw Error('Something went wrong while updating the consumable');
    
        res.status(200).json(consumable);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

module.exports = router;