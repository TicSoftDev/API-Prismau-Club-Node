const connection = require('./conexion');

const dbQueries = {
    agregar: async function (data, tabla) {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO ${tabla} SET ?`, data, (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });
    },

    obtenerTodos: async function (tabla) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${tabla}`, (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });
    },
    obtenerUno: async function (campo, valor, tabla) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${tabla} WHERE ${campo} = ?`, [valor], (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });
    },

};

module.exports = dbQueries;
