import NavLinks from './NavLinks'
import logo from '../../assets/logo.svg'
import './Header.css'

/** Site header: centred logo with the navigation links beneath it. */
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Erased Tapes logo" />
      <NavLinks />
    </header>
  )
}

export default Header
