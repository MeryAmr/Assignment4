const express = require('express');
const router = express.Router();
const { User } = require('../models/index');
const { Task } = require('../models/index');
router.post('/Users', async (req, res) => { 
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/Tasks', async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            deadline: req.body.deadline,
            priority: req.body.priority,
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;