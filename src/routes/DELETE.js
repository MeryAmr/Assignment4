const express = require('express');
const router = express.Router();
const { User } = require('../models/index');
const { Task } = require('../models/index');
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedRows = await User.destroy({ where: { uid: req.params.id } });
        if (deletedRows) {
            res.status(200).json({ message: 'User deleted successfully.' });
        } else {
            res.status(404).json({ message: 'no users found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.delete('/tasks/:id', async (req, res) => {
    try {
        const deletedRows = await Task.destroy({ where: { tid: req.params.id } });
        if (deletedRows) {
            res.status(200).json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ message: 'didnt find any tasks' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;