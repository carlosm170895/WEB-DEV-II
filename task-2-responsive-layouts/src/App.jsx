import Header from './components/Header'
import MovieCard from './components/MovieCard'
import { movies } from './data/movies'
import './App.css'

/**
 * Card layout variant for each position in the list. The variants only
 * change the layout on desktop (1024px and up); on tablet and mobile every
 * card is a standard vertical card.
 *   0     -> "feature": full-width card, wide poster banner on top
 *   1, 2  -> "standard": two vertical cards side by side
 *   3..5  -> "wide": full-width card, poster on the left, text on the right
 */
function getVariant(index) {
  if (index === 0) return 'feature'
  if (index <= 2) return 'standard'
  return 'wide'
}

function App() {
  return (
    <>
      <Header />
      <main className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} variant={getVariant(index)} />
        ))}
      </main>
    </>
  )
}

export default App
