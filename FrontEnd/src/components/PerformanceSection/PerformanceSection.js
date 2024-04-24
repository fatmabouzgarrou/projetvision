import React, { useState, useEffect } from 'react';
import "./PerformanceSection.css"

function PerformanceSection({ selectedFile, predictionResult }) {
  const [accuracy, setAccuracy] = useState(null);
  const [f1Score, setF1Score] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/models/');
        if (!response.ok) {
          throw new Error('Failed to fetch models');
        }
        const data = await response.json();
        // Suppose data is an array of models
        // Assuming you want to display the accuracy and f1_score of the first model in the array
        if (data.length > 0) {
          setAccuracy(data[0].accuracy);
          setF1Score(data[0].f1_score);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchModels();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='container-performance'>
      <h1>Image classification results</h1>
      <div className='container-result'>
        <div className='image-container'>
          <h2>Classe Predit : {predictionResult?.predicted_class || 'N/A'} with {predictionResult?.confidence || 'N/A'} accuracy </h2>
          <img src={selectedFile ? URL.createObjectURL(selectedFile) : ''} alt="" />
        </div>
        <div className='text'>
            <h2>Performance of model CNN </h2>
            <div className='accuracy'>
              <h4>Accuracy</h4>
              <p>{accuracy || 'Loading...'}</p>
              <h4>F1 Score</h4>
              <p>{f1Score || 'Loading...'}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection;
