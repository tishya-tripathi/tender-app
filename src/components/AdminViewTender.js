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



const AdminViewTender = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");  
  }

  const rows = [
    {
      id: 1,
      vendorName: "Vendor 1",
      orgName: "Organization 1",
      phone: 9989998975,
      tenderValue: 1500000,
    },
    {
      id: 2,
      vendorName: "Vendor 2 ",
      orgName: "Organization 2",
      phone: 9989998975,
      tenderValue: 750000,
    },
    {
      id: 3,
      vendorName: "Vendor 3",
      orgName: "Organization 3",
      phone: 9989998975,
      tenderValue: 6650000,
    },
    {
      id: 4,
      vendorName: "Vendor 4",
      orgName: "Organization 4",
      phone: 9989998975,
      tenderValue: 4000,
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
    {
      field: "tenderFile",
      headerName: "Download Tender",
      flex: 1,
      minWidth: 200,
      align: "left",
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <Button variant="text" color="primary"
              onClick={()=>{console.log("Button clicked by :", params.row.vendorName, params.row.orgName)}}
            >
              <DownloadRoundedIcon />
            </Button>
          </Box>
        );
      },
    },
  ];


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
              <IconButton edge="start" color="warning" aria-label="Logout" onClick={logout}>
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
                  labelId="tender-name-label"
                  name="tenderName"
                >
                  <MenuItem value={"Tender 1"}>Tender 1</MenuItem>
                  <MenuItem value={"Tender 2"}>Tender 2</MenuItem>
                  <MenuItem value={"Tender 3"}>Tender 3</MenuItem>
                  <MenuItem value={"Tender 4"}>Tender 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "68vh",
                  backgroundColor: "#D4F1F4",
                }}
              >
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{ ml: 2, fontWeight: "bold" }}
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
