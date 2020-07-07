import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";

const tiers = [
  {
    title: "Bakon(BKN) Staking Pool",
    subheader: "Pool ID",
    description: ["58a506b159a61262db300921b9dc87f0b8a21164ee084a3d8af56ead"],
    buttonText: "View On Pool Tool 2 ",
    buttonVariant: "outlined",
    link: "https://htn.pooltool.io/pool/58a506b159a61262db300921b9dc87f0b8a21164ee084a3d8af56ead/",
  },
  {
    title: "Bakon(BKN) Architecture",
    subheader: "cardano shelly explorer",
    description: ["Our staking pool is "],
    buttonText: "View On Explorer",
    buttonVariant: "contained",
    link: "https://shelleyexplorer.cardano.org/en/stake-pool/325589024a7d1c2415b7949b6e7767c022d22271c5658eb2fe46ab39721a0844/",
  },
  {
    title: "Bakon(BKN) Pool Fees",
    subheader: "Currently we run our Staking node in docker swarms between the enKeep and a VM in a data center for fail over during testing phases.",
    description: ["Fixed Fee: .010000", "Variable Fee: 10.0%", "Fee Cap: 0"],
    buttonText: "View On Explorer",
    buttonVariant: "contained",
    link: "https://shelleyexplorer.cardano.org/en/stake-pool/325589024a7d1c2415b7949b6e7767c022d22271c5658eb2fe46ab39721a0844/",
  },
];

const StakePage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Cardano Bakon Stake Pool (BKN)
        </Typography>
        <Typography align="left" color="textSecondary" component="p">
          LowSki BAKON(BKN) pool has transitioned to the new Shelley haskell testnet in preperations for the mainnet/
          <br /><br />
          Please check out the information below about our staking pool ID and how you can delegate your ADA to the BAKON(BKN) staking pool.
          <br /><br />
          -Team LowSki
        </Typography>
      </Container>
      {/* End hero unit */}
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "EnKeep" ? <StarIcon /> : null}
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
                  <a href={tier.link} target="_blank" ><Button fullWidth variant="outlined" color="primary">{tier.buttonText}</Button></a>
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

export default StakePage;
