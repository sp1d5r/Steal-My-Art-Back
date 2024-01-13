import React from 'react';
import { Landing } from './pages/Landing';
import './styles/container.css';

function App() {
  return (
    <div className="App"> 
      <Landing enableAnimation={true}/>
    </div>
  );
}

export default App;