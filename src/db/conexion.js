const mysql = require('mysql');
const config = require('../config/config')

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

const connection = mysql.createConnection(dbconfig);

connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
      }
      console.log('Conexión a la base de datos establecida');
});

module.exports = connection;