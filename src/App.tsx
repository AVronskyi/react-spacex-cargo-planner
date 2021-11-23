import React from 'react';
import { HashRouter as Router, } from 'react-router-dom';
import './App.scss'
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { CargoProvider } from './Context/CargoContext';

function App() {
  return (
    <CargoProvider>
      <Router>
        <div className="App">
        <Header />
        <Navigation />
        </div>
      </Router>

    </CargoProvider>
  );
}

export default App;
  