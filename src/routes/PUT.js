const express = require('express');
const router = express.Router();
const { User } = require('../models/index');
const { Task } = require('../models/index');
router.put('/users/:id', async (req, res) => {
    try {
        const [updatedRows] = await User.update(
            {
                name: req.body.name,
                email: req.body.email,
            },
            {where: { uid: req.params.id }}
        );
        if (updatedRows) {
            res.status(200).json({ message: 'User updated successfully ' });
        } else {
            res.status(404).json({ message: 'didnt find any users' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.put('/tasks/:id', async (req, res) => {
    try {
        const [updatedRows] = await Task.update(
            {
                title: req.body.title,
                description: req.body.description,
                deadline: req.body.deadline,
                priority: req.body.priority,
            },
            {where: { tid: req.params.id }}
        );
        if (updatedRows) {
            res.status(200).json({ message: 'Task updated successfully.' });
        } else {
            res.status(404).json({ message: 'No task found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 });
module.exports = router;