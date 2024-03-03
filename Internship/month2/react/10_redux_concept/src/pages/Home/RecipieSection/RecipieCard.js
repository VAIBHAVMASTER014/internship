
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from '../../../redux/foodSlice';

const RecipieCard = ({ foodItem }) => {
  const imgPath = `/apiImages/${foodItem.image}`;
  const dispatch = useAppDispatch();

  
  return (
    <div className="recipie-card">
      <img
        src={imgPath}
        alt=""
      />
      <div className="card-content">
        <div className="recipie-card-title">
          <span>{foodItem.title}</span>
          <p>32 mins</p>
        </div>
        <p className="recipie-card-description">{foodItem.description}</p>
        <div className="ngn">
          <p>{foodItem.price} Rs</p>
        </div>
      </div>
      <div className="card-btn">
        <button><FontAwesomeIcon icon={faLock} /></button>
      </div>
    </div>
  );
};

export default RecipieCard;
