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
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          *What happened to Ethernode?*
      </Typography>
        <Typography align="left" color="textSecondary" component="p">
          Maciej and I started Ethernode in 2018 to develop tools that simplify running nodes for evm blockchain networks.
          We hold that the chief value proposition of public “decentralized” is minimizing dependencies on trusted 3rd parties.
          <br />
          <img src="https://pbs.twimg.com/media/EY-alg_UMAAfl0D?format=jpg&name=large" width="600" />
          <br /><br />
          The decentralized nature of these networks and the ability to leverage that value proposition depend on direct user 
          participation in the network by running nodes and developers building dApps that run entirely client-side and interact 
          with the blockchain through the user’s node.
          <br />
          <img src="https://pbs.twimg.com/media/EY-cJAbUEAAvAeU?format=jpg&name=900x900" />
          <br /><br />
          We made the decision to shutter Ethernode at the end of 2019 after clear evidence that there are not enough people serious 
          about participating in decentralized, secure, p2p blockchain networks to justify pursuing the effort as a business.
          <br />
          <img src="https://pbs.twimg.com/media/EY-c4iUUYAAc-ij?format=jpg&name=small" />
          <br /><br />
          The resources we developed as Ethernode have always been open source and entirely free and will continue to be maintained, 
          expanded, and available from our new github page at https://github.com/lowskidev
          <br />
          <img src="https://pbs.twimg.com/media/EY-e1NqUMAAVbVN?format=jpg&name=small" />
          <br /><br />
          We will be releasing OS images for the RockPro64 and pi4 soon so users can source the hardware of their choice and start running nodes and using the API and other utilities quickly and easily.
          <br />
          <img src="https://pbs.twimg.com/media/EY-fFoYUYAAAo_F?format=png&name=360x360" />
          <br /><br />
          The principles that drove us to undertake this endeavor haven’t changed and we won’t stop building. We’ll now being sharing our efforts as LowSki, just a couple of guys trying to contribute some value.
      </Typography>
      </Container>
      {/* Hero unit */}
      {/*
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Mission
        </Typography>
        <Typography align="left" color="textSecondary" component="p">
          Blockchain networks have the potential to make meaningful and lasting positive changes, allowing people around the
          world to communicate, transact, and transfer information privately and securely. At the core of this technology is a
          powerful principle - trust minimization, reducing or eliminating reliance on 3rd parties for formal verification.
          <br /><br />
          While most of the attention around blockchain networks has been focused on the blockchain part, at Ethernode we’re all
          about the networks. Public encrypted networks like Ethereum Classic Or Cardano are permission-less to join. If you have an
          internet connection and modest hardware you simply host a node and become a peer in a secure distributed public network!
          <br /><br />
          This stores a synced copy of the blockchain ledger on your local hardware and you get a network address which allows you to
          send and receive data securely and privately from other peers in the network. Unfortunately, nodes haven’t been that simple to
          host and even as user awareness and adoption have grown the number of nodes has decreased, requiring users to
          rely on a remote connection to a 3rd party node host for their blockchain interactions. Not very trust minimized.
          <br /><br />
          We’re solving this problem by running your own nodes simple, convenient, and practical.
          <br /><br />
          EnOS is an opensource Linux operating system built for blockchain, a platform where DApps run on the user’s device and all
          user data and blockchain interactions happen locally and securely. With EnKeep you not only get plug and play convenience but
          also the fortress at the center of your own private and secure home mesh network. This creats an environment where your
          increasingly connected smart home can communicate securely and you own the data you produce.
          <br /><br />
          To a future of effectively implemented trust minimization maximalism!
          <br /><br />
          -Team Ethernode
        </Typography>
      </Container>
      */}
      {/* End hero unit */}
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
      {/* Footer */}
      <Footer /> >
    {/* End footer */}
    </React.Fragment >
  );
};

export default HomePage;
