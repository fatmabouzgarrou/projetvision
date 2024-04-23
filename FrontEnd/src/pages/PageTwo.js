import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PerformanceSection from '../components/PerformanceSection/PerformanceSection';
import VisualizationSection from '../components/VisualizationSection/VisualizationSection';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';


function PageTwo() {
  const location = useLocation();
  const { selectedFile, predictionResult } = location.state || {};

  return (
    <div>
      <Navbar />
      <PerformanceSection selectedFile={selectedFile} predictionResult={predictionResult} />
      <VisualizationSection />
      <Footer />
    </div>
  );
}

export default PageTwo;
