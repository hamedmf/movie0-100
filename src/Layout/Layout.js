import SingleMoviePage from "component/SingleMoviePage/SingleMoviePage";
import React from "react";
import { Route, Switch } from "react-router";
import About from "../page/About";
import Contact from "../page/Contact";
import Home from "../page/Home";

export default function Layout() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/movie/:id">
        <SingleMoviePage />
      </Route>
    </Switch>
  );
}
