// Create a Basic Server with Different Routes using Express

// -> '/' -> send response as {msg: 'I am homepage'}
// -> '/about' -> send response as {msg: 'I am about page'}
// -> '/contact' -> send response as {email: 'support@pwskills.com'}

const express = require('express')

// Create an Express application
const app = express()

// Define routes
app.get('/', (req, res) => {
    res.json({msg: "I am HomePage"})
})

app.get('/about', (req, res) => {
    res.json({msg: "I am About Page"})
})

app.get('/contact', (req, res) => {
    res.json({email: "support@pwskills.com"})
})

// Start the Server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
