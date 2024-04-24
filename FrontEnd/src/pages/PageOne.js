import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Background from '../components/Background/Background';
import Cards from '../components/Cards/Cards';
import './PageOne.css';
import Footer from '../components/Footer/Footer';
import fatma from '../assets/fatma.jpg';
import yosra from '../assets/yosra.jpg';
import mariem from '../assets/mariem.jpg';
import asma from '../assets/asma.jpg';




function PageOne() {
  return (
    <div className="page">
      <Navbar />
      <Background/>
      <div className="cards-container">
        <Cards />
        <Cards />
        <Cards />
        <Cards />

      </div>
      <Footer/> 
    </div>
  );
}

export default PageOne;