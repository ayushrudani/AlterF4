const express = require("express");
const cors = require("cors");
const connectDB = require("./db/DbConnections.js");
const stream = require("stream");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const model = "gemini-1.5-pro-latest";
const GENAI_DISCOVERY_URL = `https://generativelanguage.googleapis.com/$discovery/rest?version=v1beta&key=${process.env.GEMINI_KEY}`;

// Function to handle image and text generation
async function generateContentFromImage(prompt, imageBase64, fileType) {
  const genaiService = await google.discoverAPI({ url: GENAI_DISCOVERY_URL });
  const auth = new google.auth.GoogleAuth().fromAPIKey(process.env.GEMINI_KEY);

  let file_data;
  if (imageBase64) {
    const bufferStream = new stream.PassThrough();
    bufferStream.end(Buffer.from(imageBase64, "base64"));
    const media = {
      mimeType: fileType === "mp4" ? "video/mp4" : "image/png",
      body: bufferStream,
    };

    let body = { file: { displayName: "Uploaded File" } };
    const createFileResponse = await genaiService.media.upload({
      media: media,
      auth: auth,
      requestBody: body,
    });

    const file = createFileResponse.data.file;
    file_data = { file_uri: file.uri, mime_type: file.mimeType };
  }

  const contents = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }, file_data && { file_data }],
      },
    ],
    generation_config: {
      maxOutputTokens: 4096,
      temperature: 0.5, // Default temperature
      topP: 0.8,
    },
  };

  const generateContentResponse = await genaiService.models.generateContent({
    model: `models/${model}`,
    requestBody: contents,
    auth: auth,
  });

  return generateContentResponse?.data?.candidates?.[0]?.content?.parts?.[0]
    ?.text;
}

// Function to handle text-only generation
async function generateContentFromText(prompt, temperature) {
  const genaiService = await google.discoverAPI({ url: GENAI_DISCOVERY_URL });
  const auth = new google.auth.GoogleAuth().fromAPIKey(process.env.GEMINI_KEY);

  const contents = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generation_config: {
      maxOutputTokens: 4096,
      temperature: temperature || 0.5,
      topP: 0.8,
    },
  };

  const generateContentResponse = await genaiService.models.generateContent({
    model: `models/${model}`,
    requestBody: contents,
    auth: auth,
  });

  return generateContentResponse?.data?.candidates?.[0]?.content?.parts?.[0]
    ?.text;
}

app.post("/generate-content-from-image", async (req, res) => {
  try {
    const { prompt, imageBase64, fileType } = req.body;
    if (!prompt || !imageBase64) {
      return res.status(400).json({ error: "Prompt and image are required." });
    }

    const result = await generateContentFromImage(
      prompt,
      imageBase64,
      fileType
    );
    res.json({ result });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "An error occurred while generating content from image.",
      });
  }
});

app.post("/generate-content-from-text", async (req, res) => {
  try {
    const { prompt, temperature } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const result = await generateContentFromText(prompt, temperature);
    res.json({ result });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while generating content from text." });
  }
});

//connect to database
connectDB();

const PORT = 5447;

//Routes
const userRouter = require("./routes/UserRouter.js");
const postRouter = require("./routes/PostRouter.js");
const cropRouter = require("./routes/CropRouter.js");
const yojnaRouter = require("./routes/YojnaRouter.js");

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/crop", cropRouter);
app.use("/api/yojnas", yojnaRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
