import express from 'express';
import  dictionary from "../dictionary.json"
import fs from "fs"
import {handleLookUp, handleallWord,handleAdd,handleDelete} from "../Controllers"

const router = express.Router();

router.get('/lookup', (req,res) => {
    
})

router.post('/add', (req,res) => {
    const {word, definition} = req.body;
    res.json({
        word: word,
        definition: definition
    })
})


export default router;