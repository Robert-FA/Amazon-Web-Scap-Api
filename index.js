const { application } = require('express');
const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = '440b02c47a97a00a8a58cf53d48c23e0';
const baseUrl = 'http://api.scraperapi.com';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper application.');
});

app.listen(PORT, () =>console.log('Server run on port ${PORT}'));