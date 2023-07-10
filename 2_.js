// Create a Backend For Counter Web App with Api Endpoint for managing Counter using Express
// -> '/' -> Send counter data as {counter: counter}
// -> '/increment' -> increment counter by 1 and send in response latest data as {counter: counter}
// -> '/decrement' -> decrement counter by 1 and send in response latest data as {counter: counter}
// Note: Using Express is mandatory for this Question

const express = require('express')

// Create an Express application
const app = express()

// Initialize the counter
let counter = 0


// API endpoint to get the counter value
app.get('/', (req, res) => {
  res.send({counter})
})

// API endpoint to increment the counter
app.get('/increment', (req, res) => {
  counter++
  res.send({counter})
})

// API endpoint to decrement the counter
app.get('/decrement', (req, res) => {
  counter--
  res.json({counter})
})

// Start the server
app.listen(4000, () => {
  console.log("Server is running on port 4000")
})