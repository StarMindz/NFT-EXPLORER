import SearchSection from './SearchSection';
import Hero from './HeroPage';

const Home = () => {
  const html = (
    <div id="home">
      <Hero />
      <SearchSection />
    </div>
  );

  return html;
};

export default Home;
