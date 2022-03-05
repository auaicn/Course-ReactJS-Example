import PropTypes from "prop-types";

function Movie({ titleWithYear, genres, summary, coverImgageSource }) {
  return (
    <div>
      <img src={coverImgageSource} alt={titleWithYear + "image"}></img>
      <h3>{titleWithYear}</h3>
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
  titleWithYear: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  coverImgageSource: PropTypes.string.isRequired,
};

export default Movie;
