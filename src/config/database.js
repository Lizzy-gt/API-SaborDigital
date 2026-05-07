const { Connection } = require("mysql2");

const pool = mysql.creatPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    ConnectionLimit: 10,
    queueLimit: 0
})