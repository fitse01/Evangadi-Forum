const mysql = require('mysql2');
var dbConnection = mysql.createPool({

  host: "82.197.80.207",
  // port: "3306",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit:10
});



module.exports =dbConnection.promise()