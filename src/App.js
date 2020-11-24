import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
// components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from './components/layout/Header';
// state
import WeatherState from './context/weather/WeatherState';

const App = () => {
  return (
    <WeatherState>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </WeatherState>
  );
};

export default App;
