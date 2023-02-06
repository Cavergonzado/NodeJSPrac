const pool = require("./db");

const sql = 'DELETE FROM public."Practice1" WHERE "Todo_id" = $1 RETURNING *';
const data = [8];

pool.query(sql, data, (err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});

pool.end();