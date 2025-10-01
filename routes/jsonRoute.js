import express from 'express';
import  dictionary from "../dictionary.json"
import fs from "fs"
import {handleLookUp, handleallWord,handleAdd,handleDelete} from "../Controllers"

const router = express.Router();

router.get('/lookup', handleLookUp)


router.get("/all", handleallWord)

router.post('/add', handleAdd)

router.delete("/delete", handleDelete);



export default router;