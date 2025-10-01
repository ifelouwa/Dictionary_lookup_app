import dictionary from "./dictionary.json"

const handleLookUp = async (req,res) => {
    const word = req.query.word?.toLowerCase()
    if(!word){
        return res.status(400).json({
            message:"Please enter a word"
        })
 
    }

     const indictionary = await  dictionary[word]


     if(!indictionary){
        return res.status(401).json({
            Message:"Word Not Found in Dictionary"
        })
     }

     if(indictionary){
        return res.status(200).json({
            word, definition
        })
     }
    
}

const handleallWord = async (req, res) => {
   const allWord = await dictionary
  return res.status(200).json({
    message:"word list",
    allWord
  });
}

const handleAdd = async (req,res) => {
    const {word, definition} = req.body;
      if(!word || !definition){
        return res.status(400).json({
            message:"Please enter a Word and a Definition"
        })
      }

      const lowerWord = word.toLowerCase
      dictionary[lowerWord] = definition
      await fs.writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2));


    res.status(201).json({
        message:"word successfully added",
        word: lowerWord,
        definition: definition
    })
}

const handleDelete =async (req, res) => {
  const word = req.query.word?.toLowerCase();
  if (!word) return res.json({ message: "Please provide a word " });

    const removedWord = await delete dictionary[word]
  
fs.writeFileSync("dictionary.json", JSON.stringify(dictionary, null, 2));

   return res.status(200).json({ 
    message:  "deleted successfully.",
    removedWord });
  
} 

export default {handleLookUp, handleallWord, handleAdd, handleDelete}