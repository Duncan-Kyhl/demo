// Demo MySQL database connection (https://www.w3schools.com/nodejs/nodejs_mysql.asp)

// what is require
var mysql = require('mysql2');

// how does it know .createConnection?
// what other params can i give?
var conn = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "mydb" // included only after DB is created
});

// how does it know .connect?
// what is throw?
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// run with node demoConnection.js

// basic template
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});

// Create a database
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE DATABASE mydb"
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Database created!");;
    });
});

// Create a table 
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created!");;
    });
});

// change the sql to whatever you want

// Insert data into customers table
conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['John', 'Big Baller Ave 99'],
        ['Sally', 'Brandywine Rd 4'],
        ['Peter', 'Apple Orchard St 315'],
    ];
    conn.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);;
    });
});

/* When executing a query, a result object is returned, which can be indexed in the case of .affectedRows
{
    fieldCount: 0,
    affectedRows: 14,
    insertId: 0,
    serverStatus: 2,
    warningCount: 0,
    message: '\'Records:14  Duplicated: 0  Warnings: 0',
    protocol41: true,
    changedRows: 0
  }
*/