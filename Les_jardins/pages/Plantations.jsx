import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegPaperPlane } from 'react-icons/fa';
import { GiArtilleryShell, GiBirdHouse } from 'react-icons/gi';
import axios from 'axios';
import PlantsList from '../components/PlantsList';

const Plantations = () => {
  const url = 'http://localhost:5000/api/v1/plants/';
  const [plantationsTab, setPlantationsTab] = useState([]);
  const getAllPlants = async () => {
    try {
      const { data } = await axios.get(url);

      setPlantationsTab(data.plants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPlants();
  }, []);

  return (
    <section className='plantsSection'>
      <h2>Plantations</h2>
      <div className='plantsTab'>
        {plantationsTab.map((plant) => (
          <PlantsList plant={plant} key={plant.plant_id} />
        ))}
      </div>

      <Link to='/'>
        <span className='backHome'>
          <GiBirdHouse />
        </span>
      </Link>

      <a href='#' className='goUp'>
        <FaRegPaperPlane />
      </a>
    </section>
  );
};

export default Plantations;
