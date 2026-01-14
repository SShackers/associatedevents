import React from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import Header from "./Header";
import icon from "../ass/login.webp";

const LoginPage = () => {
  return (
    <><Header/>
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Side: Illustration */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={icon}
          alt="login illustration"
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </Grid>

      {/* Right Side: Login Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#007BFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            backgroundColor: "#fff",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Hyy Buddy!!
          </Typography>
          <Typography variant="body1" mb={3}>
            Get Registor Now 
          </Typography>

          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            margin="normal"
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: "#007BFF" }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            sx={{ color: "#555", textAlign: "center", cursor: "pointer" }}
          >
            Forgot Password
          </Typography>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default LoginPage;
