import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Stack from "@mui/material/Stack";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";
import { useNavigate } from "react-router-dom";

const VendorUploadTender = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");  
  }


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
              <IconButton edge="start" color="warning" aria-label="Logout" onClick={logout}>
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
