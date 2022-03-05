import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading</h1> : null}
      {loading ? null : (
        <div>
          <h1>Loaded {movies.length} movies</h1>
          <hr />
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              titleWithYear={movie.title_long}
              genres={movie.genres}
              summary={movie.summary}
              coverImgageSource={movie.medium_cover_image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
