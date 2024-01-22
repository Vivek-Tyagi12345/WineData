import React, { useEffect, useState } from 'react';
import './App.css';


import wineData from './wineData';

const calculateMean = (data) => {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
};

export const calculateMedian = (data) => {
  const sortedData = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 === 0
    ? (sortedData[mid - 1] + sortedData[mid]) / 2
    : sortedData[mid];
};

export const calculateMode = (data) => {

    const frequencyMap = {};
    data.forEach((num) => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });
    
    let maxFrequency = 0;
    for (const num in frequencyMap) {
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
      }
    }
    
    const modes = [];
    for (const num in frequencyMap) {
      if (frequencyMap[num] === maxFrequency) {
        modes.push(Number(num)); 
      }
    }
    
    return modes;
  };
  
  
  


export const calculateGamma = (point) => {
  return (point.Ash * point.Hue) / point.Magnesium;
};

export const StatTable = ({ data, property }) => {
  const mean = calculateMean(data);
  const median = calculateMedian(data);
  const mode = calculateMode(data);

  return (
    <div>
      <h2>{`${property} Statistics`}</h2>
      <table style={{ borderCollapse: 'collapse', width: '50%' ,marginLeft:'25%'}}>
        <thead >
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Measure</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Class1</th>
            
          </tr>
        </thead>
        <tbody style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{property} Mean</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{mean?.toFixed(3)}</td>
        
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{property} Median</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{median?.toFixed(3)}</td>
         
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{property} Mode</td>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{mode.map((value) => value?.toFixed(3)).join(', ')}</td>
  
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatTable;