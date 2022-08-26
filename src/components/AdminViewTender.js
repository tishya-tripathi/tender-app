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
import { TextField } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import Stack from "@mui/material/Stack";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const AdminViewTender = () => {
  const theme = useTheme();
  const rows = [
    {
      id: 1,
      vendorName: "Feastables",
      orgName: "Mr.Beast",
      phone: 9989998975,
      tenderValue: 1500000,
    },
    {
      id: 2,
      vendorName: "Feastables",
      orgName: "Mr.Beast",
      phone: 9989998975,
      tenderValue: 1500000,
    },
    {
      id: 3,
      vendorName: "Feastables",
      orgName: "Mr.Beast",
      phone: 9989998975,
      tenderValue: 1500000,
      },
      {
      id: 4,
      vendorName: "Feastables",
      orgName: "Mr.Beast",
      phone: 9989998975,
      tenderValue: 1500000,
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "No.",
      flex: 1,
      maxWidth: 80,
    },
    {
      field: "vendorName",
      headerName: "Vendor Name",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "orgName",
      headerName: "Organization Name",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "phone",
      headerName: "Phone No.",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "tenderValue",
      headerName: "Tender Value ( in \u20B9 )",
      flex: 1,
      minWidth: 200,
    },
  ];

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
                View Tender
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Body */}

        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "70vh",
                  backgroundColor: "#D4F1F4",
                }}
              >
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{ ml: 3, mt: 1, fontWeight: "bold" }}
                >
                  Tender Name : Lorem Ipsum Dolor Sit Amet
                </Typography>
                <br />
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "55vh",
                  }}
                >
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                  />
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AdminViewTender;
