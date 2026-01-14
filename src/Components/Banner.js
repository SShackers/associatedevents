import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import Bgvideo from '../ass/videoplayback.mp4';
const Banner = () => {
  return (
    <Grid
      sx={{
        position: 'relative',
        height: '45vh',
        overflow: 'hidden',
      }}
    >
      {/* 🎥 Video Background */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src={Bgvideo}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* 🌑 Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 1,
        }}
      />

      {/* 📝 Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            fontWeight: 700,
            mb: 2,
          }}
        >
          Welcome to Associated Events – Event Planners & Decorators
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#f1f1f1',
            maxWidth: 800,
            fontSize: '1.1rem',
            lineHeight: 1.8,
          }}
        >
          <strong>Associated Events</strong>, we turn your special moments into
          unforgettable experiences. As a professional event planning &
          decoration service, we specialize in designing, organizing, and
          executing events with creativity, precision, and elegance.
        </Typography>
      </Box>
    </Grid>
  );
};

export default Banner;
