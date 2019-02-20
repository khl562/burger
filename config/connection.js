var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1Cerritos',
    database: 'burger_db'
})

connection.connect(function(err) {
    if (err) {
        console.log(err.stack);
        return
    }
    console.log(connection.threadId)
});

module.exports = connection;