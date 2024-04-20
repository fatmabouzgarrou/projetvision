import Navbar from '../components/Navbar/Navbar'; 
import Background from '../components/Background/Background';
import Cards from '../components/Cards/Cards';
import './PageOne.css';

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
    </div>
  );
}

export default PageOne;
