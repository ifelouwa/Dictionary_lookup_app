import express from 'express';
import fs from 'fs';

const router = express.Router();
const filePath = "./dictionary.json";


// Loads the dictionary data afresh each time 
function loadDictionary() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
// Saves dictionary data
function saveDictionary(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Route for defining a word
router.get("/define", (req, res) => {
  try {
    const figure = req.query.word?.toLowerCase().trim(); // query param

    if (!figure) {
      return res.status(400).json({
        success: false,
        message: "Please give a valid word"
      });
    }

    const dictionary = loadDictionary();
    const entry = dictionary.find(item => item.word.toLowerCase() === figure);

    if (entry) {
      console.log("Status 200: successful word searching");
      return res.status(200).json({
        success: true,
        word: entry.word,
        transcription: entry.transcription,
        definition: entry.definition
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "This word does not exist in the dictionary"
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "The server crashed"
    });
  }
});

//Route for adding a new word
router.post("/add", (req, res) => {
  try {
    const { word, transcription, definition } = req.body;

    if (!word || !transcription || !definition) {
      return res.status(400).json({
        success: false,
        message: "Please provide the word, transcription, and definition",
      });
    }
    const wordRegex = /^[a-zA-Z-]+$/;
    if (!wordRegex.test(word)) {
      return res.status(400).json({
        success: false,
        message: "Word must only contain letters and hyphens",
      });
}

    const dictionary = loadDictionary();

    // check duplicates
    const exists = dictionary.find(
      (item) => item.word.toLowerCase() === word.toLowerCase()
    );
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Word already exists in dictionary",
      });
    }

    const newEntry = { 
      word: word.toLowerCase(),
      transcription,
      definition 
    };
    
    dictionary.push(newEntry);
    saveDictionary(dictionary);

    return res.status(201).json({
      success: true,
      message: "Word added successfully",
      entry: newEntry,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "The server crashed",
    });
  }
});


// Route for deleting a word
router.delete('/delete',(req, res) => {
    try {
        const word = req.query.word?.toLowerCase();
  if (!word){ 
    return res.status(400).json({ 
      success: false,
      message: "Please provide a word " 
    });
  }

  let dictionary = loadDictionary();
  const initialLength = dictionary.length;
  
  dictionary = dictionary.filter(item => item.word.toLowerCase() !== word);

  if (dictionary.length === initialLength) {
    return res.status(404).json({
      success: false,
      message: "Word not found in Dictionary",
    });
  }

  saveDictionary(dictionary);

   return res.status(200).json({ 
    success: true,
    message: `Word "${word}" deleted successfully.`
  });
} catch (error) {
        return res.status(500).json({
      success: false,
      message: "The server crashed",
    });
    }
});


export default router;
