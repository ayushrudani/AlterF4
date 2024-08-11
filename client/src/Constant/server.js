// server.js (Node.js backend example using Express)
import express from "express";
import { getTextGemini } from "./getTextGemini"; // Import the function from the file

const app = express();
app.use(express.json());

app.post("/api/generate-text", async (req, res) => {
  const { prompt, temperature, imageBase64 } = req.body;
  try {
    const responseText = await getTextGemini(prompt, temperature, imageBase64);
    res.status(200).json({ text: responseText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating text" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
