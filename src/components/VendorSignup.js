import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const initialValues = {
  vendorName: "",
  orgName: "",
  phone: "",
  otp: "",
  email: "",
  password: "",
};

// Used for snackbar Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function generateOTP(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

const theme = createTheme();

const VendorSignup = () => {

  const navigate = useNavigate();
  const axios = require("axios");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      name: data.get("vendorName"),
      organization: data.get("orgName"),
      phoneno: data.get("phone"),
      verified: true,
      email: data.get("email"),
      password: data.get("password"),
      admin: false,
    };

    axios({
      url: "http://localhost:6969/register",
      method: "POST",
      data: credentials,
    }).then((res) => {
      // console.log(res);
      if (res.data.status === "success") {
        navigate("/vendor/uploadtender");
      } else {
        // Add Snackbar For Incorrect Details : TODO
        setOpen(true);
      }
    });
  };

  const [values, setValues] = React.useState(initialValues);

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

  const verifyOTP = () => {
    // setOpen2(true); 
    // setOpen3(true);
  }

  const sendOTP = () => {
    // Send OTP
    // console.log("Send OTP to ", values.phone);

    const newOtp = generateOTP(1000, 9999)
    
    const options = {
      method: 'POST',
      url: 'https://d7-verify.p.rapidapi.com/send',
      headers: {
        'content-type': 'application/json',
        Authorization: 'Token 737589cdce3e1c8cfc8ba469734a20d9d2e97cef',
        'X-RapidAPI-Key': '898adc9212mshd2ea663180dff70p15ad45jsne54c45c2120d',
        'X-RapidAPI-Host': 'd7-verify.p.rapidapi.com'
      },
      data: '{"expiry":900,"message":"Your otp code is {newOtp}","mobile":{values.phone},"sender_id":"SMSInfo"}'
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  };

  // -----Opening and Closing snackbar-----
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpen2(false);
  };

  return (
    <ThemeProvider theme={theme}>
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Vendor Name"
              name="vendorName"
              value={values.vendorName}
              onChange={handleInputChange}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Organization Name"
              name="orgName"
              value={values.orgName}
              onChange={handleInputChange}
            />

            <TextField
              margin="normal"
              required
              type="phone"
              fullWidth
              label="Phone Number (+91)"
              name="phone"
              value={values.phone}
              onChange={handleInputChange}
            />

            <Button xs="true" variant="outlined" onClick={sendOTP}>
              Send OTP
            </Button>
            <TextField
              xs="true"
              margin="normal"
              required
              fullWidth
              label="Enter OTP"
              name="otp"
              value={values.otp}
              onChange={handleInputChange}
            />
            {/* <Button xs="true" variant="outlined" onClick={verifyOTP}>
              Verify
            </Button> */}

            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Invalid Username or Password
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          OTP Verified
        </Alert>
      </Snackbar>
      <Snackbar open={open3} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          OTP Invalid
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default VendorSignup;
