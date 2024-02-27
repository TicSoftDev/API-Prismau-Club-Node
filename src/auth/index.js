const jwt = require("jsonwebtoken");
const config = require("../config/config");

const secretKey = config.jwt.secret_key;
const tokenExpiration = {
    expiresIn: '1h'
}

const generarToken = ({ usuario }) => {
    return jwt.sign({ usuario: usuario }, secretKey, tokenExpiration);
}


module.exports = { generarToken }