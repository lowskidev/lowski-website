import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";
import enosIcon from "../../assets/EnOS_Icon.png";

const EnosPage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography align="center">
          <img src={enosIcon} alt="ethernode" height="150" />
        </Typography>
        <br />
        <Typography align="left" color="textSecondary" component="p">
          EnOS is a ubuntu based Linux distribution that comes pre packaged wtih all the tools and software.
          For EnApi to utilize to run and manage your blockchain nodes through the EnUi interface.
          <br /><br />
          The Kernel in EnOS is specifically tailord to run on the ROCKPro64 ARM Architecture.
          And is pre-compiled with modules for scaling into decentrilized connectivity hardware. Which has
          support build in for running mesh networks and various other P2P solutions.
        </Typography>
        <br />
        <Typography>
          <a href="https://github.com/ethernodeio/enapi/" className={classes.buttonlink}><Button fullWidth variant="outlined" color="primary">GitHub</Button></a>
        </Typography>
        <br />
        <Typography>
          <a href="https://www.youtube.com/watch?v=Vfd4PstITT8" className={classes.buttonlink}><Button fullWidth variant="outlined" color="primary">Video </Button></a>
        </Typography>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}

    </React.Fragment >
  );
};

export default EnosPage;
