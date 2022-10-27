const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')

// Set API to test
app.get('/', (req, res) => {
    res.send('API Running');
});

// Set API for courses
app.get('/courses', (req, res) => {
    res.send(courses)
})

// Listen port
app.listen(port, () => {
    console.log('Server running on port', port);
})