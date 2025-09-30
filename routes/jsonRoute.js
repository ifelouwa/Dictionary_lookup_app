import express from 'express';

const router = express.Router();

router.get('/lookup', (req,res) => {

})

router.post('/add', (req,res) => {
    const {word, definition} = req.body;
    res.status(201).json({
        word: word,
        definition: definition
    })
})


export default router;