/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../button/Button';
import style from './Card.module.css';
import { fetchSingleAsset } from '../../redux/single/singleSlice';

const Card = (props) => {
  const {
    id, name, description, image, address, floor, buttonClick,
  } = props;

  const dispatch = useDispatch();

  const HandleClick = (contractAddress, token) => {
    buttonClick(props);
    const data = {
      address: contractAddress,
      id: token,
    };
    dispatch(fetchSingleAsset(data));
  };
  const html = (
    <div className={style.main_container} id={id}>
      <div className={style.image_container}>
        <img src={image} alt="Nft art" className={style.image} />
        <p className={style.price}>{`${floor} Eth`}</p>
      </div>
      <div className={style.infos}>
        <h1 className={style.name}>
          {name}
        </h1>
        <p className={style.description}>
          {description}
          ...
        </p>
        <div onClick={() => HandleClick(address, id)}>
          <Button
            text="Details"
            btnType={2}
          />
        </div>
      </div>
    </div>
  );

  return html;
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.string,
  floor: PropTypes.number,
  buttonClick: PropTypes.func,
};

Card.defaultProps = {
  id: '',
  name: '',
  description: '',
  image: '',
  address: '',
  floor: '',
  buttonClick: '',
};

export default Card;
