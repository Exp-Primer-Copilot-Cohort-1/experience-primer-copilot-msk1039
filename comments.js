// Create web server 

// Import modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

// Create app
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Create comments array
const comments = []

// GET all comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(comments)
})

// POST a new comment
app.post('/posts/:id/comments', (req, res) => {
    const commentId = uuidv4()
    const { content } = req.body
    const comment = {
        id: commentId,
        content,
        postId: req.params.id
    }
    comments.push(comment)
    res.status(201).send(comment)
})

// Start server
app.listen(4001, () => {
    console.log('Listening on 4001')
})
   