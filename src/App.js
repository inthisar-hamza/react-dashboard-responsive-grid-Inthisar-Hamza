import "./styles.css";
import React from "react";

import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

import { withSize } from "react-sizeme";
import Components from "./pages/Components";

export default function App() {
  const onSize = (size) => {
    console.log("MyMessageComponent has a width of", size.width);
  };

  return (
    <Router>
      <div className="App">
        <h2>Hello! from Inthisar-Hamza </h2>
        <h3>React Routing and Reusable Components with Responsive Grid</h3>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/components">Components</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/widgets">Widgets</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/components">
            <Components />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/widgets">
            <Widgets />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Dashboard() {
  return <h2>Dashboard Page </h2>;
}

function Analytics() {
  return <h2>Analytics Passge</h2>;
}

function Widgets() {
  return <h2>Widgets Page</h2>;
}
