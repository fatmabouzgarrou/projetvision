import React from 'react';
import "./PerformanceSection.css"
import cat from '../../assets/img1.png';

function PerformanceSection() {
  return (
    <div className='container-performance'>
      <h1>Image classification results</h1>
      <div className='container-result'>
        <div className='image-container'>
          <h2>Classe Predit : Cat</h2>
          <img src={cat} />
        </div>
        <div className='text'>
            <h2>Performance of model CNN</h2>
            <div className='accuracy'>
              <h4>Accuracy</h4>
              <p>0.77</p>
              <h4>F1 Score</h4>
              <p>0.77</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default PerformanceSection;
