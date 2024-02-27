require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    jwt: {
        secret_key: process.env.SECRET_KEY || 'ClaveSecreta!.'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'JuanFe.41120',
        database: process.env.MYSQL_DB || 'prismau_id',
    }
} 