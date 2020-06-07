const msql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3003,
    user: 'root',
    password: '',
    database: 'employment_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
});

// populateEmployee = () => {
//     console.log('Popu')
// }