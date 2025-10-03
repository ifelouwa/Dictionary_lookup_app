import app from "./app.js";  // import app to our server

const PORT = 4000;

app.listen(PORT, (err) => {
  if (err) {
    console.error("Unable to start Server:", err);
    process.exit(1);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});

