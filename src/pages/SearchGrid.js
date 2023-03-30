/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Card from '../components/card/Card';
import Modal from '../components/modal/Modal';
import Loading from '../components/loading/Loading';
import style from './styles.module.css';

const SearchGrid = () => {
  const assets = useSelector((store) => store.assets);
  const singleAsset = useSelector((store) => store.singleAsset);
  const placeholderImage = 'https://via.placeholder.com/500';

  const [modalInfo, setModalInfo] = useState('');
  const [showModal, setShowModal] = useState(false);

  const setActiveModal = (info) => {
    setModalInfo(info);
    setShowModal(true);
  };

  const cancelModal = () => {
    setShowModal(false);
  };

  if (assets === 'loading') {
    return <Loading />;
  }
  if (assets.length === 0 || !assets) {
    return (
      <div className={style.empty}>
        Nothing found
      </div>
    );
  }

  if (assets === 'Bad error') { return ('Bad Error'); }

  const html = (
    <div>
      <div className={style.cards}>
        {assets.map((asset) => {
          const nasaJsx = (
            <Card
              id={asset.id}
              name={asset.name}
              description={asset.description.toLowerCase()}
              image={asset.image ? asset.image : placeholderImage}
              address={asset.address}
              website={asset.website}
              floor={asset.floorPrice}
              buttonClick={setActiveModal}
            />
          );
          return nasaJsx;
        })}
      </div>
      <div className={showModal ? style.show : style.none}>
        <div className={style.overlay} onClick={cancelModal}>
          <Modal
            id={modalInfo.id}
            name={modalInfo.name}
            description={modalInfo.description}
            image={singleAsset.image ? singleAsset.image : modalInfo.image}
            floor={modalInfo.price}
            cancel={cancelModal}
            opensea={singleAsset.opensea}
          />
        </div>
      </div>
    </div>
  );

  return html;
};

export default SearchGrid;
