const express = require("express");
const cors = require('cors');
const { responseFromGPT } = require("./functions/ai_form");
const path = require('path');
const pdfPoppler = require('pdf-poppler');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, 'f1040.pdf'); 
const outputDir = path.join(__dirname, './images');

app.post("/", async(req, res) => {

    const {prompt} = req.body;

    data = await responseFromGPT(prompt);
    
    res.send({
        message: data
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
