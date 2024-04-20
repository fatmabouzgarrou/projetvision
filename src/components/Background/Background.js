import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Background.css';

import 'swiper/css/autoplay';

import image1 from '../../assets/img1.png';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.png';
import image4 from '../../assets/img4.png';
import image5 from '../../assets/img5.jpeg';

import Swal from 'sweetalert2'

const images = [image1, image2, image3, image4, image5];

const handleClick = () =>{
  Swal.fire({
    background:"#0e0e1a",
    color:"white",
    title: "Are you sure?",
    text: "You want to predict this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#da7dac",
    cancelButtonColor: "#b78de2",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        background:"#0e0e1a",
        color:"white",
        title: "Okay!",
        text: "Progress...",
        icon: "success",
      });
    }
  });
}

const LeftSection = () => (
  <div className="left-section">
    <div>
      <h3>State of the Art Technology</h3>
      <p>Our image prediction service utilizes cutting-edge machine learning algorithms to analyze and predict the content of images with unparalleled accuracy.
      Powered by deep learning models, our system can identify objects, scenes, and even complex patterns in images, providing valuable insights and enhancing your understanding of visual data.
      </p>
    </div>
    <a href="#" className="btn" onClick={() => handleClick()}><span>Start Predict</span></a>
  </div>
);

const RightSection = () => (
  <div className="right-section">
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="img slide-img" src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);


const Background = () => (
  <div className="containerBack">
    <LeftSection />
    <RightSection />
  </div>
);

export default Background;
