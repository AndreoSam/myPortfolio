import './App.css';
import Routing from './Redux/Routing/Routing';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const timer = setTimeout(() => window.scrollTo(0, 0), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
