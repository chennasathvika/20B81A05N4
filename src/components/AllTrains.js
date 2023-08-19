import React, { useState, useEffect } from 'react';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);

  const url = 'http://20.244.56.144:80/train/trains'

  useEffect(() => {
    // Fetch train schedule data from API and set it to 'trains' state
    fetchTrainSchedule();
  }, []);

  const fetchTrainSchedule = async () => {
    try {
      // Fetch train schedule data from your backend API
      const response = await fetch(url);
      const data = await response.json();
      setTrains(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching train schedule:', error);
    }
  };

  const handleTrainSelection = (train) => {
    setSelectedTrain(train);
  };

  return (
    <div>
      <h2>Train Schedule</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id} onClick={() => handleTrainSelection(train)}>
            {train.name} - {train.departureTime}
          </li>
        ))}
      </ul>

      {selectedTrain && (
        <div>
          <h3>{selectedTrain.name}</h3>
          <p>Departure Time: {selectedTrain.departureTime}</p>
        </div>
      )}
    </div>
  );
};

export default AllTrains;