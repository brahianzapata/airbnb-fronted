import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from './pages/Home'
import { Routes } from './pages/Routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
