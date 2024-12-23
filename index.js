
const express = require('express');
const app = express();
app.use(express.json());

const meetings = [];

app.get('/meetings', (req, res) => {
    res.json(meetings);
});

app.post('/meetings', (req, res) => {
    const meeting = { id: Date.now(), ...req.body };
    meetings.push(meeting);
    res.status(201).json(meeting);
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
