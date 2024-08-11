import React, { useState } from "react";

function CropRecommendation() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    potassium: "",
    phosphorous: "",
    rainfall: "",
    humidity: "",
    temperature: "",
    pH: "",
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
    prompt = `Recommend crop based on the following soil data:
    Nitrogen: ${formData.nitrogen}
    Potassium: ${formData.potassium}
    Phosphorous: ${formData.phosphorous}
    Rainfall: ${formData.rainfall}
    Humidity: ${formData.humidity}
    Temperature: ${formData.temperature}
    pH: ${formData.pH}`;
    prompt += "What crop should I grow?";

    // Call the API to get the crop recommendation
    try {
      const response = await fetch(
        "http://localhost:5447/generate-content-from-text",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
            temperature: 0.7, // You can adjust the temperature as needed
          }),
        }
      );

      const data = await response.json();
      const formattedResponse = data.result
        .replaceAll("**", "")
        .replaceAll("*", "<br/>");
      data.result = data.result.replace(/\*\*"/g, "").replace(/\*/g, "<br/>");

      setResult(formattedResponse);
    } catch (error) {
      setError("An error occurred while processing the image.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row gap-x-[50px]">
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Soil Data Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nitrogen"
              className="block text-sm font-medium text-gray-700"
            >
              Nitrogen
            </label>
            <input
              type="text"
              name="nitrogen"
              id="nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter nitrogen level"
            />
          </div>

          <div>
            <label
              htmlFor="potassium"
              className="block text-sm font-medium text-gray-700"
            >
              Potassium
            </label>
            <input
              type="text"
              name="potassium"
              id="potassium"
              value={formData.potassium}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter potassium level"
            />
          </div>

          <div>
            <label
              htmlFor="phosphorous"
              className="block text-sm font-medium text-gray-700"
            >
              Phosphorous
            </label>
            <input
              type="text"
              name="phosphorous"
              id="phosphorous"
              value={formData.phosphorous}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter phosphorous level"
            />
          </div>

          <div>
            <label
              htmlFor="rainfall"
              className="block text-sm font-medium text-gray-700"
            >
              Amount of Rainfall (mm)
            </label>
            <input
              type="text"
              name="rainfall"
              id="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter rainfall amount"
            />
          </div>

          <div>
            <label
              htmlFor="humidity"
              className="block text-sm font-medium text-gray-700"
            >
              Humidity (%)
            </label>
            <input
              type="text"
              name="humidity"
              id="humidity"
              value={formData.humidity}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter humidity level"
            />
          </div>

          <div>
            <label
              htmlFor="temperature"
              className="block text-sm font-medium text-gray-700"
            >
              Temperature (°C)
            </label>
            <input
              type="text"
              name="temperature"
              id="temperature"
              value={formData.temperature}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter temperature"
            />
          </div>

          <div>
            <label
              htmlFor="pH"
              className="block text-sm font-medium text-gray-700"
            >
              Soil pH
            </label>
            <input
              type="text"
              name="pH"
              id="pH"
              value={formData.pH}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter soil pH level"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Crop Recommendation
        </h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {result && (
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: result }}></p>
        )}
      </div>
    </div>
  );
}

export default CropRecommendation;
