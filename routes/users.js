var express = require('express');
var router = express.Router();
const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "memos",
  port: "5432"
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  //res.send(req.body);
  pool.query(`insert into users(username, password) values ('${req.body.username}', '${req.body.password}')`, (err, resp) => {
    // check if the response is not 'undefined'
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({ err: err });
    }
    res.statusCode = 200;
    res.send({status:'Success'});

  });
});

module.exports = router;
