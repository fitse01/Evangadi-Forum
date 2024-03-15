const mysql = require('mysql2');
var dbConnection = mysql.createPool({

  host: "localhost",
  // port: "3306",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit:10
});


// dbConnection.execute("select 'test'",(err,result)=> {
//   if (err) console.log(err.message);
//   else console.log(result);
// });

module.exports =dbConnection.promise()