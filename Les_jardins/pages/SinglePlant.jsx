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
    } catch (error) {
      console.log(error.response.message);
    }
  };

  useEffect(() => {
    getSinglePlant();
  }, []);
  // const { name, img, plantation_start, plantation_fin, recolte_start } = plant;
  return (
    <section className='section sectionsSinglePlant'>
      <div className='plantsTitle'>
        <h2>{plantDetails.name}</h2>
        <img src={plantDetails.img} alt={plantDetails.name} />
        <div className='underline'></div>
      </div>

      <div className='plantsDetails'>
        <div className='semisDetails'>
          <h3>
            les semis se font sous abri du {plantDetails.semis_abri_start} au{' '}
            {plantDetails.semis_abri_fin}
            {/* {semis_terre_start? et en pleine terre du{' '}
            {plantDetails.semis_terre_start} au {plantDetails.semis_terre_fin}: } */}
          </h3>
        </div>
        <div className='plantationDetails'>
          <h3>
            la plantation se fait du {plantDetails.plantation_start} au{' '}
            {plantDetails.plantation_fin}
          </h3>
          <p>{plantDetails.plantation_details}</p>
        </div>
        <div className='culturePlant'>
          <h3>conseils pour la culture :</h3>
          <p>{plantDetails.culture}</p>
          <h4>rotation des cultures</h4>
          <p>{plantDetails.rotation_cultures}</p>
        </div>

        <div className='cohabPlants'>
          <h3>cohabitation</h3>
          <h4>ce plant pourra cohabiter avec :</h4>
          <p>{plantDetails.friends_plants}</p>
          <h4>a contrario, il vaudra mieux éviter de l'associer à :</h4>
          <p>{plantDetails.ennemy_plants}</p>
        </div>
      </div>
    </section>
  );
};

export default SinglePlant;
