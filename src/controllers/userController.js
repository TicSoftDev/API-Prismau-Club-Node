const bcrypt = require('bcrypt');
const dbQueries = require("../db/mysql");

const tabla = "usuarios";

const createUser = async (req, res) => {
    try {
        req.body.Clave = await bcrypt.hash(req.body.Clave, 10);
        const items = await dbQueries.agregar(req.body, tabla);
        console.log(items);
        res.json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUsers = async (req, res) => {
    try {
        const items = await dbQueries.obtenerTodos(tabla);
        res.json(items);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { createUser, getUsers };
