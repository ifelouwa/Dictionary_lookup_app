import express from 'express';
import fs from 'fs';
import dictionary from '../dictionary.json' with {type : 'json'};

const router = express.Router();

router.get('/lookup/:word', (req,res) => {
    
})

router.post('/add', (req,res) => {
    const {word, definition} = req.body;
    res.status(201).json({
        word: word,
        definition: definition
    })
})


export default router;