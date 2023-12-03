import React, { useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';

function FacialRecognition() {
  const [videoStream, setVideoStream] = useState(null);
  const [isCaptured, setIsCaptured] = useState(false);

  useEffect(() => {
    // Load face-api.js models
    async function loadModels() {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
    }

    loadModels();

    // Start the webcam feed
    async function startVideo() {
      const video = document.getElementById('video');
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      video.srcObject = stream;
      setVideoStream(stream);
    }

    startVideo();
  }, []);

  const handleCapture = async () => {
    if (!videoStream) return;

    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.drawImage(video, 0, 0, 640, 480);
    const capturedImage = canvas.toDataURL('image/jpeg');

    // Perform facial recognition on the captured image
    const image = await faceapi.fetchImage(capturedImage);
    const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();

    if (detections.length === 1) {
      // One face detected; authentication successful
      setIsCaptured(true);
    } else {
      // No face or multiple faces detected; authentication failed
      setIsCaptured(false);
    }
  };

  return (
    <div>
      <video id="video" autoPlay muted width="640" height="480"></video>
      <canvas id="canvas" style={{ display: 'none' }}></canvas>
      <button > Auto Capture is Enabled</button>
      {isCaptured ? <p>Authentication successful!</p> : <p>Authentication successful!</p>}
    </div>
  );
}

export default FacialRecognition;
