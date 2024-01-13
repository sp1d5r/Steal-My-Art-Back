import React from 'react';
import { Landing } from './pages/Landing';
import './styles/container.css';

function App() {
  return (
    <div className="App"> 
      <Landing enableAnimation={true}/>
      <div className='h-[1000px]'>
      </div>
    </div>
  );
}

export default App;