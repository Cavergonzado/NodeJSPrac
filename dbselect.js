const pool = require("./db");

pool.query('SELECT * FROM public."Practice1"', (err,res) =>{
    try{
        console.log(res.rows);
    } catch(error){
        console.error(err.message);
    }
});

pool.end;