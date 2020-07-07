
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../theme/theme";
import logo from "../assets/lowski.png";

export const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} >
          <img src={logo} alt="logo" height="50" /> LowSki.dev
        </Typography>
        <nav>
          <Link to="/home" className={classes.navlink}>
            <Button>Home</Button>
          </Link>
          <Link to="/stakepage" className={classes.navlink}>
            <Button>Cardano Stake Pool</Button>
          </Link>
          <Link to="/hardware" className={classes.navlink}>
            <Button>Hardware</Button>
          </Link>
          <Link to="/ethernodepage" className={classes.navlink}>
            <Button>Ethernode</Button>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

/*
<Button href="#" color="primary" variant="outlined" className={classes.link}>
  Login - NA
</Button>
*/
