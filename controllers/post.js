// importing the necessary module 
const Post = require('../model/post')

exports.get_all = async (req, res) => {
    try {
      // using the find method that will return all the tasks
      const post = await Post.find()
      res.status(200).json(post)
    } catch (error) {
      res.status(500).json({ message: err.message })
    }
  }

  // function created to get one task
  exports.get_one_task = async (req, res) => {
    try {
      const onetask = await Post.findOne({ _id: req.params.id})
      res.status(200).json(onetask)
    } catch (error) {
      return res.status(404).json({ error: "There is no task at that id" })
    }
  }

  // function created to create a single task
  exports.create_one_task = async (req, res) => {
    // creating the data from the front end
    const newPost = new Post(req.body)
    try {
      const savePost = await newPost.save()
      return res.status(201).json({id: savePost._id})
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  // function to get one task and update it
exports.update_one_task = async (req, res) => {
    try {
      const updatePost = await Post.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true})
      res.status(200).json(updatePost)
    } catch (error) {
      return res.status(204).json({ error: "There is no task at that id" })
    }
  }

  // function created to get one task and delete it
exports.delete_one_task = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
      res.status(204).json({ message: 'None'})
    } catch (error) {
      return res.status(204).json({ error: "There is no task at that id" })
    }
  }