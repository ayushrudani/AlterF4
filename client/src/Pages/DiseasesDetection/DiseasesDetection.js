import React, { useState } from "react";

function DiseasesDetection() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload an image.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageBase64 = reader.result.split(",")[1]; // Remove the prefix of the base64 string

        const response = await fetch("http://localhost:5447/generate-content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: "Find the disease in the image",
            temperature: 0.7, // You can adjust the temperature as needed
            imageBase64: imageBase64,
            fileType: file.type.split("/")[1], // e.g., 'png' or 'jpeg'
          }),
        });

        const data = await response.json();
        setResult(data.result);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      setError("An error occurred while processing the image.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="diseases-detection-container">
      <h1>Disease Detection for Crops</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />
        <br />
        <button type="submit" className="submit-button">
          {loading ? "Processing..." : "Identify Disease"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {result && (
        <div className="result-container">
          <h2>Detected Disease:</h2>
          <pre className="result-text">{result}</pre>
        </div>
      )}
    </div>
  );
}

export default DiseasesDetection;
