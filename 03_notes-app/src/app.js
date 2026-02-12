const express = require('express')
const app = express()

// middleware to read raw format data response from front-end
app.use(express.json())     

const notes_array = [];


app.post('/notes', (req, res) => {
    notes_array.push(req.body)
    res.status(201).json({
        message : "note created successfully"
    })
})


app.get('/notes', (req, res) => {
    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes_array
    })
})

// :index is a dynamic URL parameter
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index

    delete notes_array[index]
    res.status(200).json({
        message : "note deleted successfully"
    })
})


app.patch('/notes/:index', (req, res) => {
    const index = req.params.index
    const desc = req.body.description
    notes_array[index].description = desc
    
    res.status(200).json({
        message : "description updated successfully"
    })
})


module.exports = app


