'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        res.send("Hello from my node app!");
    }
    catch (error) {
        res.send('error' + error);
    };
});

app.post('/', async (req, res) => {
    try {
        const message = req.body.message;
        res.send(`We got ${message}`);
    }
    catch (error) {
        res.send('error' + error);
    };
});

app.put('/', async (req, res) => {
    try {
        const value = req.body.value;
        res.send(`New value: ${value}`);
    }
    catch (error) {
        res.send('error' + error);
    };
});

app.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.send(`Delete position: ${id}`);
    }
    catch (error) {
        res.send('error' + error);
    };
});

app.listen(8080);


module.exports = app;
