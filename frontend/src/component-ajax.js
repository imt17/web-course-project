import React, { useState, useEffect } from 'react';

const CityData = () => {
  const [newYorkData, setNewYorkData] = useState([]);
  const [fetchDataOnButtonClick, setFetchDataOnButtonClick] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/new-york-data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setNewYorkData(data);
        console.log('Fetched data:', data);
        setNumber(prevNumber => prevNumber + 1); // Increment number to force re-render
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (fetchDataOnButtonClick) {
      fetchData(); 
      const intervalId = setInterval(fetchData, 10000); // Set interval to fetch data every 10 seconds
      return () => clearInterval(intervalId); 
    }
  }, [fetchDataOnButtonClick]); // Run effect when fetchDataOnButtonClick changes

  // Function to start fetching data and set fetchDataOnButtonClick to true
  const handleButtonClick = () => {
    setFetchDataOnButtonClick(true);
  };

  return (
    <div>
      <h1>New York City Attractions</h1>
      <button onClick={handleButtonClick}>Fetch Data</button>
      <ul>
        {newYorkData.map(attraction => (
          <li key={attraction.id}>
            <h2>{attraction.name}</h2>
            <p><strong>Location:</strong> {attraction.location}</p>
            <p><strong>Established:</strong> {attraction.established}</p>
            <p>{attraction.description}</p>
          </li>
        ))}
      </ul>
      {fetchDataOnButtonClick && <p>Number: {number}</p>}
    </div>
  );
};

export default CityData;
