const bodyParser = require("body-parser");

function GetAllTask(app, database) {
    app.get("/get-task-management", (req, res) => {
        const sqlQuery = "SELECT * FROM TaskManagement ";
        database.query(sqlQuery, (err, result) => {
            if (err) {
                console.error(err);
                res.send("Command failed: " + sqlCommands);
            } else {
                console.log("\n");
                console.log("Task management database");
                console.log(result);
                res.json(result);
            }
        });
    });
}

function InsertData(app, database) {
    app.get("/insert-task-management", (req, res) => {});
    const userid = "NHD191AJ";
    const TaskName = "Physics";
    const TaskStatus = "Active";
    const CompleteTime = "none";

    const sqlQuery = `INSERT INTO TaskManagement (userid, TaskName, TaskStatus, CompleteTime) VALUES ("${userid}", "${TaskName}" , "${TaskStatus}", "${CompleteTime}")`;

    database.query(sqlQuery, (err, result) => {
        if (err) {
            console.error(err);
            res.send("Command failed: " + sqlCommands);
        } else {
            console.log("\n");
            console.log("Task management database");
            console.log(result);
        }
    });
}

module.exports = { GetAllTask, InsertData };
