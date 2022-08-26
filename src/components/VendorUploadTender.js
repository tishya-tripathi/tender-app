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
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const VendorUploadTender = () => {
  const theme = useTheme();

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
                Upload Tender
              </Typography>
              <IconButton edge="start" color="warning" aria-label="Logout">
                <LoginIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Body */}
        {/* <Box
          sx={{
            height: "90vh",
            alignItems: "center",
            backgroundColor: "pink",
          }}
        >
        
        </Box> */}
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                  backgroundColor: "#D4F1F4",
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={11}>
                    <Typography
                      variant="h5"
                      color="text.primary"
                      sx={{ ml: 3, mt: 1, fontWeight: "bold" }}
                    >
                      Tender Name : Lorem Ipsum Dolor Sit Amet
                    </Typography>
                    <br></br>
                    <br></br>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-evenly"
                    >
                      <Button
                        startIcon={<DownloadRoundedIcon />}
                        variant="contained"
                        sx={{ width: "15vw" }}
                      >
                        Download File
                      </Button>

                      <Button
                        component="label"
                        startIcon={<FileUploadRoundedIcon />}
                        variant="contained"
                        sx={{ width: "15vw" }}
                      >
                        Upload File
                        <input type="file" hidden />
                      </Button>

                      <TextField
                        name="tenderValue"
                        label="Tender Value"
                        type="tel"
                      />

                      <Button
                        startIcon={<CheckBoxRoundedIcon />}
                        variant="contained"
                        color="success"
                        sx={{ width: "10vw" }}
                      >
                        Save
                      </Button>
                    </Stack>
                    <br></br>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton color="error">
                      <DeleteForeverIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                  backgroundColor: "#D4F1F4",
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={11}>
                    <Typography
                      variant="h5"
                      color="text.primary"
                      sx={{ ml: 3, mt: 1, fontWeight: "bold" }}
                    >
                      Tender Name : Lorem Ipsum Dolor Sit Amet
                    </Typography>
                    <br></br>
                    <br></br>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-evenly"
                    >
                      <Button
                        startIcon={<DownloadRoundedIcon />}
                        variant="contained"
                        sx={{ width: "15vw" }}
                      >
                        Download File
                      </Button>

                      <Button
                        component="label"
                        startIcon={<FileUploadRoundedIcon />}
                        variant="contained"
                        sx={{ width: "15vw" }}
                      >
                        Upload File
                        <input type="file" hidden />
                      </Button>

                      <TextField
                        name="tenderValue"
                        label="Tender Value"
                        type="tel"
                      />

                      <Button
                        startIcon={<CheckBoxRoundedIcon />}
                        variant="contained"
                        color="success"
                        sx={{ width: "10vw" }}
                      >
                        Save
                      </Button>
                    </Stack>
                    <br></br>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton color="error">
                      <DeleteForeverIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default VendorUploadTender;
