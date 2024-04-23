import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { keyframes } from '@emotion/react';

import "./VisualizationSection.css"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

function VisualizationSection() {
  const [images, setImages] = useState({
    confusionMatrix: '',
    validation: '',
    loss: ''
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/models/')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of models
        const model = data[0]; // Assuming you want to use the first model's images
        setImages({
          confusionMatrix: model.confusion_matrix,
          validation: model.train_validation_acc,
          loss: model.train_validation_loss
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className='container-visualization'>
      <h2>Visualisation</h2>
      <div className='card-container'>
        <Card
          sx={{
              width: 400,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
              animation: `${fadeInUp} 0.5s ease forwards`,
              '&:hover': {
              transform: 'translateY(-5px)',
              },
          }}
        >
          <CardActionArea>
              <CardContent>
                  <Typography gutterBottom variant="h4" component="div" sx={{
                  fontSize: 24,
                  color: '#333333',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textAlign: 'center',
              }}>
                  Confusion matrix
                  </Typography>
              </CardContent>
              <CardMedia
              component="img"
              height="200"
              image={images.confusionMatrix}
              alt="Confusion Matrix"
              />
          </CardActionArea>
        </Card>
        <Card
          sx={{
              width: 400,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
              animation: `${fadeInUp} 0.5s ease forwards`,
              '&:hover': {
              transform: 'translateY(-5px)',
              },
          }}
        >
          <CardActionArea>
              <CardContent>
                  <Typography gutterBottom variant="h4" component="div" sx={{
                  fontSize: 24,
                  color: '#333333',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textAlign: 'center',
              }}>
                  Validation Accuracy
                  </Typography>
              </CardContent>
              <CardMedia
              component="img"
              height="200"
              image={images.validation}
              alt="Validation"
              />
          </CardActionArea>
        </Card>
        <Card
          sx={{
              width: 400,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              overflow: 'hidden',
              animation: `${fadeInUp} 0.5s ease forwards`,
              '&:hover': {
              transform: 'translateY(-5px)',
              },
          }}
        >
          <CardActionArea>
              <CardContent>
                  <Typography gutterBottom variant="h4" component="div" sx={{
                  fontSize: 24,
                  color: '#333333',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textAlign: 'center',
              }}>
                  Validation Loss
                  </Typography>
              </CardContent>
              <CardMedia
              component="img"
              height="200"
              image={images.loss}
              alt="Loss"
              />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default VisualizationSection;
