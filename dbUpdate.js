const pool = require("./db");

const sql = 'UPDATE public."Practice1" SET "todo_desc"= $1 WHERE "Todo_id" = 8 RETURNING *';
const data = ['Swimming'];

pool.query(sql, data, (err,res) =>{
    if(err){
        console.log(err.stack);
    } else{
        console.log(res.rows[0]);
    }
});

pool.end();