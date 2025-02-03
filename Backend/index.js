const express = require("express");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { Pinecone } = require("@pinecone-database/pinecone");

const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const modelGemini = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const model = "multilingual-e5-large";

app.get("/input", async (req, res) => {
  res.send(`
    <form action="/chat" method="POST">
      <input type="text" name="query" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/chat", async (req, res) => {
  const queryText = req.body.query; // Use req.query for GET requests

  if (!queryText) {
    return res.status(400).json({ error: "Query text is required" });
  }

  try {
    // Generate embeddings for the query
    const queryEmbeddings = await pc.inference.embed(
      model,
      [queryText], // Correct input structure
      {
        inputType: "passage",
        truncate: "END",
      }
    );

    const queryVector = queryEmbeddings[0].values;

    // Query the Pinecone index
    const index = pc.index("mintrix");
    const response = await index.namespace("example-namespace").query({
      topK: 3,
      vector: queryVector,
      includeMetadata: true,
    });

    const matches = response.matches;

    if (matches && matches.length > 0) {
      // Extract matched data
      const result = matches.map((match) => match.metadata.text);

      let combinedText = result.join(" "); // "Hello world this is JavaScript"

      // Create a prompt for Gemini
      const prompt = `
    You are an Mintrix AI assistant. Structure the information properly based on the query give [ answer between 30 words to 120 words according to query].

    Query: ${queryText}
    
    Raw Data: ${combinedText}

    Format the response in a structured way with headings, bullet points, and clear sections if need then use emoji.
  `;

      // Generate content using Gemini
      const Geminiresponse = await modelGemini.generateContent(prompt);
      const maindata = Geminiresponse.response.text();

      // Send the generated response
      console.log(maindata);

      res.send(maindata);
    } else {
      // No matches found
      return res.send("<h1>No relevant data found.</h1>");
    }
  } catch (error) {
    console.error("Error during /chat request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", async (req, res) => {
  res.send(`
    <form action="/input">
      <button type="submit">Chat with mintrix</button>
    </form>
  `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
