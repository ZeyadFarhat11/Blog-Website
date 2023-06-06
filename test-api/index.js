const express = require("express");
const cors = require("cors");
const fs = require("node:fs");

const app = express();

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));

function setData(newDate) {
  fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(newDate), "utf-8");
}

app.use(cors());

app.get("/api/data", async (req, res) => {
  res.json(data);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
