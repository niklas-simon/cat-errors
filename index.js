const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get("/", async (req, res) => {
    if (!req.query.status) {
        res.status(400).send();
        return;
    }

    const page = await fs.readFile("index.html");
    res.send(page.toString().replaceAll("{status}", req.query.status));
})

app.listen(80);