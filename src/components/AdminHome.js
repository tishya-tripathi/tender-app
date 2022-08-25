import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CallIcon from "@mui/icons-material/Call";
import InfoIcon from "@mui/icons-material/Info";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const AdminHome = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        {/* Navbar of Home Page */}
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
            <NavLink to="/admin/uploadtender" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ marginTop: "10rem", paddingX: "5rem", paddingY: "2rem" }}
              >
                Upload Tender
              </Button>
            </NavLink>
            <NavLink to="/admin/viewtender" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{ margin: "2rem", paddingX: "5rem", paddingY: "2rem" }}
              >
                View Tender
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminHome;
