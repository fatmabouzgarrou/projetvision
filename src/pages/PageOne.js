import Navbar from '../components/Navbar/Navbar'; 
import Background from '../components/Background/Background';
import Cards from '../components/Cards/Cards';
import './PageOne.css';
import Footer from '../components/Footer/Footer';
import fatma from '../assets/fatma.jpg';
import yosra from '../assets/yosra.jpg';


function PageOne() {
  return (
    <div className="page">
      <Navbar />
      <Background/>
      <div className="cards-container">
      
      <Cards profileImage={fatma} />
      <Cards profileImage={yosra} />
      <Cards profileImage={fatma} />
      <Cards profileImage={fatma} />
    </div>
      <Footer/> 
    </div>
  );
}

export default PageOne;