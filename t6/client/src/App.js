import React from 'react';
import { positions, Provider as AlertProvider, transitions } from 'react-alert';
import { Container, Alert } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import ViewAllAthlete from './views/athlete/view/ViewAllAthlete';
import AthleteContainer from './containers/AthleteContainer';

import './styles/app.scss';

const AlertTemplate = ({
  // eslint-disable-next-line react/prop-types
  style, options: { type }, message, close,
}) => (
  <div style={style}>
    <Alert color={type === 'error' ? 'danger' : type} toggle={close}>
      {message}
    </Alert>
  </div>
);

const options = {
  position: positions.TOP_RIGHT,
  timeout: 6000,
  offset: '1.6rem',
  transition: transitions.FADE,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>

      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
              <NavLink exact to="/" className="nav-item nav-link disabled">Home</NavLink>
              <NavLink to="/athlete" className="nav-item nav-link">Urheilijat</NavLink>
            </div>
          </nav>
          <Container>
            <Switch>
              <Route exact path="/">
                <Redirect to="/athlete" />
              </Route>
              <Route exact path="/athlete">
                <ViewAllAthlete />
              </Route>
              <Route path="/athlete/add">
                <AthleteContainer />
              </Route>
              <Route path="/athlete/:id">
                <AthleteContainer />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </AlertProvider>
  );
}

export default App;
