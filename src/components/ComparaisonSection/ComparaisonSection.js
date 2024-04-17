import React from 'react';
import "./ComparaisonSection.css"
import cat from '../../assets/cat.webp';

function ComparaisonSection() {
  return (
    <div className='container'>
        <div>
            <h2>Top performance</h2>
            <div className="unique-card">
                <div className="background-overlay"></div>
                <div className="card-content">
                    <div className="card-title">Accuracy</div>
                    <div className="card-description">0.99</div>
                    <div className="card-title">F1 Score</div>
                    <div className="card-description">0.77</div>
                </div>
            </div>
        </div>
        <div>
            <h2>Top performance</h2>
            <div className="unique-card">
                <div className="background-overlay"></div>
                <div className="card-content">
                    <div className="card-title">Accuracy</div>
                    <div className="card-description">0.99</div>
                    <div className="card-title">F1 Score</div>
                    <div className="card-description">0.77</div>
                </div>
            </div>
        </div>
        
    </div>
  );
}
export default ComparaisonSection;
