const mysql = require('mysql')
const DATABASE_NAME = 'APIUSAGE_01';

const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : process.env.database || DATABASE_NAME 
});

con.connect(function(err){
    try{
        console.log('CONNECTION SUCCESSFULL')
    }catch(err){
        console.error('CONNECTION FAILED')
    }
});
    
module.exports = con;     
