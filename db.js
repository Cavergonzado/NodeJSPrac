const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "621501831",
    host: "localhost",
    prot: 5432,
    database:"pract_1"
});

module.exports = pool;