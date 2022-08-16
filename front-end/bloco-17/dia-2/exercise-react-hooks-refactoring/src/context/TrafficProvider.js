import React, { useState } from 'react';
import TrafficContext from './TrafficContext';

export default function TrafficProvider({ children }) {
  const [signal, setSignal] = useState({ color: 'red' });
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car, side) => setCars({
    ...cars,
    [car]: side,
  });

  const changeSignal = (color) => setSignal({ color });
  
  const valueContext = {
    cars: { ...cars },
    signal,
    moveCar,
    changeSignal,
  };

  return (
    <TrafficContext.Provider value={valueContext}>
      {children}
    </TrafficContext.Provider>
  );
}
