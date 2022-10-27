const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// Use cors to skip fetch error
app.use(cors());

const courses = require('./data/courses.json')

// Set API to test
app.get('/', (req, res) => {
    res.send('API Running');
});

// Set API for courses
app.get('/courses', (req, res) => {
    // Get courses data
    res.send(courses)
});

// Set API for course
app.get('/course/:id', (req, res) => {
    // Set course id
    const id = req.params.id;
    const course = courses.filter(n => n.id === id);
    // Get course data
    res.send(course);
})

// Listen port
app.listen(port, () => {
    console.log('Server running on port', port);
})