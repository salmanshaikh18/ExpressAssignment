// Q.1 Build a Server Using Http Module NodejS with api endpoints for Getting Products Data
// -> ‘/’ -> send msg as “Welcome to Men & Women Dummy Data"
// -> ‘/men’ -> send 10 products data of menF
// -> ‘/women’ -> send 10 products data of women
// -> ‘/other’ -> send response as page not found
// Hint: You can use any data, send data in json format

const http = require('http')

// Sample products data
const menProducts = [
    { id: 1, name: "Men Product 1"},
    { id: 2, name: "Men Product 2"},
    { id: 3, name: "Men Product 3"},
    { id: 4, name: "Men Product 4"},
    { id: 5, name: "Men Product 5"},
    { id: 6, name: "Men Product 6"},
    { id: 7, name: "Men Product 7"},
    { id: 8, name: "Men Product 8"},
    { id: 9, name: "Men Product 9"},
    { id: 1, name: "Men Product 1"}
]

const womenProducts = [
    {id: 1, name: "Women Product 1"},
    {id: 2, name: "Women Product 2"},
    {id: 3, name: "Women Product 3"},
    {id: 4, name: "Women Product 4"},
    {id: 5, name: "Women Product 5"},
    {id: 6, name: "Women Product 6"},
    {id: 7, name: "Women Product 7"},
    {id: 8, name: "Women Product 8"},
    {id: 9, name: "Women Product 9"},
    {id: 10, name: "Women Product 10"},
]

// Create a server
const server = http.createServer((req,res) => {
    // Set content type to JSON
    res.setHeader('Content-Type', 'application/json')

    // Handle different API endpoints
    if (req.url === '/') {
        // send welcome message
        res.end(JSON.stringify({message: "Welcome to Men & Women Dummy Data"}))
    } else if (req.url === '/women') {
        // send women products data
        res.end(JSON.stringify(womenProducts))
    } else if (req.url === '/men') {
        // send men products data
        res.end(JSON.stringify(menProducts))
    } else {
        // Handle other endpoints
        res.statusCode = 404;
        res.end(JSON.stringify({error: 'Page not found'}))
    }
})

// start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000")
})