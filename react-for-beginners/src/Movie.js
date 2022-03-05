import PropTypes from "prop-types";

function Movie({ title_with_year, genres, summary, coverImgageSource }) {
  return (
    <div>
      <img src={coverImgageSource} alt={title_with_year + "image"}></img>
      <h3>{title_with_year}</h3>
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
  title_with_year: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  coverImgageSource: PropTypes.string.isRequired,
};

export default Movie;
