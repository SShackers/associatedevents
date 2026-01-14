import React from "react";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import Header from "../Components/Header";

const Card2 = () => {
  return (
    <>
      <Header />

      <Grid container justifyContent="center" padding={3}>
        <Grid item xs={12} sm={8} md={6}>
          <Card
            elevation={4}
            sx={{
              borderLeft: "6px solid #1976d2",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Enquiry Office
              </Typography>

              <Typography variant="body2" sx={{ mb: 2 }}>
                Location: No:10/3, Ground Floor, 8th Cross, Shivananda Nagar,  
                Mudalapalya, Bengaluru, Karnataka 560040
              </Typography>

              {/* Google Map */}
              <Box sx={{ width: "100%", height: 250, mb: 2 }}>
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 8 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.4895058592833!2d77.52701359999999!3d12.9681745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd424d0fc3d%3A0x42c3b6e42dd875a9!2sAssociated%20Events!5e1!3m2!1sen!2sin!4v1767615718434!5m2!1sen!2sin"
                />
              </Box>

              {/* <Button
                variant="contained"
                fullWidth
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/1EoMqGY2pNUrbjg98",
                    "_blank"
                  )
                }
              >
                Open in Google Maps
              </Button> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Card2;
