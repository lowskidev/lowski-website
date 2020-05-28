import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useStyles } from "../theme/theme";
import Grid from "@material-ui/core/Grid";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us"],
  },
  {
    title: "Features",
    description: ["Decentralized", "Open Source", "JSON-RPC API", "EVM Blockchains", "Multi Client Support"],
  },
  {
    title: "Resources",
    description: [
      <a href="https://www.github.com/ethernodeio/" target="_blank" >GitHub</a> as any,
      <a href="https://twitter.com/Ethernode_io" target="_blank">Twitter</a>,
      <a href="https://ethernode.io" >Home</a>,
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="home">
        EtherNode.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function Footer() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.description.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
