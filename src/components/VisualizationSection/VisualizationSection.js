import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { keyframes } from '@emotion/react';

import "./VisualizationSection.css"

import cat from '../../assets/cat1.jpg'

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
  return (
    <div className='container-visualization'>
      <h2>Visualisation</h2>
      <div className='card-container'>
      <Card
            sx={{
                width: 400,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden', // Hide any overflowing content
                animation: `${fadeInUp} 0.5s ease forwards`, // Apply animation
                '&:hover': {
                transform: 'translateY(-5px)', // Add a hover effect
                },
            }}
            >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{
                    fontSize: 24, // Set the font size
                    color: '#333333', // Set the text color
                    fontWeight: 'bold', // Make the text bold
                    marginBottom: '10px', // Add space below the text
                    textAlign: 'center', // Center the text
                }}>
                    Confission matrix
                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="200"
                image={cat}
                alt="green iguana"
                />
            </CardActionArea>
        </Card>
        <Card
            sx={{
                width: 400,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden', // Hide any overflowing content
                animation: `${fadeInUp} 0.5s ease forwards`, // Apply animation
                '&:hover': {
                transform: 'translateY(-5px)', // Add a hover effect
                },
            }}
            >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{
                        fontSize: 24, // Set the font size
                        color: '#333333', // Set the text color
                        fontWeight: 'bold', // Make the text bold
                        marginBottom: '10px', // Add space below the text
                        textAlign: 'center', // Center the text
                    }}>
                    Validation
                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="200"
                image={cat}
                alt="green iguana"
                />
            </CardActionArea>
        </Card>
        <Card
            sx={{
                width: 400,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden', // Hide any overflowing content
                animation: `${fadeInUp} 0.5s ease forwards`, // Apply animation
                '&:hover': {
                transform: 'translateY(-5px)', // Add a hover effect
                },
            }}
            >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{
                        fontSize: 24, // Set the font size
                        color: '#333333', // Set the text color
                        fontWeight: 'bold', // Make the text bold
                        marginBottom: '10px', // Add space below the text
                        textAlign: 'center', // Center the text
                    }}>
                    Loss
                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="200"
                image={cat}
                alt="green iguana"
                />
            </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
export default VisualizationSection;
