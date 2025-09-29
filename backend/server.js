import express from "express";
import app from "../app.js";  // import your app logic

const app = express();

app.listen(4000, () => {
  console.log(`✅ Server running on http://localhost:4000`);
});