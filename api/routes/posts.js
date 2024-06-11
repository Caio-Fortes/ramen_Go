const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://root:root@db-express.4fwcimy.mongodb.net/?retryWrites=true&w=majority&appName=DB-Express'
    );
    return client.db('ramenGo').collection('Broths')
}

module.exports = router;