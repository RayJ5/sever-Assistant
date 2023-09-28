const express = require("express");
const app = express();
const colog = require("colog");
const cors = require("cors");
const database = require("./mysql.config.js");

const { GetAllTask, InsertData } = require("./functions/TaskManagement");

app.use(cors());

database.connect((err) => {
    if (err) {
        throw err;
    }
    colog.log(colog.colorGreen("Connected to MySQL database"));
});

// Run "./public/index.html"
app.use(express.static("public"));
// Define a simple route
app.get("/", (req, res) => {
    res.send("Home server is running!");
});

GetAllTask(app, database);
// InsertData(app, database);

// Start the server
const port = 3300;
app.listen(port, () => {
    console.clear();
    console.log(`Server is running on: http://localhost:${port}`);
});
