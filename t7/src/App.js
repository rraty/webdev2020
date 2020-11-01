import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.scss";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
