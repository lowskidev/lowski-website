
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ReusableProvider } from "reusable";

import HomePage from "./containers/HomePage/HomePage";
import SoftwarePage from "./containers/SoftwarePage/SoftwarePage";
import AboutUsPage from "./containers/AboutUsPage/AboutUsPage";
import HardwarePage from "./containers/HardwarePage/HardwarePage";
import StorePage from "./containers/StorePage/StorePage";
import EnkeepPage from "./containers/HardwarePage/EnkeepPage";
import EnuiPage from "./containers/SoftwarePage/EnuiPage";
import EnapiPage from "./containers/SoftwarePage/EnapiPage";
import EnosPage from "./containers/SoftwarePage/EnosPage";
import StakePage from "./containers/StakePage/StakePage";
const routing = (
  <ReusableProvider>
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/home" />
        )} />
        <Route path="/home" component={HomePage} />
        <Route path="/software" component={SoftwarePage} />
        <Route path="/enui" component={EnuiPage} />
        <Route path="/enapi" component={EnapiPage} />
        <Route path="/enos" component={EnosPage} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/hardware" component={HardwarePage} />
        <Route path="/enkeep" component={EnkeepPage} />
        <Route path="/store" component={StorePage} />
        <Route path="/stakepage" component={StakePage} />
      </Switch>
    </HashRouter>
  </ReusableProvider>
);

ReactDOM.render(routing, document.getElementById("root"));