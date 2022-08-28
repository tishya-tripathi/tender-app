import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        {/* Navbar*/}
        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <AppBar position="static" elevation={0}>
            <Toolbar sx={{ background: "#021B38", height: "10vh" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  margin: "1rem",
                  flexGrow: 1,
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Tender Management Portal
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Body of Home Page */}
        <Box
          sx={{
            height: "90vh",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <NavLink to="/admin/signin" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ marginTop: "10rem", paddingX: "5rem", paddingY: "2rem" }}
              >
                Admin
              </Button>
            </NavLink>
            <NavLink to="/vendor/signin" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ margin: "2rem", paddingX: "5rem", paddingY: "2rem" }}
              >
                Vendor
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
