import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../theme/theme";
import { Footer } from "../../components/footerComp";
import { Navigation } from "../../components/navComp";
import EtherNodeIMG from "../../assets/EtherNode_4.png";
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

const HardwareSpecsPage: React.FC = () => {
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
          <Tab label="Main Hardware" {...a11yProps(0)} />
          <Tab label="Our Relays" {...a11yProps(1)} />
          {/*
          <Tab label="Supported Blockchains" {...a11yProps(2)} />
          */}
        </Tabs>
      </AppBar>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <TabPanel value={value} index={0}>
          <Typography align="center">
            <img src="https://www.netdatavault.com/wp-content/uploads/2015/12/dedicated-hosting-image.png" alt="ethernode" height="250" />
          </Typography>
         
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            Bare Metal Machine
          </Typography>
          <br />
          <Typography align="left" color="textSecondary" component="p">
            Hardware Specs:<br/>
            2x Xeon-E5-2670 16 Cores each<br/> 
            Total of 32 Logical Processors<br/>
            132GB DDR3<br/>
            2x 1Tb SSD NVME in RAID1(Mirrored)<br/>
            2x 1Gbps ISP for redundancy<br/>
          </Typography>
          <br/>
          <Typography align="left" color="textSecondary" component="p">
            OS and Software: ESXi Type 1 Hypervisor.<br/>
            
            We chose to run ESXi because it is whats called a Type 1 hypervisor or "bare-metal hypervisor".
            A Type 1 hypervisor is proven in providing excellent performance and stability since it does
            not run inside Windows or any other operating system.
            <br/><br/>
            Type 1 hypervisors are an OS themselves, a very basic one on top of which you can run virtual machines.
            The physical machine the hypervisor is running on serves virtualization purposes only. You cannot use it
            for anything else.
            <br/><br/>
            Type 1 hypervisors are mainly found in enterprise environments.
            <br/><br/>
            This allows us to create virtual machines that are as close to bare metal as possible, while utilizing the
            the scalability and security of a hypervisor.
            <br/><br/>
            Currently we run Two block producing VM's on Debian 10, that are set to take over for each other if one was to go down or lose connectivity,
            and 4 Debian10 based VM's for 4 relay nodes. That communicate between each other and also our core nodes.
          </Typography>
          <br />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography align="center">
            <img src={EtherNodeIMG} alt="ethernode" height="250" />
          </Typography>
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            ROCKPro64 - Relays
          </Typography>
          <br />
          <Typography align="left" color="textSecondary" component="p">
            Being Blockchain and decentralization ethusiasts, we also run SBC type relay nodes in our home labs.
            <br/>
            These nodes are based on ROCKPro64 SBCs from pine64.org in the following configuration:
            <br/><br/>
            Rockchip RK3399 hexa-core ARM SOC<br/>
            4GB LPDDR4 Ram<br/>
            Debian 10<br/>
            1TB Samsung 970EVO PCIe NVMe SSD drive.
            <br/><br />
            This allows us to run our own Cardano nodes at home and also contribute extra relay node infrastrucutre accross the USA for BAKON Stake Pool.
            <br/><br/>
            Thank you for checking out Bakon(BKN) Stake Pool and hope to see you Delegate with us.
          </Typography>
          <br />
        </TabPanel>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment >
  );
};

export default HardwareSpecsPage;
