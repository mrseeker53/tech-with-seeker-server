// Add Express
const express = require('express')
// Initialize Express
const app = express();
// Add cors
const cors = require('cors');
// Add port
const port = process.env.PORT || 5000;

// Use cors to skip fetch error
app.use(cors());

// Add data from courses
const courses = require('./data/courses.json')

// Create GET request to test
app.get('/', (req, res) => {
    res.send('API Running');
});

// Create GET request to load courses data
app.get('/courses', (req, res) => {
    // Get courses data
    res.send(courses)
});

// Create GET request to load course data
app.get('/course/:id', (req, res) => {
    // Set course id
    const id = req.params.id;
    const course = courses.filter(n => n.id === id);
    // Get course data
    res.send(course);
})

// Initialize server
app.listen(port, () => {
    console.log('Server running on port', port);
})