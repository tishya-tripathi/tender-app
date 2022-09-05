import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

function Copyright() {
  return (
    <Typography variant="subtitle2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://www.rnsit.ac.in/cse/">
        RNSIT,
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ minHeight: "100vh" }}>
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
            minHeight: "80vh",
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

        {/* Footer of Home Page */}
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="xs">
            <Typography variant="subtitle2" color="text.secondary">
              {/* Made&nbsp;&nbsp;with&nbsp;&nbsp;<span style={{ color: "red" }}>&#10084;</span>&nbsp;&nbsp;by&nbsp;&nbsp; */}
              Developed&nbsp;&nbsp;by&nbsp;&nbsp;
              <Typography variant="overline" color="text.primary">
                <Link color="inherit" href="https://www.linkedin.com/in/abhishekjaiswal1308/" underline="none">
                  {" "}
                  Abhishek
                </Link>
              </Typography>{" "}
              ,&nbsp;
              <Typography variant="overline" color="text.primary">
                <Link color="inherit" href="https://www.linkedin.com/in/sagun-sangwan-9662401b2/" underline="none">
                  {" "}
                  Sagun
                </Link>
              </Typography>
              &nbsp; & &nbsp;
              <Typography variant="overline" color="text.primary">
                <Link color="inherit" href="https://www.linkedin.com/in/tishya-tripathi/" underline="none">
                  {" "}
                  Tishya
                </Link>
              </Typography>{" "}
              !
            </Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Copyright />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
