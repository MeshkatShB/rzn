import express from "express";
import {MongoClient as mongo} from "mongodb";
import assert from "assert";

const router = express.Router()

router.get('/', (req, resp) => {
    resp.send('hello from /results')
})

router.post('/', (req, resp) => {
    var item = {
        res: req.body.result,
    }

    mongo.connect(url, function (err, db) {
        assert.equal(null, err)
    })

    console.log(item)

})

export default router