const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let initalPath = path.join(__dirname, "public");

const app = express();
app.use(bodyParser.json());
app.use(express.static(initalPath));

app.get('/:hero', (req, res) => {
    res.sendFile(path.join(initalPath, "page.html"));
})

app.use((req, res) => {
    res.json("404 file not found");
})

app.listen(3000, () => {
    console.log('listening on port 3000.....');
})