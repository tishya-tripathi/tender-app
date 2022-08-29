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
import { NavigateBefore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AdminCardComponent from "./AdminCardComponent";

const data = [
  {
    tenderName: "Tender Name 1",
    startDate: "22/09/2022",
    endDate: "30/09/2022",
  },
  {
    tenderName: "Tender Name 2",
    startDate: "22/09/2022",
    endDate: "30/09/2022",
  },
  {
    tenderName: "Tender Name 3",
    startDate: "22/09/2022",
    endDate: "30/09/2022",
  },
];

const AdminUploadTender = () => {
  const theme = useTheme();
  const formatDate = (param) => {
    var x = new Date(param);
    var date = ("0" + x.getDate().toString()).slice(-2);
    var month = ("0" + x.getMonth().toString()).slice(-2);
    var year = x.getFullYear().toString();
    return month + "/" + date + "/" + year;
  };
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newTender = {
      // File Upload
      tenderName: data.get("tenderName"),
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      admin: true,
    };
    console.log(newTender);

    // AXIOS Connection
  };

  const [values, setValues] = React.useState({
    tenderName: "Tender: Add New Tender Name",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      setValues({
        ...values,
        [name]: value,
      });
    } else {
      setValues({
        ...values,
        [name]: null,
      });
    }
  };

  const logout = () => {
    navigate("/");
  };

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
            {/* Add New Tender */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                component="form"
                onSubmit={handleSubmit}
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
                    <TextField
                      sx={{ ml: "2rem", width: "30vw" }}
                      name="tenderName"
                      variant="outlined"
                      value={values.tenderName}
                      onChange={handleInputChange}
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
                        type="submit"
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
                </Grid>
              </Paper>
            </Grid>
            {/* --------------------------------------------------------- */}

            {/* Display existing tenders */}
            <AdminCardComponent data={data} />
            {/* --------------------------------------------------------- */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AdminUploadTender;
