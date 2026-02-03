import "./App.css";
import MovieCard from "./components/MovieCard.jsx";
function App() {
  const movieNumber = 1;
  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Graduation", release_date: "2008" }} />
      ) : (
        <MovieCard
          movie={{ title: "The End of Evangelion", release_date: "1997" }}
        />
      )}
    </>
  );
}

export default App;
