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

app.listen(8080, "0.0.0.0");