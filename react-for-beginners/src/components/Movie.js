import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, titleWithYear, genres, summary, coverImgageSource }) {
  return (
    <div>
      <img src={coverImgageSource} alt={titleWithYear + "image"}></img>
      <Link to={"movie/" + id}>
        <h3>{titleWithYear}</h3>
      </Link>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  titleWithYear: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  coverImgageSource: PropTypes.string.isRequired,
};

export default Movie;
