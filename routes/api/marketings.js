const express = require('express');
const router = express.Router();

const controller = require('../../controller');

const Marketings = require('../../models/Marketings');

router.get('/', async (req, res) => {
    try {
        let marketings = await Marketings.find();
        if(!marketings) throw Error ('No marketings found');

        res.status(200).json({count: marketings.length, results: marketings});
        
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const marketing = await Marketings.findById(req.params.id);
        if(!marketing) throw Error ('No marketing with specified id');

        res.status(200).json(marketing);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const marketing  = await Marketings.findByIdAndDelete(req.params.id);
        if (!marketing) throw Error('No marketing found');

        res.status(200).json(marketing);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.post('/', async (req, res) => {
    const newMarketing = new Marketings(req.body);

    try {
        const marketing = await newMarketing.save();
        if(!marketing) throw Error('Something went wrong while saving the new marketing campaign');
    
        res.status(200).json(marketing);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const marketing = await Marketings.findByIdAndUpdate(req.params.id, req.body);
        if(!marketing) throw Error('Something went wrong while updating the marketing campaign');
    
        res.status(200).json(marketing);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

module.exports = router;