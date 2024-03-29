import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Keynotes from "./Keynotes";
import CFA from "./call-for-activities/CFA";
import CFP from "./call-for-papers/CFP";
import CFW from "./call-for-workshops/CFW";
import PaperAwards from "./paper-awards/PaperAwards";
import Program from "./conference-program/Program";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/keynotes">
        <Keynotes />
      </Route>
      <Route exact path="/call-for-papers">
        <CFP />
      </Route>
      <Route exact path="/call-for-workshops">
        <CFW />
      </Route>
      <Route exact path="/call-for-activities">
        <CFA />
      </Route>
      <Route exact path="/paper-awards">
        <PaperAwards />
      </Route>
      <Route exact path="/conference-program">
        <Program />
      </Route>
    </Switch>
  );
}
