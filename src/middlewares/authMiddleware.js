const jwt = require('jsonwebtoken');
const config = require("../config/config");

const secretKey = config.jwt.secret_key;

function verificarToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secretKey, { maxAge: '1h' }, (error, decoded) => {
        if (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ error: 'Token expirado' });
            }
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.userId = decoded.usuario;
        next();
    });
}

module.exports = verificarToken;
