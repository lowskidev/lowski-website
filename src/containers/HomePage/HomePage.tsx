import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";
import enKeepIcon from "../../assets/EnKeep_Icon_Text.png";
import enApiIcon from "../../assets/EnAPI_Icon_Text.png";
import enUIIcon from "../../assets/EnUI_Icon_Text.png";
import lowskislide from "../../assets/slide.jpeg";
import sfdevpic from "../../assets/sfdevpic.jpeg";
import notice from "../../assets/sign.jpeg";
import freestuff from "../../assets/stuff.jpeg";
import rock64pro from "../../assets/rocksbc.png";

const tiers = [
  {
    title: <img src={enKeepIcon} alt="enkeep icon" height="100" /> as any,
    subheader: "Hardware",
    description: ["Rockchip RK3399 SOC", "4GB LPDDR4 RAM", "802.11 AC + BT 4.0/5.0", "NVMe SSD"],
    buttonText: "More Info",
    buttonVariant: "outlined",
    link: "enkeep",
  },
  {
    title: <img src={enApiIcon} alt="enkeep icon" height="100" /> as any,
    subheader: "Software",
    description: [
      "Open Source",
      "Apache2",
      "JSON-RPC",
      "OpenRPC Spec",
    ],
    buttonText: "More Info",
    buttonVariant: "contained",
    link: "enapi",
  },
  {
    title: <img src={enUIIcon} alt="enkeep icon" height="100" /> as any,
    subheader: "Software",
    description: [
      "Open Source",
      "Apache2",
      "Multi OS Support",
      "Desktop App",
    ],
    buttonText: "More Info",
    buttonVariant: "outlined",
    link: "enui",
  },
];

const HomePage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      {
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Mission
        </Typography>
        <Typography align="left" color="textSecondary" component="p">
          Blockchain networks have the potential to make meaningful and lasting positive changes, allowing people around the
          world to communicate, transact, and transfer information privately and securely. At the core of this technology is a
          powerful principle - trust minimization, reducing or eliminating reliance on 3rd parties for formal verification.
          <br /><br />
          While most of the attention around blockchain networks has been focused on the blockchain part, at LowSki we’re all
          about the networks. Public encrypted networks like Cardano are permission-less to join. If you have an
          internet connection and modest hardware you simply host a node and become a peer in a secure distributed public network!
          <br /><br />
          This stores a synced copy of the blockchain ledger on your local hardware and you get a network address which allows you to
          send and receive data securely and privately from other peers in the network. Unfortunately, nodes haven’t been that simple to
          host and even as user awareness and adoption have grown the number of nodes has decreased, requiring users to
          rely on a remote connection to a 3rd party node host for their blockchain interactions. Not very trust minimized.
          <br /><br />
          Currently we're just focusing on supporting the Cardano blockchain by running a staking pool and relay nodes accross the USA.
          <br /><br />
          To a future of effectively implemented trust minimization maximalism!
          <br /><br />
          -Team LowSki
        </Typography>
      </Container>
      }
      {/* End hero unit */}
      {/*
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={10} sm={8} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Link to={tier.link} className={classes.buttonlink}><Button fullWidth variant="outlined" color="primary">{tier.buttonText}</Button></Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      */}
      {/* Footer */}
      <Footer />
    {/* End footer */}
    </React.Fragment >
  );
};

export default HomePage;
