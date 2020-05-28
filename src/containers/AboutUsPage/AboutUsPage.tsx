import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";

const tiers = [
  {
    title: "The Team",
    subheader: "Peoples",
    description: [
      "Decentrilized",
      "Pretty Awesome",
      "Dedicated",
      "Blockchain Enthuziasts",
    ],
    buttonText: "More Info",
    buttonVariant: "outlined",
  },
  {
    title: "Ethernode llc",
    subheader: "Company",
    description: [
      "Boundless",
      "Hardware",
      "Development",
      "Blockchain",
    ],
    buttonText: "More Info",
    buttonVariant: "contained",
  },
];

const AboutUsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          About Us
        </Typography>
        <Typography align="center" color="textSecondary" component="p">
          Step into our REALM
          <br />
          -Team Ethernode
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
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
                  <Link to="" className={classes.buttonlink} > <Button fullWidth variant="outlined" color="primary">{tier.buttonText}</Button></Link>
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

export default AboutUsPage;
