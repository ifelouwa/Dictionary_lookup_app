# Dictionary Lookup App

*A reliable app to find common words meaning*

- - -

## Why is this so awesome?

- **Instant definitions**: Designed for speed, you get definitions to your words instantly.
- **Word Transcription**: See the phonetic transcription of your words to master pronunciation.
- **Offline mode**: Lookup word meanings without an internet connection.
- **Built with Express**: Fast and scalable backend powered by Node.js.

- - -

## Get started with Dictionary Lookup App

*Follow these steps to run the app locally on your device*:

1. **Prerequisites**
Make sure to have the following installed:
- Node.js
- Git
- A terminal or command prompt

2. **Clone the repository**
```
git clone https://github.com/yourusername/Dictionary_lookup_app.git

```

3. **Install Dependencies**
```
npm install

```
This will install all the required packages listed in the package.json

4. **Start the Server**
```
node server.js

```

The server will run at: http://localhost:4000

## API Endpoints
1. **Define a word**

Endpoint: GET /jsonRoute/define?word=**your-word**

Response Example:

{
  "success": true,
  "word": "example",
  "transcription": "ɪɡˈzɑːmpəl",
  "definition": "A representative form or pattern"
}

2. **Add a new word**

Endpoint: POST /jsonRoute/add

Request Body Example:

{
  "word": "example",
  "transcription": "ɪɡˈzɑːmpəl",
  "definition": "A representative form or pattern"
}

3. **Delete a word**

Endpoint: DELETE /jsonRoute/delete?word=**your-word**

Response Example:

{
  "success": true,
  "message": "Word 'example' deleted successfully."
}

- - -

## Project Structure

Dictionary_lookup_app/
├─ routes/
│  └─ jsonRoute.js
├─ Middleware/
│  └─ errorHandler.js
├─ dictionary.json
├─ app.js
├─ server.js
└─ package.json

- - -

## Testing

You can test all endpoints using Postman
 or any API client of your choice. Use the examples above to send requests.

- - -

## License

MIT License


