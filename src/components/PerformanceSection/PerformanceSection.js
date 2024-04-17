import React from 'react';
import "./PerformanceSection.css"
import cat from '../../assets/cat.webp';

function PerformanceSection() {
  return (
    <div className='container'>
        <div className="card">
            <img src={cat} />
        </div>
        <div className='text'>
            <h2>Classe Predit :</h2>
            <p>Cat</p>
            <h2>Top performance</h2>
            <h4>Accuracy</h4>
            <p>0.77</p>
            <h4>F1 Score</h4>
            <p>0.77</p>
        </div>
    </div>
  );
}
export default PerformanceSection;
