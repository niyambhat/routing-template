import React from 'react';
import logo from './logo.svg';
import './App.css';
import Views from './views';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Views/>
      </BrowserRouter>
    </div>
  );
}

export default App;
