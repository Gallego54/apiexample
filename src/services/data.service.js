const con = require ('./db.service.js')
const dataService = {};

dataService.getData = ()=>{
    return new Promise ((resolve, reject) => {
        const query = 'SELECT * FROM dataexample';
        con.query(query, (err, res) => {
            if (err) {
                reject (err);
            } else {
                resolve (res);
            }
        });
    })
}

dataService.createData = ( dataInfo ) =>{
    return new Promise ((resolve, reject) => {
        const query = 'INSERT INTO dataexample (data) VALUES ( ? )';
        const { data } = dataInfo;

        con.query(query, [data], (err, res) => {
            if (err) {
                reject (err);
            } else {
                resolve (res);
            }
        });
    })
}

dataService.getDataById = ( id ) =>{
    return new Promise ((resolve, reject) => {
        const query = 'SELECT * FROM dataexample WHERE ID = ?';
        con.query(query, [id], (err, res) => {
            if (err) {
                reject (err);
            } else {
                resolve (res);
            }
        });
    })
}

dataService.updateData = ( id, dataInfo ) =>{
    return new Promise ((resolve, reject) => {
        const query = 'UPDATE dataexample SET data = ? WHERE ID = ?';
        const { data } = dataInfo;

        con.query(query, [data, id], (err, res) => {
            if (err) {
                reject (err);
            } else {
                resolve (res);
            }
        });
    })
}

dataService.deleteData = ( id ) =>{
    return new Promise ((resolve, reject) => {
        const query = 'DELETE FROM dataexample WHERE ID = ?';
        con.query(query, [id], (err, res) => {
            if (err) {
                reject (err);
            } else {
                resolve (res);
            }
        });
    })
}



module.exports = dataService;

 
