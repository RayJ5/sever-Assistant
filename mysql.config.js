const mysql = require("mysql");

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "assistant_server",
    port: 3307,
});

module.exports = database;
