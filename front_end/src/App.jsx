import Shop from './components/Shop'
import { useState, useEffect } from 'react';

import './App.css'

function App() {
  const [units, setUnits] = useState([]);
  const [rarities, setRarities] = useState([]);
  const rarityMap= {};
  rarities.forEach((rarity) => {
    rarityMap[rarity._id] = rarity;
  });



  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await fetch('http://localhost:3000/', { mode: 'cors' });
        if (!response.ok) {
          throw new Error('Issue with network response');
        }
        const data = await response.json();
        setUnits(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchRarities = async () => {
      try {
        const response = await fetch('http://localhost:3000/rarities', { mode: 'cors' });
        if (!response.ok) {
          throw new Error('Issue with network response');
        }
        const data = await response.json();
        setRarities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUnits();
    fetchRarities();
  }, []);

  return (
    <div id='main'>
      <div id='gameboard'></div>
      <div>
        <Shop units ={units} rarities={rarityMap}/>
      </div>
    </div>
  )
}

export default App
