const express = require('express');
const app = express();
const path = require('path');

// Uncomment the following line to use the database
// const dbOperations = require('./dbOperations');

const PORT = 5000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/validHtml', (req, res) => {
    res.status(200).send('<h1>This is a valid HTML reply.<br> <span style="color: green; font-size: 14px;"> Status code: 200</h1>');
});

app.get('/invalidClientHtml', (req, res) => {
    res.status(400).send('<h1>Invalid Client HTML reply.<br> <span style="color: red; font-size: 14px;"> Status code: 400</h1>');
});

app.get('/invalidServerHtml', (req, res) => {
    res.status(500).send('<h1>Invalid Server HTML reply. <br> <span style="color: red; font-size: 14px;"> Status code: 500</h1>');
});

app.get('/validJson', (req, res) => {
    res.status(200).json({ message: 'This is a valid JSON reply.' });
});

app.get('/invalidJson', (req, res) => {
    res.status(500).send('Invalid JSON reply.<br> <span style="color: red; font-size: 14px;"> Status code: 500');
});

app.post('/insertData', (req, res) => {
    const data = {
        name: 'John',
        age: 30
    };
    dbOperations.insertData(data, (error, result) => {
        if (error) {
            res.status(500).send('Error inserting data');
        } else {
            res.status(200).send('Data inserted successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
