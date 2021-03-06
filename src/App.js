import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
// css
import './App.scss';
// components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
// state
import WeatherState from './context/weather/WeatherState';
import ImageState from './context/image/ImageState';

const App = () => {
  return (
    <WeatherState>
      <ToastProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/about' component={About} />
            <Route path='/'>
              <ImageState>
                <Home />
              </ImageState>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ToastProvider>
    </WeatherState>
  );
};

export default App;
