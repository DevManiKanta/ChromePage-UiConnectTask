import React, { useState, useEffect } from "react";
import { PageStyle } from "./MainPageStyle";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { NavImage, Browser } from "../utils/Images";
import { Typography,Button, Stack } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import DownloadIcon from '@mui/icons-material/Download';
import Checkbox from '@mui/material/Checkbox';
import FastComponent from "./FastComponent";
import "./animation.css";
const Mainpage = () => {
  const icons = [
    {
      icon: <SpeedIcon sx={{ color: "#188038", fontSize: 60 }} />,
      name: "fast",
      color: "#188038",
    },
    {
      icon: <SafetyCheckIcon sx={{ color: "#1967D2", fontSize: 60 }} />,
      name: "safe",
      color: "#1967D2",
    },
    {
      icon: <FormatPaintIcon sx={{ color: "#Ea4335", fontSize: 60 }} />,
      name: "yours",
      color: "#Ea4335",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [icons.length]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
      <Paper elevation={1} sx={PageStyle.navBar}>
        <Box component={"img"} src={NavImage} />
      </Paper>
      <Box sx={PageStyle.midSection}>
        <Box component={"img"} src={Browser} sx={{width:"40%"}} />
        <Box sx={PageStyle.BuiltMainBox}>
          <Typography sx={PageStyle.BuiltText}>built to be</Typography>
          <Paper elevation={1} sx={PageStyle.changedBox}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  animation: "iconUp 1s ease-in-out infinite",
                  "@keyframes iconUp": {
                    from: {
                      transform: "translateY(20px)",
                      opacity: 0,
                    },
                    to: {
                      transform: "translateY(0)",
                      opacity: 1,
                    },
                  },
                }}
              >
                {icons[currentIndex].icon}
              </Box>
              <Typography
                variant="h3"
                ml={1}
                sx={{
                  ...PageStyle.ChangeText,
                  color: icons[currentIndex].color,
                  animation: "slideUp 1s ease-in-out infinite",
                  "@keyframes slideUp": {
                    from: {
                      transform: "translateY(20px)",
                      opacity: 0,
                    },
                    to: {
                      transform: "translateY(0)",
                      opacity: 1,
                    },
                  },
                }}
              >
                {icons[currentIndex].name}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Box sx={PageStyle.ButtonParentBox}>
        <Button variant="contained" sx={PageStyle.downloadBtn}>
          <DownloadIcon />
          <Typography sx={PageStyle.DownloadText}>Download Chrome</Typography>
        </Button>
        <Typography sx={PageStyle.text}>For Windows 11/10 64-bit.</Typography>
        <Stack
          direction="row"
          spacing={1}
          alignItems={"center"}
          sx={{ width: "32%", textAlign: "left" }}
        >
          <Checkbox
            {...label}
            defaultChecked
            sx={{ transform: "scale(1.5)" }}
          />
          <Typography sx={PageStyle.text}>
            Help make Google Chrome better by automatically sending usage
            statistics and crash reports to Google. Learn more
          </Typography>
        </Stack>
        <Box sx={{ width: "30%", textAlign: "center" }}>
          <Typography sx={PageStyle.text}>
            By downloading Chrome, you agree to the Google Terms of Service and
            Chrome and ChromeOS Additional Terms of Service
          </Typography>
        </Box>
      </Box>
      <Box sx={PageStyle.FastMainBox}>
        <FastComponent />
      </Box>
    </>
  );
};

export default Mainpage;
