import style from './HeroPage.module.css';
import image1 from '../images/NFT1.jpg';
import image2 from '../images/NFT2.jfif';

const Hero = () => {
  const html = (
    <div className={style.intro}>
      <div className={style.main_text}>
        <div className={style.main_text_cont}>
          <h1 className={style.main_heading}>
            Uncover the Secrets of Your NFT Collection
          </h1>
          <p className={style.main_paragraph}>
            Discover hidden treasures and unlock the full potential of your NFT collection
            with our Ethereum wallet explorer. Explore, analyze, and connect with the
            NFT community like never before.
          </p>
        </div>
      </div>
      <div className={style.main_images}>
        <img className={style.first_image} src={image1} alt="Doctor laughing" />
        <img className={style.second_image} src={image2} alt="Doctor laughing" />
      </div>
    </div>
  );
  return html;
};

export default Hero;
