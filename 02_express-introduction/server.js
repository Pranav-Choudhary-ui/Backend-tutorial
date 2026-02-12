const express = require('express')      // loads the Express module
const app = express()       // creating the server instance

// express provides methods to handle different HTTP requests (GET, POST, PUT, DELETE, etc.)
// req contains all the data coming from front-end
app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

// starts an server
app.listen(3000, () => {
    console.log("server is running...");
})       