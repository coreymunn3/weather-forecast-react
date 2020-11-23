import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
// components
import Home from './components/pages/Home';
import About from './components/pages/About';
import UserGuide from './components/pages/UserGuide';
import Header from './components/layout/Header';
// state
import WeatherState from './context/weather/WeatherState';

const App = () => {
  return (
    <WeatherState>
      <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/guide' component={UserGuide} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </WeatherState>
  );
};

export default App;
