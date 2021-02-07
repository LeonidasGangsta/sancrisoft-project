'use strict'

const mysql = require('mysql')
var express = require('express');
var router = express.Router();
module.exports = router

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MySql304!',
    database: 'sancrisoftdatabase',
})

router.post('/order', (req, res) => {
    let {clientName, clientID, clientAddress, clientPhone, clientEmail, total} = req.body

    const sqlInsert = "INSERT INTO orders_fulfilled (client_name, client_ID, client_address, client_phone, client_email, order_total) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [clientName, clientID, clientAddress, clientPhone, clientEmail, total], (error, resolve) => {
    })
})

router.get('/products', (req, res) => {
    const sqlSelect = "SELECT * FROM products_list";
    db.query(sqlSelect, (error, result) => {
        res.send(result)
    })
})