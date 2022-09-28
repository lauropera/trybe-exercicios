import React from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import TrafficProvider from './context/TrafficProvider';
import './App.css';

function App() {
  return (
    <div className="container">
      <TrafficProvider>
        <Cars />
        <TrafficSignal />
      </TrafficProvider>
    </div>
  );
}

export default App;
