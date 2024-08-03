import React,{useRef}from 'react';
import { Box, Button, Paper } from '@mui/material';
import { PageStyle } from './MainPageStyle';
import {GooglePic, topTab, Optimize, Automatic } from '../utils/Images';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = () => {
    const containerRef = useRef(null);
  const imagesData = [
    { id: 1, img: topTab },
    { id: 2, img: topTab },
    { id: 3, img: Optimize },
    { id: 4, img: Automatic },
  ];
  const scrollRight = () => {
    if (containerRef.current) {
        console.log(containerRef.current.scrollRight)
      containerRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
    }
  };
  return (
    <>
    <Box>
    <Box 
     ref={containerRef}
      sx={{
        display: 'flex',
        overflowX: 'scroll',
        overflowY:"hidden",
        width: '4000px',
        gap:"2%",
        mt:"5%",
      }}
    >
      {imagesData.map((image) => (
        <Paper 
          key={image.id} 
          elevation={5} 
          sx={PageStyle.MapPaper}
          ref={containerRef}
        >
          <Box
            component="img"
            src={image.img}
            alt={`Slide ${image.id}`}
            sx={{
              width: '100%', 
              height: '100%', 
              borderRadius: "5%",
              objectfit: 'cover', 
            }}
          />
        </Paper>
      ))}
    </Box>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"10px",mt:"2%"}}>
    <Button sx={{width:"70px",height:"70px",borderRadius:"50%",border:"1px solid"}} ><ArrowBackIosIcon/></Button>
    <Button sx={{width:"70px",height:"70px",borderRadius:"50%",border:"1px solid"}} onClick={scrollRight}><ArrowForwardIosIcon/></Button>
    </Box>
    </Box>
    </>
  );
};

export default Carousel;

