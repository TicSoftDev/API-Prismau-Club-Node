const express = require("express");
const cors = require('cors');
const config = require("./config/config");
const apiRouter = require("./server");

const app = express();

app.use(express.json());
app.use(cors());

app.use(cors({
    origin: '*',  
}));

apiRouter(app);
app.set("port", config.app.port);

app.get("/", (req, res) => {
    res.send("Welcome");
});

module.exports = app;
