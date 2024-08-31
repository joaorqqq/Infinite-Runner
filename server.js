const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'data.json'));
});

app.get('/levels.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'levels.json'));
});

app.get('/settings.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'settings.json'));
});

app.get('/characters.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'characters.json'));
});

app.get('/items.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'items.json'));
});

app.get('/quests.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'quests.json'));
});

app.get('/achievements.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'achievements.json'));
});

app.get('/enemies.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'enemies.json'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
