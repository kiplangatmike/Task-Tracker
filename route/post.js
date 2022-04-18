// mporting all the necessary modules required to run the controller module
const express = require('express')
const { status } = require('express/lib/response')
const router = express.Router()
const Post = require('../model/post')

const PostController = require('../controllers/post');

// get all tasks
router.get('/tasks', PostController.get_all)

// get one task
router.get('/tasks/:id', PostController.get_one_task)

// Creating one task
router.post('/tasks', PostController.create_one_task)

// Updating one task
router.patch('/tasks/:id', PostController.update_one_task)

// Deleting nne task
router.delete('/tasks/:id', PostController.delete_one_task)

module.exports = router