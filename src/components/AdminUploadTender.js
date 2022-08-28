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
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import Stack from "@mui/material/Stack";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const AdminUploadTender = () => {
  const theme = useTheme();

  const [startDate, setStartDate] = React.useState(new Date());
  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };
  const [endDate, setEndDate] = React.useState(new Date());
  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
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
                  height: 170,
                  backgroundColor: "#D4F1F4",
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={11}>
                    {/* <Typography
                      variant="h5"
                      color="text.primary"
                      sx={{ ml: 3, mt: 1, fontWeight: "bold"  }}
                    >
                      Tender 
                    </Typography> */}
                    <TextField
                      sx={{ ml: "2rem", width: "30vw" }}
                      name="tendername"
                      variant="outlined"
                      defaultValue={"Tender Name : Lorem Ipsum Dolor Sit Amet"}
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-evenly"
                    >
                      <Button
                        component="label"
                        startIcon={<UploadFileRoundedIcon />}
                        variant="contained"
                        sx={{ width: "10vw" }}
                      >
                        File
                        <input type="file" hidden />
                      </Button>

                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          label="Start Date"
                          minDate={new Date()}
                          value={startDate}
                          onChange={handleStartDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>

                      <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        sx={{}}
                      >
                        <DesktopDatePicker
                          label="End Date"
                          minDate={new Date()}
                          value={endDate}
                          onChange={handleEndDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>

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
                  height: 170,
                  backgroundColor: "#D4F1F4",
                }}
              >
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={11}>
                    {/* <Typography
                      variant="h5"
                      color="text.primary"
                      sx={{ ml: 3, mt: 1, fontWeight: "bold"  }}
                    >
                      Tender 
                    </Typography> */}
                    <TextField
                      sx={{ ml: "2rem", width: "30vw" }}
                      name="tendername"
                      variant="outlined"
                      defaultValue={"Tender Name : Lorem Ipsum Dolor Sit Amet"}
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-evenly"
                    >
                      <Button
                        component="label"
                        startIcon={<UploadFileRoundedIcon />}
                        variant="contained"
                        sx={{ width: "10vw" }}
                      >
                        File
                        <input type="file" hidden />
                      </Button>

                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          label="Start Date"
                          minDate={new Date()}
                          value={startDate}
                          onChange={handleStartDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>

                      <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        sx={{}}
                      >
                        <DesktopDatePicker
                          label="End Date"
                          minDate={new Date()}
                          value={endDate}
                          onChange={handleEndDateChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>

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

export default AdminUploadTender;
