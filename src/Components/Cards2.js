import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
 
const Card2 = () => {
  const cards = [
    { id: 1, title: "Balloon Decoration Services", description: "Creative balloon decorations for birthdays, weddings, baby showers, and corporate events. From elegant arches to theme-based designs, we make every celebration colorful and memorable.." },
    { id: 2, title: "Event Rental Items Available", description: "We provide high-quality rental items including chairs, tables, stages, tents, lighting, and props. Affordable pricing with on-time delivery for all types of events.." },
    { id: 3, title: "Photography & Videography", description: "Capture your special moments with our experienced photographers and videographers. We offer candid, traditional, and cinematic coverage for all events.." },
    { id: 4, title: "Stage & Theme Decoration", description: "Customized stage setups and theme decorations designed to match your event style. Perfect for weddings, receptions, engagements, and corporate functions.." }
  ];

  return (
    <Grid container spacing={3} padding={3}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.id}>
          <Card elevation={3} sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            maxWidth: 345,
            borderLeft: "6px solid #1976d2",
            borderRadius: 2,
          }}
        >
          
        </Card>
      </Grid>

    </Grid>
    
    
  );
};

export default Card2;