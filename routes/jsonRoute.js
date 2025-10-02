import express from 'express';
import  dictionary from "../dictionary.json"
import fs from "fs"
import {handleLookUp, handleallWord,handleAdd,handleDelete} from "../Controllers"

const router = express.Router();

router.get('/lookup', (req,res) => {
    
   const allWord = dictionary

  return res.status(200).json({
    message:"word list",
    allWord
  })
})

router.post('/add', (req,res) => {
    
 const {word, definition} = req.body;
      if(!word || !definition){
        return res.status(400).json({
            message:"Please enter a Word and a Definition"
        })
      }

      const lowerWord = word.toLowerCase
      dictionary[lowerWord] = definition
       fs.writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2));


    res.status(201).json({
        message:"word successfully added",
        word: lowerWord,
        definition: definition
    })
})

router.delete('/delete',(req, res) => {
  const word = req.query.word?.toLowerCase();
  if (!word) return res.json({ message: "Please provide a word " });

    const removedWord = delete dictionary[word]
  
fs.writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2));

   return res.status(200).json({ 
    message:  "deleted successfully.",
    removedWord });
  
} )


export default router;