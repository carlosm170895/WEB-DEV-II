import Button from './Button'
import './MovieCard.css'

/**
 * A movie card: poster, title, description and "Watch now" button.
 * `variant` ("feature" | "standard" | "wide") selects the desktop layout.
 */
function MovieCard({ movie, variant }) {
  return (
    <article className={`movie-card movie-card--${variant}`}>
      <img className="movie-card__poster" src={movie.poster} alt={`${movie.title} poster`} />
      <div className="movie-card__body">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__description">{movie.description}</p>
        </div>
        <Button className="movie-card__button">Watch now</Button>
      </div>
    </article>
  )
}

export default MovieCard
