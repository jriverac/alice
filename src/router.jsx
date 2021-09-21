import React from "react";
import About from "./about/about";
import EditCustomer from "./customers/customer-edit";
import CustomerIndex from "./customers/customer-index";
import UserIndex from "./users/index.tsx";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import

function Home() {
  return <h2>Home</h2>;
}

// function About() {
//   return <About />;
// }



export default function Navigation() {
  const props = require("./resources/customer.json");
  const customers = require("./resources/customers.json");
  const stuff = 'some stuff';
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customer-edit">Edit Customer</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customer-edit">
            <EditCustomer {...props} />
          </Route>
          <Route path="/customers">
            <CustomerIndex {...customers} />
          </Route>
          <Route path="/users">
            <UserIndex />
          </Route>
          <Route path="/about">
            <About stuffa={stuff} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
