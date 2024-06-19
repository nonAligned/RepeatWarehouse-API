const express = require('express');
const router = express.Router();

const controller = require('../../controller');

const OtherExpenses = require('../../models/OtherExpenses');

router.get('/', async (req, res) => {
    try {
        const allOtherExpenses = await OtherExpenses.find();
        if(!allOtherExpenses) throw Error ('No other expenses found');

        res.status(200).json({count: allOtherExpenses.length, results: allOtherExpenses});
        
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const otherExpense = await OtherExpenses.findById(req.params.id);
        if(!otherExpense) throw Error ('No other expense with specified id');

        res.status(200).json(otherExpense);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const otherExpense  = await OtherExpenses.findByIdAndDelete(req.params.id);
        if (!otherExpense) throw Error('No other expense found');

        res.status(200).json(otherExpense);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.post('/', async (req, res) => {
    const newOtherExpense = new OtherExpenses(req.body);

    try {
        const otherExpense = await newOtherExpense.save();
        if(!otherExpense) throw Error('Something went wrong while saving the new other expense');
    
        res.status(200).json(otherExpense);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const otherExpense = await OtherExpenses.findByIdAndUpdate(req.params.id, req.body);
        if(!otherExpense) throw Error('Something went wrong while updating the other expense');
    
        res.status(200).json(otherExpense);
    } catch (err) {
        res.status(400).json({msg: err});
    }
});

module.exports = router;