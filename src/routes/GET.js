const express = require('express');
const router = express.Router();
const { User } = require('../models/index');
const { Task } = require('../models/index');
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/Users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/Tasks', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})
router.get('/Tasks/:id', async (req, res) => {
    try {
        const task = await Task.findOne({
            where: { tid: req.params.id }
        });
        res.status(200).json(task)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})
router.get('/Users/:id', async (req, res) => {
    try {
        const user = await User.findOne({
            where: { uid: req.params.id }
        });
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})
module.exports = router;