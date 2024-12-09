import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> THIS IS THE CLIINICA DOWNLOAD PAGE</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
        {/* <button style={{margin: '10px', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '5px'}}>Download for Windows</button> */}
        <a href="Cliinica.zip" download>
          <button style={{margin: '10px', padding: '10px', backgroundColor: 'blue', color: 'white', borderRadius: '5px'}}>Download for Mac</button>
        </a>
      </div>
    </div>
  );
}

export default App;
