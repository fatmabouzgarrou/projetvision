import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Background.css';
import 'swiper/css/autoplay';
import Swal from 'sweetalert2';
import image1 from '../../assets/img1.png';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.png';
import image4 from '../../assets/img4.png';
import image5 from '../../assets/img5.jpeg';

const images = [image1, image2, image3, image4, image5];

const Background = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleModalButtonClick = () => {
    if (!selectedOption) {
      Swal.fire({
        background:"#0e0e1a",
        color:"white",
        title: "Error",
        text: "Please select an option",
        icon: "error"
      });
    } else {
      setOpen(false);
      setDownloadOpen(true);
    }
  };

  const handleDownloadClose = () => {
    setDownloadOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDownload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('model_id', 1)
  
      try {
        const response = await fetch('http://127.0.0.1:8000/api/predict/', {
          method: 'POST',
          body: formData
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
  
        const predictionResult = await response.json();
        navigate('/pageTwo', { state: { selectedFile, predictionResult } });
      } catch (error) {
        console.error(error);
        Swal.fire({
          background: "#0e0e1a",
          color: "white",
          title: "Error",
          text: "Failed to fetch prediction result",
          icon: "error"
        });
      } finally {
        setDownloadOpen(false);
      }
    }
  };
  
  const LeftSection = () => (
    <div className="left-section">
      <div>
        <h3>State of the Art Technology</h3>
        <p>Our image prediction service utilizes cutting-edge machine learning algorithms to analyze and predict the content of images with unparalleled accuracy.
        Powered by deep learning models, our system can identify objects, scenes, and even complex patterns in images, providing valuable insights and enhancing your understanding of visual data.
        </p>
      </div>
      <a href="#" className="btn" onClick={handleClickOpen}><span>Start Predict</span></a>
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

  return (
    <div className="containerBack">
      <LeftSection />
      <RightSection />
      <Dialog open={open} onClose={handleClose} className='modal'>
        <DialogTitle>Select a prediction model</DialogTitle>
        <DialogContent>
          <RadioGroup
            aria-label="option"
            name="option"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <FormControlLabel value="CNN" control={<Radio />} label="CNN" />
            <FormControlLabel value="VGG16" control={<Radio />} label="VGG16" />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleModalButtonClick}>Confirm</Button>
        </DialogActions>
      </Dialog>

      {/* Modal pour télécharger l'image */}
      <Dialog open={downloadOpen} onClose={handleDownloadClose} className='modal'>
        <DialogTitle>Download Image</DialogTitle>
        <DialogContent>
          {/* Élément input de type file pour choisir un fichier à télécharger */}
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDownloadClose}>Cancel</Button>
          <Button onClick={handleDownload}>Download</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Background;
