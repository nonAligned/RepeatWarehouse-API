const express = require('express');
const router = express.Router();

const controller = require('../../controller');

const Items = require('../../models/Items');

router.get('/', async (req, res) => {
    try {
        let items = await Items.find();
        let itemCount = items.length;
        if(!items) throw Error ('No items');

        if (req.query.sort) {
            items = controller.sort(items, req.query.sort, req.query.sortDirection);
        }

        if (req.query.filter) {
            req.query.filter = JSON.parse(req.query.filter);
            let filteredItems = [];
            let filteredItemsCount = 0;
            for(var key in req.query.filter) {         
                if (req.query.filter[key] === true) {
                    items.forEach(item => {
                        if (item[key] === true) {
                            filteredItems.push(item);
                            filteredItemsCount++;
                        }
                    })
                }
            }
            filteredItems = controller.pagination(filteredItems, req.query.page, req.query.pageSize);
            res.status(200).json({count: filteredItemsCount, results: filteredItems});

        } else {
            items = controller.pagination(items, req.query.page, req.query.pageSize);
            res.status(200).json({count: itemCount, results: items});
        }
        
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Items.findById(req.params.id);
        if(!item) throw Error ('No item with specified id');

        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const item = await Items.findByIdAndDelete(req.params.id);
        if (!item) throw Error('No item found');

        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});

router.post('/', async (req, res) => {
    let newItem = new Items(req.body);
    let newId = Number(new Date().getTime() * Math.random() + 1000);
    newItem['_id'] = Math.ceil(newId);

    try {
        const item = await newItem.save();
        if(!item) throw Error('Something went wrong while saving the item');
    
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }

    
});

router.patch('/:id', async (req, res) => {
    try {
        const item = await Items.findByIdAndUpdate(req.params.id, req.body);
        if(!item) throw Error('Something went wrong while updating the item');
    
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const item = await Items.findByIdAndUpdate(req.params.id, req.body);
        if(!item) throw Error('Something went wrong while updating the item');
    
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});

module.exports = router;