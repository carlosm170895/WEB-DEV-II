import Button from './Button'
import { genres } from '../data/movies'
import './Header.css'

/** Site header: logo, genre navigation (tablet and up) and search button. */
function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">watch.it</h1>
      <nav className="header__nav" aria-label="Genres">
        {genres.map((genre) => (
          <a key={genre} href="#">
            {genre}
          </a>
        ))}
      </nav>
      <Button className="header__search">Search</Button>
    </header>
  )
}

export default Header
