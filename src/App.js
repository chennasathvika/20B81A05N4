// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterCompany from './components/RegisterCompany';
import TrainDetails from './components/TrainDetails';
import AllTrains from './components/AllTrains';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<RegisterCompany/>} />
          <Route path="/trains/:trainNumber" element={<TrainDetails/>} />
          <Route path="/trains" element={<AllTrains/>} />
        </Routes>
      </div>
  );
}

export default App;

