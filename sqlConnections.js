// Importing MySQL module
const mysql = require("mysql");

// Creating connection
let db_con = mysql.createConnection({
    host: "127.0.0.1",
    port: 27017,
    user: "",
    password: "",
    database: "rzn_db"
});

// Connect to MySQL server
db_con.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
    console.log("jesus");
});

module.exports = db_con;
