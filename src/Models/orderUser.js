const db = require('../Configs/dbMysql');

const selectQuery = "SELECT * FROM user_order";

const orderModel = {
    showOrder: () =>{
        return new Promise((resolve, reject) =>{
            const showQuery = selectQuery;
            db.query(showQuery, (err, data) =>{
                if(!err){
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    }, 
    insertOrder: (body) =>{
        const {id, name, orders, amount} = body;
        return new Promise((resolve, reject) =>{
            const insertQuery = 'INSERT INTO user_order SET id=?, date=?, name=?, orders=?, amount=?';
            db.query(insertQuery, [id, name, orders, amount], (err, data) =>{
                if(!err){
                    resolve(data)
                } else{
                    reject(err)
                }
            })
        })
    }
}

module.exports = orderModel;