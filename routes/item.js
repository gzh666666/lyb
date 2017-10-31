var express = require('express');
var router = express.Router();
var mysql= require('mysql'); //引用模块
var connection = mysql.createPool({//创建链接
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
    console.log(req.body)
    res.header('Access-Control-Allow-Origin','*');//跨域
    connection.query(`INSERT INTO baby.tianjia2(name) VALUES('${req.body.val}')`, function() {
        res.send("666");
    });
});

router.get('/data', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query('SELECT * FROM baby.tianjia2', function(err, rows, fields) {
        res.send(rows)
    })
});


router.post('/xinqiu', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var id=req.body.cc;
    console.log(id);
    connection.query('DELETE FROM baby.tianjia2 WHERE id='+id, function(err, rows, fields) {
        res.send(rows)
    })
});







module.exports = router;
