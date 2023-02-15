import { Link } from 'react-router-dom';

const PlantsList = ({ plant }) => {
  const {
    plant_id,
    name,
    img,
    plantation_date_start,
    plantation_date_end,
    harvest_date_start,
  } = plant;
  console.log(plant_id);
  return (
    <article className='plantCard' id={plant_id}>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <div className='plant-footer'>
        <h3>{name}</h3>
        <h4>
          <b>plantation :</b> du {plantation_date_start} au{' '}
          {plantation_date_end}
        </h4>
        <h4>
          <b>récolte</b> à partir du : {harvest_date_start}
        </h4>
        <div className='detailsBtnContainer'>
          <Link to={`/plantations/${plant_id}`} className='detailsBtn'>
            détails
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PlantsList;
