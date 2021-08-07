"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');
exports.pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASENAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
//# sourceMappingURL=db.js.map