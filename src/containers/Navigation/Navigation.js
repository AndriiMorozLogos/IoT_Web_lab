import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkingWrapper } from "./Navigation.styles";
import Body from "../Body/Body";
import Catalog from "../Catalog/Catalog";
import Item from "../Item/Item"
const Navigation = () => (
  <Router>
    <LinkingWrapper>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Shop" activeClassName="selected">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/blog" activeClassName="selected">
            Information
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch>
      <Route path="/" exact component={Body}/>
        <Route path="/Shop" component={Catalog}/>
        <Route path="/blog">
          <div>information</div>
        </Route>
        <Route path="/contact">
          <div>information</div>
        </Route>
        <Route path="/item/:id"  component={Item} />
      </Switch>
    </LinkingWrapper>
  </Router>
);

export default Navigation;
