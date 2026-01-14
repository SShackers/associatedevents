import React from "react";
import Grid from "@mui/material/Grid2";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextType from "./TextType";
import logo from "../ass/55.png";

const Header = () => {
  const navigate = useNavigate();

  const hogu = (path) => {
    navigate(path);
  };

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        backgroundColor: "black",
        height: "225px",
        px: 5,
      }}
    >
      {/* LOGO */}
      <Grid size={{ xs: 12, md: 3 }} textAlign="center">
        <img
          src={logo}
          alt="logo"
          style={{
            height: "180px",
            width: "180px",
          }}
        />
      </Grid>

      {/* CENTER CONTENT */}
      <Grid size={{ xs: 12, md: 6 }} textAlign="center">
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontWeight: 600,
          }}
        >
          <TextType
            text={["ASSOCIATED EVENTS"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </Typography>

        <Typography
          sx={{
            color: "white",
            mt: 1,
          }}
        >
          An Experience Beyond the Ordinary
        </Typography>

        <Grid
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button sx={{ color: "white" }} onClick={() => hogu("/")}>
            Home
          </Button>
          <Button sx={{ color: "white" }} onClick={() => hogu("/Services")}>
            Services
          </Button>
          <Button sx={{ color: "white" }} onClick={() => hogu("/Contact")}>
            Contact
          </Button>
          <Button sx={{ color: "white" }} onClick={() => hogu("/Gallery")}>
            Gallery
          </Button>
        </Grid>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid size={{ xs: 12, md: 3 }} textAlign="center">
        <Button sx={{ color: "white", mr: 1 }} onClick={() => hogu("/Login")}>Login</Button>
        <Button sx={{ color: "white" }}onClick={() => hogu("/Signup")}>Sign Up</Button>  
      </Grid>
    </Grid>
  );
};

export default Header;
