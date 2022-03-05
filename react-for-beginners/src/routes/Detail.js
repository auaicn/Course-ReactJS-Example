import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      {loading ? <h1>Loading</h1> : null}
      {loading ? null : (
        <div>
          <h1>{movie.title_long}</h1>
          <h3>Rating: {movie.rating}</h3>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <h3>Summary</h3>
          <p> {movie.description_intro}</p>
          {/* <img src={coverImgageSource} alt={titleWithYear + "image"}></img> */}
        </div>
      )}
    </div>
  );
};

export default Detail;
