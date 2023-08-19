// src/TrainDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TrainDetails = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState({});

  useEffect(() => {
    const fetchTrainDetails = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144:80/train/trains/${trainNumber}`
        );
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    };

    fetchTrainDetails();
  }, [trainNumber]);

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train Name: {train.trainName}</p>
      {/* Display other train details */}
    </div>
  );
};

export default TrainDetails;
