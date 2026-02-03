import MovieCard from "../components/MovieCard";

const Home = () => {
  const movies = [
    { id: 1, title: "Vingadores", release_date: "2010" },
    { id: 2, title: "Pelé o Filme", release_date: "1980" },
    { id: 3, title: "Os Flinstones", release_date: "2010" },
  ];
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
