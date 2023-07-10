// Build a Server that Generates Random Number using Express
// -> '/random' -> send random number in response {random: 10}

const express = require('express')

// Create an express application
const app = express()

// Define routes
app.get('/random', (req, res) => {
    // Generate Random Number 
    const randomNum = Math.floor(Math.random() * 100)
    res.send({random: randomNum})
})

// Start the Server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})