// const express = require('express');
// const database = require('./sqlConnections');
// const mongo = require('mongodb').MongoClient
// const assert = require('assert')
//
// const app = express();
// const port = 5000
// var url = 'http://mongodb://localhost:27017/rzn'
//
// app.get('/', (req, res) => {
//     res.send('<h1>My Site In Action!</h1>')
// });
//
//
// app.listen(port, () => {
//     console.log(`listening on port ${port}`)
// });
//
// app.post("/api/v1/user", (req, res) => {
//     var item = {
//         name: req.body.name,
//         phoneNumber: req.body.phoneNumber,
//     }
//
//     mongo.connect(url, function (err, db) {
//         assert.equal(null, err)
//         db.collection
//     })
//
//     console.log(item)
// });
//
// app.post("/api/v1/result", (req, res) => {
//     var item = {
//         res: req.body.result,
//     }
//
//     console.log(item)
// // Call Route Function Here...
// });
