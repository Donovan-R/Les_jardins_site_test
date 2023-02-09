import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GiArtilleryShell, GiBirdHouse } from 'react-icons/gi';
import axios from 'axios';

const SinglePlant = () => {
  const [plantDetails, setPlantDetails] = useState([]);
  const { id } = useParams();
  const url = 'http://localhost:5000/api/v1/plants/';
  console.log(`${url}${id}`);
  const getSinglePlant = async () => {
    try {
      const {
        data: { plant: plant },
      } = await axios.get(`${url}${id}`);
      setPlantDetails(plant);
      console.log(plantDetails);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getSinglePlant();
  }, []);
  // const { name, img, plantation_start, plantation_fin, recolte_start } = plant;
  return (
    <section className='section'>
      <h2>{plantDetails.name}</h2>
      <div>
        <img src={plantDetails.img} alt={plantDetails.name} />
      </div>
    </section>
  );
};

export default SinglePlant;
