const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const path = require("path");

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { Pinecone } = require("@pinecone-database/pinecone");

const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require("cors");
const { error } = require("console");

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const modelGemini = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const model = "multilingual-e5-large";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("pdf"), (req, res) => {
  res.send(
    ` <h1>file uploaded Successfull</h1> <div> <a href="/input"> <butto  type="submit">Click to chat with your PDF</button></div>`
  );
});

const PDFPATH = path.join(__dirname, "/files/MintrixData.pdf");

async function pdftoText(PDFPATH) {
  const fileData = await pdfParse(PDFPATH);
  // console.log(fileData.text);

  // embedings

  const setup = async () => {
    try {
      const Data = fileData.text;

      const words = Data.split(/\s+/); 
      let chunkSize = 150;
      let chunks = [];

      for (let i = 0; i < words.length; i += chunkSize) {
        chunks.push(words.slice(i, i + chunkSize).join(' '));
      }
     






      // const chunkSize = 100;
      // const chunks = Data.match(new RegExp(`.{1,${chunkSize}}`, "g"));




      
      const embeddings = await pc.inference.embed(model, chunks, {
        inputType: "passage",
        truncate: "END",
      });

      const records = chunks.map((chunk, i) => ({
        id: `large-paragraph-${i}`, // Create unique IDs for each chunk
        values: embeddings[i].values,
        metadata: { text: chunk }, // Store the chunk text as metadata
      }));

      const index = pc.index("mnt");

      // Upsert records into the Pinecone index
      await index.namespace("mintrix").upsert(records);

      console.log("successfully stored");
    } catch (error) {
      console.error("Error upserting data into Pinecone:", error);
    }
  };

  // setup();
}

pdftoText(PDFPATH);

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
      [ queryText], // Correct input structure
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
      const prompt = `This is the data: ${combinedText}. Provide a refine and structured answer to this question under 100 words: "${queryText}"`;

      // Generate content using Gemini
      const Geminiresponse = await modelGemini.generateContent(prompt);
      const maindata= Geminiresponse.response.text();
      
      // Send the generated response
      console.log(maindata)
      
      
      
      res.send(maindata);
    } 
    
    
    else {
      // No matches found
      return res.send("<h1>No relevant data found.</h1>");
    }
  } catch (error) {
    console.error("Error during /chat request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});





// app.post("/chat", async (req, res) => {
//   const query = req.body.query;

//   if (!query) {
//     return res.status(400).json({ error: "Query is required" });
//   }

//   const response = await pc.inference.embed(model, [query], {
//     inputType: "passage",
//     truncate: "END",
//   });

//   const queryVector = response[0].values;
//   const index = pc.index("mintrix");

//   const vectorresponses = await index.namespace("mintrix").query({
//     topK:5,
//     vector: queryVector,
//     includeMetadata: true
//   });

//   const matches = vectorresponses.matches;

//   console.log(vectorresponses);

//   if(matches && matches.length >0){
//     const result = matches.map((match)=>match.metadata.text);

//     const prompt = `based on this data ${result} give proper formated ansewer of this question${query}`;

//     const Geminiresponse = await modelGemini.generateContent(prompt);
//     const maindata= res.json(Geminiresponse.response.text());

//     res.send(`your Answer: ${maindata}`);
//   }
// });












app.get("/", async (req, res) => {
  res.send(`
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="pdf" accept="application/pdf" required />
      <button type="submit">Upload PDF</button>
    </form>
  `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
