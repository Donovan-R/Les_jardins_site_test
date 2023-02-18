import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GiArtilleryShell, GiBirdHouse } from 'react-icons/gi';
import axios from 'axios';

const SinglePlant = () => {
  const [plantDetails, setPlantDetails] = useState([]);
  const [sowingInside, setSowingInside] = useState([]);
  const [sowingOutside, setSowingOutside] = useState([]);
  const { id } = useParams();
  const url = 'http://localhost:5000/api/v1/plants/';

  const getSinglePlant = async () => {
    try {
      const {
        data: {
          plant: plant,
          sowing_inside: sowing_inside,
          sowing_outside: sowing_outside,
        },
      } = await axios.get(`${url}${id}`);
      setPlantDetails(plant);
      if (sowing_inside) {
        setSowingInside(sowing_inside);
      }

      if (sowing_outside) {
        setSowingOutside(sowing_outside);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePlant();
  }, []);
  const {
    plant_name,
    img,
    plantation_date_start,
    plantation_date_end,
    plantation_details,
    sowing_details,
    crop,
    crop_rotation,
  } = plantDetails;

  const { sowing_date_start_inside, sowing_date_end_inside } = sowingInside;
  const { sowing_date_start_outside, sowing_date_end_outside } = sowingOutside;

  return (
    <>
      <h2>{plant_name}</h2>
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
            <img src={img} alt={plant_name} className='singlePlantPicture' />
            <img src={img} alt={plant_name} className='singlePlantPicture' />
            <img src={img} alt={plant_name} className='singlePlantPicture' />
          </div>{' '}
        </div>
        <div className='underline'></div>

        <div className='plantsDetails'>
          <div className='semisDetails'>
            <h3>
              {sowing_date_start_inside &&
                `les semis se font sous abri du ${sowing_date_start_inside} au
                  ${sowing_date_end_inside} `}
              <br />
              {sowing_date_start_outside &&
                `les semis se font en pleine terre du
              ${sowing_date_start_outside} au ${sowing_date_end_outside}`}
            </h3>
            <p>{sowing_details}</p>
          </div>
          <div className='plantationDetails'>
            <h3>
              la plantation se fait du {plantation_date_start} au
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
