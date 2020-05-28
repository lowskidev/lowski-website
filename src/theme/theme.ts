import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: any) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: "none",
    },
  },
  "root": {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  "appBar": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "toolbar": {
    flexWrap: "wrap",
  },
  "toolbarTitle": {
    flexGrow: 1,
  },
  "navlink": {
    "margin": theme.spacing(1, 1.5),
    "textDecoration": "none",
    "textTransform": "uppercase",
    "color": "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "buttonlink": {
    "margin": theme.spacing(1, 1.5),
    "textDecoration": "none",
    "textTransform": "uppercase",
    "color": "black",
    "&:hover": {
      textDecoration: "none",
    },
  },
  "heroContent": {
    padding: theme.spacing(8, 0, 6),
  },
  "cardHeader": {
    backgroundColor: theme.palette.grey[200],
  },
  "cardPricing": {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  "footer": {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
