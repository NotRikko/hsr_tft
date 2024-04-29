import Shop from './components/Shop'
import { useState, useEffect } from 'react';

import './App.css'

function App() {
  const [units, setUnits] = useState([]);
  const [rarities, setRarities] = useState([]);
  const [origins, setOrigins] = useState([]);
  const [classes, setClasses] = useState([]);

  const rarityMap= {};
  const originMap = {};
  const classMap = {};

  rarities.forEach((rarity) => {
    rarityMap[rarity._id] = rarity;
  });
  origins.forEach((origin) => {
    originMap[origin._id] = origin;
  });
  classes.forEach((cls) => {
    classMap[cls._id] = cls
  });

  const fetchData = async (url) => {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error('Issue with network response');
    }
    return response.json();
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [unitsData, raritiesData, originsData, classesData] = await Promise.all([
          fetchData('http://localhost:3000/'),
          fetchData('http://localhost:3000/rarities'),
          fetchData('http://localhost:3000/origins'),
          fetchData('http://localhost:3000/classes')
        ]);

        setUnits(unitsData);
        setRarities(raritiesData);
        setOrigins(originsData);
        setClasses(classesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div id='main'>
      <div id='gameboard'></div>
      <div>
        <Shop 
          units ={units}
          rarities={rarityMap}
          origins={originMap}
          classes={classMap}
        />
      </div>
    </div>
  )
}

export default App
