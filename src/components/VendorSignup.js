import * as React from "react";
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



const initialValues = {
  vendorName: "",
  orgName: "",
  phone: "",
  otp: "",
  email: "",
  password: "",
};


const theme = createTheme();

const VendorSignup = () => {

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      vendorName: data.get("vendorName"),
      orgName: data.get("orgName"),
      phone: data.get("phone"),
      otp:  data.get("otp"),
      email: data.get("email"),
      password: data.get("password"),
    });


    navigate("/vendor/uploadtender");
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

  const sendOTP = () => {
    // Send OTP
    console.log("Send OTP to ", values.phone);
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
              onChange={handleInputChange}            />
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
    </ThemeProvider>
  );
};

export default VendorSignup;
