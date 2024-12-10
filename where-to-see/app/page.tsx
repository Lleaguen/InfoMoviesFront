import MovieList from '../app/components/MovieList';
import Banner from './components/Banner';
import Header from './components/Head';

const HomePage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <MovieList />
    </>
  );
};

export default HomePage;
