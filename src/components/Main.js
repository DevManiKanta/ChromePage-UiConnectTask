
import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Paper } from '@mui/material';
import {GNew, GooglePic, topTab, Optimize, Automatic } from '../utils/Images';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MyCarousel = () => {
  const [scale, setScale] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const[pic,SetPic]=useState(true)
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 10000;
      setScale(newScale);
      SetPic(false)
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % imagesData.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + imagesData.length) % imagesData.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollAmount = carousel.clientWidth * index;
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const imagesData = [
    { id: 1, img: pic?GooglePic:GNew },
    { id: 2, img: topTab },
    { id: 3, img: Optimize },
    { id: 4, img: Automatic },
  ];
  return (
    <div>
      <Paper
        elevation={3}
        sx={{
          width: '75%',
          height: '80vh',
          overflow: 'hidden',
          margin: '15px auto',
          borderRadius: '50px',
          position: 'relative',
          border: "1px solid rgba(0, 0, 0, 0.2)"
        }}
      >
        <Box
          ref={carouselRef}
          sx={{
            display: 'flex',
            transition: 'transform 0.2s',
            transform: `scale(${scale})`,
            height: '100%',
            overflowX: 'scroll',
            scrollBehavior: 'smooth',
            whiteSpace: 'nowrap',
          }}
        >
          {imagesData.map((image, index) => (
            <Box
              key={image.id}
              component="img"
              src={image.img}
              alt="Zoomable"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                flex: '0 0 100%',
              }}
            />
          ))}
        </Box>
      </Paper>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', mt: '2%',ml:"12%" }}>
        <Button sx={{ width: '70px', height: '70px', borderRadius: '50%', }} onClick={handlePrev}>
          <ArrowBackIosIcon />
        </Button>
        <Button sx={{ width: '70px', height: '70px', borderRadius: '50%', }} onClick={handleNext}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </div>
  );
};
export default MyCarousel;

