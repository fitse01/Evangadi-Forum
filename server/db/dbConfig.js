const mysql = require('mysql2');
var dbConnection = mysql.createPool({

  host:process.env.HOST, 
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit:10
});



module.exports =dbConnection.promise()