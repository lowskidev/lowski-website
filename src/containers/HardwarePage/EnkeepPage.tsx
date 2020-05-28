import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";
import EtherNodeIMG from "../../assets/EtherNode_4.png";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    "id": `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const EnkeepPage: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      {/* Hero unit */}
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="EnKeep" {...a11yProps(0)} />
          <Tab label="The Future" {...a11yProps(1)} />
          <Tab label="Supported Blockchains" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography align="center">
          <img src={EtherNodeIMG} alt="ethernode" height="250" />
        </Typography>
        <TabPanel value={value} index={0}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            EnKeep
          </Typography>
          <br />
          <Typography align="left" color="textSecondary" component="p">
            The EnKeep is a Single Board computer based on the ROCKPro64 made by pine64.org
            It comes with 4GB of LDDR4 Ram and ARM64 Hexa-Core CPU.
          </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            The EnKeep comes preloaded with EnOS, a Ubuntu based linux distro preloaded with
            everything you need to run blockchain nodes.
          </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            We have also developed a JSON-RPC2.0 API we call enAPI, which is written in nodeJS
            and uses docker preloaded in EnOS to run blockchain nodes in.
          </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            To controll all of this we have developed a UI called EnUI which connects to your EnKeep
            and allows you to easily and run Ethereum based nodes for which we're currently utilizing Multi-Geth
          </Typography>
          <br />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            The Future
          </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            In todays world where Blockchain technologies promise to bring upon us the ERA of Web3
            The Decentrilized internet. At Ethernode we've noticed that there is one major component
            missing in this idea of decentrilized web of the future.
          </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            And that's that most users that we expect to adopt these new web3 blockchain technologies that are build to be used in a
            decentrilized manner are in fact used in a very centrilized way. The idea of blockchain is that every one who wants to
            participate in a blockchain network by either utilizing a dapp like a wallet to manage their funds or public/private key pairs
            needs a blockchain node with it's ledger synced and syncing at all times.
         </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            As a result projects like Infura have been born, where something like 60%+ of all ETH blockchain nodes/infrastructure
            is operated on AWS, not very decentrilized really but it does get a job done. And many other great tools and
            ideas coming out to help developers jump into dapp development with minial learning curve on how the blockchain
            technology works, or operating expensive servers to run and sync ther blockchain nodes, which at times can take hours
            and even days to sync up. For clarification, the EnKeep does not solve the sync waiting times, but it does provide you
            with the freedom of just setup your blockchain node and let it run on it's own dedicated hardware always on always syncing.
          </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            Developers of different wallet applications and dapps have even went to extens of allowing users to run
            the node sfotware on their local computers, in light modes and fast sync modes. But lets be honest here.
            Syncing a blockchain node takes a toll on your system even if you're running 16Gb of DDR Ram and a
            beastul I7/I9 intel CPU. But like mentioned above, you're node can tkae hours or even days to sync.
            And a user doesn't always want to run their computer 24/7 with an extra 30%+ of resources always being eaten away.
          </Typography>
          <br />

          <Typography align="left" color="textSecondary" component="p">
            So at Ethernode we designed the EnKeep, a device that hooks up to your chouse networks router at its current
            configuration and can run all your blockchain nodes for you localy. Which you can administer and monitor
            through our simple to use desktop application EnUI.

            And once you're running your own blockchain nodes, this gives you the power and freedom to hook up all your dapps,
            wallets, and even Metamask. Localy on your own network node without relying on anyones infrastructure or having to
            trust that their nodes are always on the proper chain and updated to the latest client version.
        </Typography>
          <br />
          <Typography align="left" color="textSecondary" component="p">
            With the EnKeep in your house you can administer all of that in your own house through enUI.
        </Typography>
          <br />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            EnKeep
          </Typography>
          <br />
          <Typography align="left" color="textSecondary" component="p">
            The EnKeep out of the box will support the following clients and their networks
          <br /><br />
            <a href="https://github.com/multi-geth/multi-geth" target="_blank"><b>Multi-Geth</b></a> - Ethereum Classic, Ethereum, Kotti Testnet and many more.
          <br /><br />
            <a href="https://iohk.zendesk.com/hc/en-us/categories/360002383814-Shelley-Networked-Testnet" target="_blank"><b>Jormungandr</b></a> - Currently Cardano Nightly Testnets
          <br /><br />
            <a href="https://althea.net/" target="_blank">Gaia</a> - Althea test net
          </Typography>
        </TabPanel>
        <Typography>
          <Link to="/store" className={classes.buttonlink}><Button fullWidth variant="outlined" color="primary">Pre Order(Coming Soon)</Button></Link>
        </Typography>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment >
  );
};

export default EnkeepPage;
