import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="h-full bg-desk bg-cover bg-bottom bg-no-repeat">
      <div className='height-10'>
      <Header/>
      </div>
      <div className='height-90'>
      <Home/>
      </div>
    </div>
  );
}

export default App;
