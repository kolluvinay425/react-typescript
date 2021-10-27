import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
    
      <header className="App-header">
        <h1>
         hello this is ts project
        </h1>
      <Home name="vinay" country="india"/>
      </header>
      
    </div>
  );
}

export default App;
