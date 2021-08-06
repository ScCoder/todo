"use strict";
exports.__esModule = true;
exports.pool = void 0;
var dotenv = require('dotenv');
dotenv.config();
var Pool = require('pg').Pool;
exports.pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASENAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
