const dotenv = require('dotenv');
dotenv.config();

const {Pool} = require('pg')

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database:process.env.DB_DATABASENAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
})

