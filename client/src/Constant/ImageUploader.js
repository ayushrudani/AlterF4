import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [capturing, setCapturing] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate(); // Use useNavigate to handle redirection

  // Function to start the camera
  const startCamera = async (e) => {
    e.preventDefault(); // Prevent the default behavior
    setCapturing(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  // Function to capture the image from the video stream
  const captureImage = (e) => {
    e.preventDefault(); // Prevent the default behavior
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL("image/png");
    setImage(imageData);
    setCapturing(false);
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop()); // Stop the camera

    // Redirect after capturing
    // navigate("/somewhere");
  };

  // Function to handle file upload
  const handleImageChange = (e) => {
    e.preventDefault(); // Prevent the default behavior
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));

      // Redirect after file selection
      //   navigate("/somewhere");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* File Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {/* Camera Capture */}
      <button
        onClick={startCamera}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Camera
      </button>

      {/* Video and Canvas Elements */}
      {capturing && (
        <div className="mb-4">
          <video ref={videoRef} className="w-full max-w-xs rounded-md" />
          <button
            onClick={captureImage}
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
          >
            Capture Image
          </button>
        </div>
      )}

      {/* Canvas for capturing the image */}
      <canvas
        ref={canvasRef}
        className="hidden"
        width="640"
        height="480"
      ></canvas>

      {/* Display the captured or uploaded image */}
      {image && (
        <img
          src={image}
          alt="Captured or Uploaded"
          className="w-full max-w-xs rounded-md"
        />
      )}
    </div>
  );
};

export default ImageUploader;
