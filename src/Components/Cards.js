import { useState, useEffect } from "react";

import {
  Box,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import gmf from '../ass/Benki.png';

const books = [
  {
    id: 1,
    title: "Circle Arach Decoration",
    author: "Circle Arch Designs to Add a Modern Touch to Your Celebration",
    image: "https://lh3.googleusercontent.com/p/AF1QipPX8GPQScNiaaTXMl13s1lOfc1qpMj970Iiqxzv=s1360-w1360-h1020-rw",
  },
  {
    id: 2,
    title: "Squre Arach Decoration",
    author: "Stylish Square Arch Setups Perfect for Contemporary Events & Grand Entrances",
    image: "https://lh3.googleusercontent.com/p/AF1QipOwoy8Vqwm5t8M4kDa_FdX1O3fQL-W_laL8impM=s1360-w1360-h1020-rw",
  },
  {
    id: 3,
    title: "Heart Arach Deocration",
    author: "Romantic Heart Arch Decorations Crafted for Love-Filled Moments",
    image: "https://lh3.googleusercontent.com/p/AF1QipNFPrk1YWFzGL5LfGt-WBrBfiFp7TaM_YI92G8Y=s1360-w1360-h1020-rw",
  },
  {
    id: 4,
    title: "U-shape Arach Decoration",
    author: "Classic U-Shape Arch Decorations for Stunning Stage & Entrance Décor",
    image: "https://lh3.googleusercontent.com/p/AF1QipPx9xLe18LOzm7-2pPIlzZCh01ombRlUTlUA2Gz=s1360-w1360-h1020-rw",
  },
  {
    id: 5,
    title: "Food Serives",
    author: "Get My Food",
    image: gmf ,
  },
];

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    let diff = (index - currentIndex + books.length) % books.length;
    if (diff > books.length / 2) diff -= books.length;
    return diff;
  };

  const getStyle = (index) => {
    const pos = getPosition(index);
    const isCenter = pos === 0;

    return {
      position: "absolute",
      width: 250,
      height: 350,
      transform: `translateX(${pos * 280}px) scale(${isCenter ? 1.3 : 0.85})`,
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: isCenter ? 10 : 5 - Math.abs(pos),
      opacity: Math.abs(pos) > 2 ? 0 : 1,
      cursor: "pointer",
      boxShadow: isCenter
        ? "0 15px 40px rgba(0,0,0,0.4)"
        : "0 10px 30px rgba(0,0,0,0.3)",
      borderRadius: 2,
    };
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 6,
          background: "linear-gradient(45deg, #2196F3, #21CBF3)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 600,
        }}
      >
        Services We Provide
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 450,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {books.map((book, index) => (
          <Card
            key={book.id}
            sx={getStyle(index)}
            onClick={() => setCurrentIndex(index)}
          >
            <CardMedia
              component="img"
              image={book.image}
              alt={book.title}
              sx={{ height: 280, objectFit: "cover" }}
            />

            <Box sx={{ p: 1.5 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {book.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {book.author}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Dots */}
      <Box sx={{ display: "flex", gap: 1, mt: 4 }}>
        {books.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: currentIndex === index ? 30 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor: currentIndex === index ? "primary.main" : "grey.400",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}