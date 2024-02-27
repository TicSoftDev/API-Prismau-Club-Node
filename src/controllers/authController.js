const bcrypt = require('bcrypt');
const dbQueries = require("../db/mysql");
const { generarToken } = require('../auth');

const tabla = "usuarios";
const campo = "Usuario";

const login = async (req, res) => {
    try {
        const user = await dbQueries.obtenerUno(campo, req.body.Usuario, tabla);
        if (user.length > 0) {
            const contraseñaValida = await bcrypt.compare(req.body.Clave, user[0].Clave);
            if (contraseñaValida) {
                const token = generarToken(user[0]);
                res.json({
                    token: token,
                    user: user[0]
                });
            } else {
                res.json({ token: 1 });
            }
        }
        else {
            res.json({ token: 0 })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { login };