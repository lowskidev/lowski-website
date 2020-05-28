import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";
import enUIIcon from "../../assets/EnUI_Icon_Text.png";

const EnuiPage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography align="center">
          <img src={enUIIcon} alt="ethernode" height="150" />
        </Typography>
        <br />
        <Typography align="left" color="textSecondary" component="p">
          EnUI is a interface build to interface with the EnKeep and EnApi which runs native in EnOS which is pre-installed
          one every shipped EnKeep.
        </Typography>
        <br />
        <Typography>
          <Button fullWidth variant="outlined" color="primary">
            <a href="https://github.com/ethernodeio/enui/" className={classes.buttonlink}>GitHub</a>
          </Button>
        </Typography>
        <br />
        <Typography>
          <Button fullWidth variant="outlined" color="primary">
            <a href="https://github.com/ethernodeio/enui/" className={classes.buttonlink}>Video</a>
          </Button>
        </Typography>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}

    </React.Fragment >
  );
};

export default EnuiPage;
