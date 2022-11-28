import * as React from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { useNavigate } from "react-router-dom";
import { PDFLib, PDFDocument, StandardFonts, rgb } from "pdf-lib";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AdminGridComponent = () => {
  const tenderName = window.sessionStorage.getItem("tenderName");

  const navigate = useNavigate();

  const logout = () => {
    //FOR LOG
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }

    const rows = [
      createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
      createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
      createData("Eclair", 262, 16.0, 24, 6.0),
      createData("Cupcake", 305, 3.7, 67, 4.3),
      createData("Gingerbread", 356, 16.0, 49, 3.9),
    ];

    axios({
      url: "http://localhost:6969/logout",
      method: "GET",
      withCredentials: true,
      crossDomain: true,
    }).then((res) => {
      // console.log(res)
    });
    navigate("/");
  };

  const [rows, setRows] = React.useState([]); //{id: 10, vendorName: "Ramesh Kumar", orgName: "Ventura LLC", phone: "9123871232", tenderValue: "150750" }

  React.useEffect(() => {
    axios({
      url: "http://localhost:6969/all_data",
      method: "GET",
      withCredentials: true,
      crossDomain: true,
    }).then((res) => {
      // console.log(res);
      const data = [];
      console.log("New res data: ", res);
      let cnt = 1;
      for (var i = 0; i < res.data.length; i++) {
        if (
          res.data[i].tenderName === tenderName &&
          res.data[i].stud.length !== 0
        ) {
          var obj = {
            id: cnt++,
            vendorName: res.data[i].stud[0].profile.name,
            orgName: res.data[i].stud[0].profile.organization,
            phone: res.data[i].stud[0].profile.phoneno,
            tenderValue: res.data[i].tenderValue,
            urlEmd:
              "http://localhost:6969/" +
              res.data[i].profile.edm.path.toString(),
            urlAadhar:
              "http://localhost:6969/" +
              res.data[i].profile.aadhar.path.toString(),
            urlPan:
              "http://localhost:6969/" +
              res.data[i].profile.pan.path.toString(),
            withdraw: res.data[i].withdraw,
            emdNum: res.data[i].emdNumber,
            email: res.data[i].email,
          };
          if (obj.withdraw === 0) obj.withdraw = "";
          if (obj.withdraw === 1) obj.withdraw = "YES.";
          data.push(obj);
        }
      }
      setRows(data);
      // console.log(rows);
    });
  }, []);

  const makePDF = async (p) => {
    console.log("params.row := \n", p);

    // PDF Creation
    const pdfDoc = await PDFDocument.create();
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const timesRomanBoldFont = await pdfDoc.embedFont(
      StandardFonts.TimesRomanBold
    );
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const helveticaBoldFont = await pdfDoc.embedFont(
      StandardFonts.HelveticaBold
    );
    const page = pdfDoc.addPage();

    const { width, height } = page.getSize();
    const fontSize = 15;

    // Add PDF Heading contents
    page.drawText("Sundarrameshwar Trust", {
      x: 160,
      y: height - 100,
      size: 24,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    page.drawText("MURDESHWAR – 581350 (N.K.) Karnataka", {
      x: 150,
      y: height - 125,
      size: 15,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    page.drawText("Tender Application", {
      x: 220,
      y: height - 160,
      size: 12,
      font: helveticaBoldFont,
      color: rgb(0, 0, 0),
    });
    // ------------------------

    page.drawText(
      "Tender Name: " + window.sessionStorage.getItem("tenderName").toString(),
      {
        x: 100,
        y: height - 200 - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      }
    );
    page.drawText("Vendor Name: " + p.vendorName.toString(), {
      x: 100,
      y: height - 240 - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
    page.drawText("Organisation Name: " + p.orgName.toString(), {
      x: 100,
      y: height - 280 - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
    page.drawText("Phone: " + p.phone.toString(), {
      x: 100,
      y: height - 320 - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText("EMail: " + p.email.toString(), {
      x: 100,
      y: height - 360 - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText("Tender Value: " + p.tenderValue.toString(), {
      x: 100,
      y: height - 400 - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    page.drawText("UTI Number/ Transaction Number: " + p.emdNum.toString(), {
      x: 100,
      y: height - 440 - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
    page.drawText(
      "Applied on: " + Date(p.urlAadhar.slice(46, 59)).toString().slice(4, 15),
      {
        x: 100,
        y: height - 480 - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0, 0),
      }
    );
    page.drawText("Withdrawn: " + p.withdraw, {
      x: 100,
      y: height - 520 - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });

    // --------------- Merging ------------------------
    const numDocs = 3;
    const urls = [p.urlEmd, p.urlAadhar, p.urlPan];
    for (var i = 0; i < numDocs; i++) {
      const donorPdfBytes = await fetch(urls[i]).then((res) =>
        res.arrayBuffer()
      );
      const donorPdfDoc = await PDFDocument.load(donorPdfBytes, {
        ignoreEncryption: true,
      });
      const docLength = donorPdfDoc.getPageCount();
      for (var k = 0; k < docLength; k++) {
        const [donorPage] = await pdfDoc.copyPages(donorPdfDoc, [k]);
        pdfDoc.addPage(donorPage);
      }
    }
    // // ------------------------------------------------

    const file = await pdfDoc.save();

    // ----------- Trigger Download ------------------
    const blob = new Blob([file], { type: "application/pdf" });
    // Create a link and set the URL using `createObjectURL`
    const link = document.createElement("a");
    link.style.display = "none";
    // link.target = "_blank"
    link.href = URL.createObjectURL(blob);
    link.download = "Vendor Application";

    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);
    link.click();

    // To make this work on Firefox we need to wait
    // a little while before removing it.
    setTimeout(() => {
      URL.revokeObjectURL(link.href);
      link.parentNode.removeChild(link);
    }, 0);
    // ---------------------------------------------------
  };

  let cnt = 0;

  const columns = [
    {
      field: "id",
      headerName: "No.",
      flex: 1,
      maxWidth: 80,
      renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
      // filterable: false,
      sortable: false,
    },
    {
      // --------------------------------- MERGED PDF ----------------------------------------------------
      field: "mergedFile",
      headerName: "Consolidated Report",
      flex: 1,
      minWidth: 180,
      align: "left",
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            {/* <a href={params.row.urlEmd} target="_blank" download={ params.row.urlEmd +".pdf"} > */}
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                makePDF(params.row);
              }}
            >
              <DownloadRoundedIcon />
            </Button>
            {/* </a> */}
          </Box>
        );
      },
    },
    {
      field: "vendorName",
      headerName: "Vendor Name",
      flex: 1,
      minWidth: 300,
    },
    {
      field: "orgName",
      headerName: "Organization Name",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "phone",
      headerName: "Phone No.",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "tenderValue",
      headerName: "Tender Amount",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "withdraw",
      headerName: "Withdrawn",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "emdNum",
      headerName: "EMD No.",
      flex: 1,
      minWidth: 180,
    },

    {
      // --------------------------------- EMD File ----------------------------------------------------
      field: "tenderFile",
      headerName: "EMD File",
      flex: 1,
      minWidth: 90,
      align: "left",
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <a
              href={params.row.urlEmd}
              target="_blank"
              download={params.row.urlEmd + ".pdf"}
            >
              <Button variant="text" color="primary">
                <DownloadRoundedIcon />
              </Button>
            </a>
          </Box>
        );
      },
    },

    {
      // --------------------------------- Aadhar File ----------------------------------------------------
      field: "aadhar",
      headerName: "Aadhar",
      flex: 1,
      minWidth: 80,
      align: "left",
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <a
              href={params.row.urlAadhar}
              target="_blank"
              download={params.row.urlAadhar + ".pdf"}
            >
              <Button variant="text" color="primary">
                <DownloadRoundedIcon />
              </Button>
            </a>
          </Box>
        );
      },
    },

    {
      // --------------------------------- PAN File ----------------------------------------------------
      field: "pan",
      headerName: "PAN",
      flex: 1,
      minWidth: 80,
      align: "left",
      renderCell: (params) => {
        return (
          <Box textAlign="center">
            <a
              href={params.row.urlPan}
              target="_blank"
              download={params.row.urlPan + ".pdf"}
            >
              <Button variant="text" color="primary">
                <DownloadRoundedIcon />
              </Button>
            </a>
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
              <IconButton
                edge="start"
                color="warning"
                aria-label="Logout"
                onClick={logout}
              >
                <Typography variant="caption" color="">
                  Logout&nbsp;
                </Typography>{" "}
                <LoginIcon />
              </IconButton>
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
                  height: "68vh",
                  backgroundColor: "#D4F1F4",
                }}
              >
                <Typography
                  variant="h5"
                  color="text.primary"
                  sx={{ ml: 2, fontWeight: "bold" }}
                >
                  {tenderName}
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

      <div className="logContainer" style={{ padding: "20px" }}>
        <h2
          style={{
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "30px",
          }}
        >
          Logs
        </h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default AdminGridComponent;
