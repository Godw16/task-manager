const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new task
router.post('/', auth, async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      owner: req.user._id
    });
    
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all tasks for a user
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user._id });
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get task by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
    
    if (!task) {
      return res.status(404).send();
    }
    
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update task by ID
router.patch('/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title', 'description', 'status'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  
  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  
  try {
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });
    
    if (!task) {
      return res.status(404).send();
    }
    
    updates.forEach(update => task[update] = req.body[update]);
    await task.save();
    
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete task by ID
router.delete('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    
    if (!task) {
      return res.status(404).send();
    }
    
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;