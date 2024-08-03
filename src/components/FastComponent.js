import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { PageStyle } from './MainPageStyle';
import SpeedIcon from "@mui/icons-material/Speed";

const FastComponent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Window height:', window.innerHeight);
      console.log('Scroll Y:', window.scrollY);
      if (window.scrollY >=200) {
        setVisible(true);
      }else{
        setVisible(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  return (
    <Box sx={{ width: '100%',opacity: visible ? 1 : 0, display: visible ? 'block' : 'none',transform: visible ? 'scale(0.95)' : 'scale(0.9)',transition: 'opacity 0.s ease-in-out, visibility 0.8s ease-in-out',transitionDelay: "1s" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <Typography sx={PageStyle.Fasttxt}>The</Typography>
        <Box sx={PageStyle.fastchangedBox}>
          <SpeedIcon sx={{ fontSize: "40px" }} />
          <Typography sx={PageStyle.fastFont}>fast</Typography>
        </Box>
        <Typography sx={PageStyle.Fasttxt}>way to do</Typography>
      </Box>
      <Box>
        <Typography sx={PageStyle.Fasttxt}>things online</Typography>
      </Box>
    </Box>
  );
};

export default FastComponent;
