import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about/us">Us</Link>
            </li>
            <li>
              <Link to="/about/careers">Careers</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about/us">
            <h2>About Us</h2>
          </Route>
          <Route path="/about/careers">
            <h2>Carrers</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
