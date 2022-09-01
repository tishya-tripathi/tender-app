import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import AdminGridComponent from "./AdminGridComponent";



const tenders = [
  {
    tenderName: "Tender 01"
  },
  {
    tenderName: "Tender 02"
  },
  {
    tenderName: "Tender 03"
  },
  {
    tenderName: "Tender 04"
  }
];




const AdminViewTender = () => {

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  // Dropdown Menu
  const tenderDropdown =
    tenders.length > 0 &&
    tenders.map((item, index) => {
      return (
        <MenuItem key={index} value={item.tenderName}>
          {item.tenderName}
        </MenuItem>
      );
    });



  // Redirect and Display Tender
  const displayTender = (e) => {
    
    const { name, value } = e.target;
    //console.log("Display Tender : ", value);

    window.sessionStorage.setItem('tenderName', value);

    navigate("./tender");
  };

  return (
    <>
      <Box>
        {/* Navbar */}
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
                View Tender
              </Typography>
              <IconButton
                edge="start"
                color="warning"
                aria-label="Logout"
                onClick={logout}
              >
                <LoginIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Body */}

        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={8} sx={{}}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="tender-name-label">Select Tender</InputLabel>
                <Select
                  labelId="select-tender-name-label"
                  name="selectTenderName"
                  onChange={displayTender}
                >
                  {tenderDropdown}
                </Select>
              </FormControl>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AdminViewTender;
