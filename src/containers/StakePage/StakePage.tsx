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
    description: ["31d1d830873e05316b9a4b549617dc4a380b775e5431dfc13d312d88"],
    buttonText: "Pooltool.io",
    buttonVariant: "outlined",
    link: "https://pooltool.io/pool/31d1d830873e05316b9a4b549617dc4a380b775e5431dfc13d312d88/",
  },
  {
    title: "Bakon(BKN) Infrastructure",
    subheader: "Dedicated Hardware",
    description: ["Bakon(BKN) runs on dedicated hardware in a data center with several relay nodes distributed in the Continental United States."],
    buttonText: "Adapools.org",
    buttonVariant: "contained",
    link: "Adapools.org",
  },
  {
    title: "Bakon(BKN) Pool Fees",
    subheader: "",
    description: ["Margin: 1.5%", "Fixed Cost: 420"],
    buttonText: "",
    buttonVariant: "contained",
    link: "",
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
          BAKON Stake Pool - Is a high performance pool ran by a couple of enthusiasts that love building stuff and supporting Cardano and its echo system.
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
