const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.post('/', async (req, res) => {
    const apiKey = req.headers['key-api'];
    if (!apiKey) {
        return res.status(403).json({ error: "x-api-key header missing" });
    }

    const validApiKey = 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf';
    if (apiKey !== validApiKey) {
        return res.status(403).json({ error: 'invalid api key' });
    }

    try{
        return res.status(201).json({ message: 'teste' });
    } catch(error){
        return res.status(403).json({ error: error });
    }
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://root:root@db-express.4fwcimy.mongodb.net/?retryWrites=true&w=majority&appName=DB-Express'
    );
    return client.db('ramenGo').collection('orders')
}

module.exports = router;