/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import Button from '../button/Button';
import style from './Modal.module.css';

const Modal = (props) => {
  const {
    id, name, description, image, floor, cancel, opensea,
  } = props;

  const handleRedirect = () => {
    window.location.href = opensea;
  };

  const html = (
    <div className={style.modal_container} id={id} onClick={(e) => e.stopPropagation()}>
      <img src={image} alt="Nft art" className={style.image} />
      <div className={style.infos}>
        <h1 className={style.name}>{name}</h1>
        <p className={style.description}>{description}</p>
        <p className={style.price}>
          Floor Price
          {' '}
          {floor}
        </p>
        <div className={style.button} onClick={handleRedirect}>
          <Button
            text="Buy"
            btnType={1}
          />
        </div>
      </div>
      <div className={style.cancel} onClick={cancel}>X</div>
    </div>
  );

  return html;
};

Modal.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  floor: PropTypes.number,
  cancel: PropTypes.func,
  opensea: PropTypes.string,
};

Modal.defaultProps = {
  id: '',
  name: '',
  description: '',
  image: '',
  floor: '',
  cancel: '',
  opensea: '',
};

export default Modal;
