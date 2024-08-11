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

        const response = await fetch(
          "http://localhost:5447/generate-content-from-image",
          {
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
          }
        );

        const data = await response.json();
        const formattedResponse = data.result
          .replaceAll("**", "")
          .replaceAll("*", "<br/>");
        data.result = data.result.replace(/\*\*"/g, "").replace(/\*/g, "<br/>");

        setResult(formattedResponse);
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
    <>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">Diseases Detection</h1>

        {/* Image Upload */}
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>

        {/* Result */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {result && (
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: result }}></p>
        )}
      </div>
    </>
  );
}

export default DiseasesDetection;
