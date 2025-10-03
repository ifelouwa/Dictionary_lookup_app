import express from 'express';
import fs from 'fs';

const router = express.Router();

// Load dictionary data
const dictionary = JSON.parse(fs.readFileSync("./dictionary.json", "utf-8"));

// Route for defining a word
router.get("/define", (req, res) => {
  try {
    const figure = req.query.word?.toLowerCase(); // query param

    if (!figure) {
      return res.status(500).json({
        success: false,
        message: "Please give a valid word"
      });
    }

    const entry = dictionary.find(item => item.word.toLowerCase() === figure);

    if (entry) {
      console.log("Status 200: successful word searching");
      return res.status(200).json({
        success: true,
        word: entry.word,
        definition: entry.definition
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "This word does not exist in the dictionary"
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "The server crashed"
    });
  }
});

//Route for adding a new word
router.post("/add", (req, res) => {
  try {
    const { word, definition } = req.body;

    if (!word || !definition) {
      return res.status(500).json({
        success: false,
        message: "Please provide both a word and a definition",
      });
    }

    let data = JSON.parse(fs.readFileSync(dictionary, "utf-8"));

    // check duplicates
    const exists = data.find(
      (item) => item.word.toLowerCase() === word.toLowerCase()
    );
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Word already exists in dictionary",
      });
    }

    const newEntry = { word, definition };
    data.push(newEntry);

    fs.writeFileSync(dictionary, JSON.stringify(data, null, 2));

    return res.status(201).json({
      success: true,
      message: "Word added successfully",
      entry: newEntry,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "The server crashed",
    });
  }
});



router.delete('/delete',(req, res) => {
    try {
        const word = req.query.word?.toLowerCase();
  if (!word){ return res.json(400)({ message: "Please provide a word " })};

    const removedWord = delete dictionary[word]
  
fs.writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2));

   return res.status(200).json({ 
    message:  "deleted successfully.",
    removedWord })
    } catch (error) {
        return res.status(400).json({
      success: false,
      message: "The server crashed",
    });
    }
  
});


export default router;
