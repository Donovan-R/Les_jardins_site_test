import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GiArtilleryShell, GiBirdHouse } from 'react-icons/gi';
import axios from 'axios';

const SinglePlant = () => {
  const [plantDetails, setPlantDetails] = useState([]);
  const { id } = useParams();
  const url = 'http://localhost:5000/api/v1/plants/';

  const getSinglePlant = async () => {
    try {
      const {
        data: { plant: plant },
      } = await axios.get(`${url}${id}`);
      setPlantDetails(plant);
      console.log(plantDetails);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  useEffect(() => {
    getSinglePlant();
  }, []);

  const {
    name,
    img,
    sowing_date_start,
    sowing_date_end,
    plantation_date_start,
    plantation_date_end,
    plantation_details,
    crop,
    crop_rotation,
  } = plantDetails;
  return (
    <>
      <h2>{name}</h2>
      <section
        // style={{
        //   backgroundImage: 'url(' + plantDetails.img + ')',
        //   backgroundAttachment: 'fixed',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        // }}
        className='singlePlantSection'
      >
        <div className='plantsTitle'>
          <div className='singlePlantPictures'>
            <img src={img} alt={name} className='singlePlantPicture' />
            <img src={img} alt={name} className='singlePlantPicture' />
            <img src={img} alt={name} className='singlePlantPicture' />
          </div>{' '}
        </div>
        <div className='underline'></div>

        <div className='plantsDetails'>
          <div className='semisDetails'>
            <h3>
              les semis se font sous abri du {sowing_date_start} au{' '}
              {sowing_date_end}
              {/* {semis_terre_start? et en pleine terre du{' '}
            {plantDetails.semis_terre_start} au {plantDetails.semis_terre_fin}: } */}
            </h3>
          </div>
          <div className='plantationDetails'>
            <h3>
              la plantation se fait du {plantation_date_start} au{' '}
              {plantation_date_end}
            </h3>
            <p>{plantation_details}</p>
          </div>
          <div className='culturePlant'>
            <h3>conseils pour la culture :</h3>
            <p>{crop}</p>
            <h4>rotation des cultures</h4>
            <p>{crop_rotation}</p>
          </div>

          <div className='cohabPlants'>
            <h3>cohabitation</h3>
            <h4>ce plant pourra cohabiter avec :</h4>
            <p></p>
            <h4>a contrario, il vaudra mieux éviter de l'associer à :</h4>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePlant;
