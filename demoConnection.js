// Demo MySQL database connection (https://www.w3schools.com/nodejs/nodejs_mysql.asp)

// what is require
var mysql = require('mysql2');

// how does it know .createConnection?
// what other params can i give?
var conn = mysql.createConnection({
    host: "localhost",
    user: "duncan",
    password: "citsdygo"
});

// how does it know .connect?
// what is throw?
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// run with node demoConnection.js

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});