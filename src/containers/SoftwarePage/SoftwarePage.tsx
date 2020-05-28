import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";
import enApiIcon from "../../assets/EnAPI_Icon_Text.png";
import enUIIcon from "../../assets/EnUI_Icon_Text.png";
import enosIcon from "../../assets/EnOS_Icon.png";

const softwares = [
  {
    title: <img src={enApiIcon} alt="en api icon" height="100" /> as any,
    subheader: "Software",
    description: [
      "Open Source",
      "Apache2",
      "JSON-RPC",
      "OpenRPC Spec",
    ],
    buttonText: "More Info",
    link: "enapi",
  },
  {
    title: <img src={enUIIcon} alt="en ui icon" height="100" /> as any,
    subheader: "Software",
    description: [
      "Open Source",
      "Apache2",
      "Multi OS Support",
      "Desktop App",
    ],
    buttonText: "More Info",
    link: "enui",
  },
  {
    title: <img src={enosIcon} alt="en os icon" height="100" /> as any,
    subheader: "Software",
    description: [
      "Open Source",
      "SBC/VM/Barebones support",
      "ARM64 Support",
      "Ubuntu Based",
    ],
    buttonText: "More Info",
    link: "enos",
  },
];

const SoftwarePage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Software
        </Typography>
        <Typography align="center" color="textSecondary" component="p">
          Blockchain software for next generation of Web3 development.
          <br />
          -Team Ethernode
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {softwares.map((software) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={software.title} xs={12} sm={software.title === "Enterprise" ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={software.title}
                  subheader={software.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {software.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Link to={software.link} className={classes.buttonlink}><Button fullWidth variant="outlined" color="primary">{software.buttonText}</Button></Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
};

export default SoftwarePage;
