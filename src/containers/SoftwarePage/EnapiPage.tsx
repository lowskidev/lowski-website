import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";
import enApiIcon from "../../assets/EnAPI_Icon_Text.png";

const EnapiPage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography align="center">
          <img src={enApiIcon} alt="ethernode" height="150" />
        </Typography>
        <br />
        <Typography align="left" color="textSecondary" component="p">
          EnAPI is like the hear of EnOS, it birdges EnUI and EnOS together on the EnKeep to help you smoothly
          run, operate and monitor your Blockchain nodes on your Ethernode.
        </Typography>
        <br />
        <Typography>
          <a href="https://github.com/ethernodeio/enapi/" className={classes.buttonlink}> <Button fullWidth variant="outlined" color="primary">GitHub</Button></a>
        </Typography>
        <br />
        <Typography>
          <a href="https://www.youtube.com/watch?v=Vfd4PstITT8" className={classes.buttonlink}><Button fullWidth variant="outlined" color="primary">Video</Button></a>
        </Typography>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}

    </React.Fragment >
  );
};

export default EnapiPage;
