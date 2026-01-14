
import { Card, CardContent, CardMedia, Typography, Button,Grid } from "@mui/material";
import React from 'react'
import Hedder from "./Header";

const Services = () => {
  return (
    <><Hedder/>
    <Grid container spacing={3} sx={{ p: 4 }}>
      
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "0.5s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image="https://lh3.googleusercontent.com/p/AF1QipOvhEjciReFFxAx9ftHTJPI9IL6u76pJdpgFmDp=s1360-w1360-h1020-rw"
            alt="Sample Image"
          />
          <CardContent
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
    Party Hall decoration
  </Typography>

  <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
    grand entry decoration management
  </Typography>

  <Button variant="contained" sx={{ borderRadius: 2 }}>
    BOOK NOW
  </Button>
</CardContent>
        </Card>
      </Grid>

      {/* Card 2 */}
  <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image="https://lh3.googleusercontent.com/p/AF1QipO9J4zPZpOkcpLCGSM3Q9RX4Ar8ooffvJUdyj9c=s1360-w1360-h1020-rw"
            alt="Sample Image"
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Home decoration
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
             Ceabration vibs 
            </Typography>
            <Button variant="contained" sx={{ borderRadius: 2 }}>
             BOOK NOW
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 3 */}
  <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image="https://lh3.googleusercontent.com/p/AF1QipN59djoMxArWzbrGn9TR1bmbvR6NrBMcF5WImNo=s1360-w1360-h1020-rw"
            alt="Sample Image"
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              private theatre
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
             Suprise Party
            </Typography>
            <Button variant="contained" sx={{ borderRadius: 2 }}>
             BOOK NOW
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};

export default Services;