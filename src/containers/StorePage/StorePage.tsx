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
import enKeepIcon from "../../assets/EnKeep_Icon_Text.png";

const items = [
  {
    title: <img src={enKeepIcon} alt="enkeep icon" height="100" /> as any,
    subheader: "Hardware",
    description: ["Rockchip RK3399 SOC", "4GB LPDDR4 RAM", "802.11 AC + BT 4.0/5.0", "NVMe SSD"],
    buttonText: "Pre Sale(Stay Tuned).",
    buttonVariant: "outlined",
    link: "#",
  },
];

const StorePage: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Store
        </Typography>
        <Typography align="center" color="textSecondary" component="p">
          Please stay tuned for further Instructions
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {items.map((item) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={item.title} xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  title={item.title}
                  subheader={item.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={item.title === "EnKeep" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {item.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined" color="primary">
                    <Link to={item.link} className={classes.buttonlink}>{item.buttonText}</Link>
                  </Button>
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

export default StorePage;
