// DiseasesDetection.js (React component)
import React, { useState } from "react";

function DiseasesDetection() {
  const [prompt, setPrompt] = useState("");
  const [temperature, setTemperature] = useState(0.5);
  const [imageBase64, setImageBase64] = useState();
  const [generatedText, setGeneratedText] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/generate-text", {
        method: "POST",
        headers: {
          "Content-Type": "DiseasesDetectionlication/json",
        },
        body: JSON.stringify({ prompt, temperature, imageBase64 }),
      });
      const data = await response.json();
      setGeneratedText(data.text);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Text Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
        className="w-full h-40"
      />
      <br />
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(parseFloat(e.target.value))}
        placeholder="Temperature"
        className="w-20"
      />
      <br />
      <input
        type="file"
        accept="image/*"
        value={imageBase64}
        onChange={(e) => {
          const reader = new FileReader();
          reader.onload = (e) => setImageBase64(e.target.result);
          reader.readAsDataURL(e.target.files[0]);
        }}
        placeholder="Image Base64 (optional)"
        className="w-full"
      />
      <br />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Generate Text
      </button>
      <div>
        <h2>Generated Text:</h2>
        <p>{generatedText}</p>
      </div>
    </div>
  );
}

export default DiseasesDetection;
