
import React, { useEffect, useState } from 'react';
import './App.css';
import wineData from './wineData';
import StatTable from './util';
import { calculateGamma } from './util';
function App() {
  const [flavanoidsData, setFlavanoidsData] = useState<any[]>([]); 
  const [gammaData, setGammaData] = useState<any[]>([]); 

  useEffect(() => {

    const flavanoids : number[]= wineData.map((wine) => wine.Flavanoids);
    setFlavanoidsData(flavanoids);

 
    const gamma = wineData.map(calculateGamma);
    setGammaData(gamma);
  }, []);

  return (
    <div className="App">
      <StatTable data={flavanoidsData} property="Flavanoids" />
      <StatTable data={gammaData} property="Gamma" />
    </div>
  );
}

export default App;
