const mysql = require('mysql2');
var dbConnection = mysql.createPool({

  host: "localhost",
  port: "3306",
  user: "evangadi-admin",
  password: "123456",
  database: "evangadi-db",
  connectionLimit:10
});

// dbConnection.execute("select 'test'",(err,result)=> {
//   if (err) console.log(err.message);
//   else console.log(result);
// });

module.exports =dbConnection.promise()