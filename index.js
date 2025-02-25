const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get("/", async (req, res) => {
    const page = await fs.readFile("index.html");
    res.status(req.query.status || 404).send(page.toString().replaceAll("{status}", req.query.status || 404));
})

app.listen(80);