import express from "express";
import {MongoClient as mongo} from "mongodb";
import assert from "assert";

const router = express.Router()

const users = [
    {
        name: 'meshkat',
        phoneNumber: '09121234567',
    },
]

router.get('/', (req, resp) => {
    resp.send(users)
});

router.post('/', (req, resp) => {
    var item = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
    }

    mongo.connect(url, function (err, db) {
        assert.equal(null, err)
    })

    console.log(item)
});

export default router
