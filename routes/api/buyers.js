const express = require('express');
const router = express.Router();

const controller = require('../../controller');

const Buyers = require('../../models/Buyers');

router.get('/', async (req, res) => {
    try {
        let buyers = await Buyers.find();
        if(!buyers) throw Error ('No buyers found');

        res.status(200).json({count: buyers.length, results: buyers});
        
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const buyer = await Buyers.findById(req.params.id);
        if(!buyer) throw Error ('No buyer with specified id');

        res.status(200).json(buyer);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const buyer  = await Buyer.findByIdAndDelete(req.params.id);
        if (!buyer) throw Error('No buyer found');

        res.status(200).json(buyer);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.post('/', async (req, res) => {
    const newBuyer = new Buyers(req.body);
    let newId = Number(new Date().getTime() * Math.random() + 2000 * Math.random());
    newBuyer['_id'] = Math.ceil(newId);

    try {
        const buyer = await newBuyer.save();
        if(!buyer) throw Error('Something went wrong while saving the new buyer');
    
        res.status(200).json(buyer);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const buyer = await Buyers.findByIdAndUpdate(req.params.id, req.body);
        if(!buyer) throw Error('Something went wrong while updating the buyer');
    
        res.status(200).json(buyer);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const buyer = await Buyers.findByIdAndUpdate(req.params.id, req.body);
        if(!buyer) throw Error('Something went wrong while updating the buyer');
    
        res.status(200).json(buyer);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

module.exports = router;