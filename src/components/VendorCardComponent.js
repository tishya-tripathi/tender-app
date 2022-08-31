import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

const VendorCardComponent = ({ data }) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log("Tender Name : ", event.target.querySelector("h5").innerText);
    console.log("Tender Value : ", event.target.tenderValue.value);
      
    // AXIOS Connection - TODO
    };
    

    // Download Admin Tender File
    const downloadFile = async (name) => {
        console.log("Download File : ", name);
    };


    // Upload Vendor Tender File
    const uploadFile = async (name) => {
        console.log("Upload File : ", name);
    };  
    

  return (
    <>
      {data.map((data, index) => {
        return (
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
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
                    {data.tenderName}
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
                      onClick={() => {downloadFile(data.tenderName)}}
                    >
                      Download File
                    </Button>

                    <Button
                      component="label"
                      startIcon={<FileUploadRoundedIcon />}
                      variant="contained"
                      sx={{ width: "15vw" }}
                      onChange={() => {uploadFile(data.tenderName)}}
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
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default VendorCardComponent;
