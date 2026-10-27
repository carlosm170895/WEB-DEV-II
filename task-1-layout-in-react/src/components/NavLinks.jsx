import { navLinks } from '../data/content'
import './NavLinks.css'

/**
 * Row of site navigation links, shared by the header and the footer.
 * The `className` prop lets each parent adjust colours/spacing.
 */
function NavLinks({ className = '' }) {
  return (
    <nav className={`nav-links ${className}`} aria-label="Site">
      {navLinks.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default NavLinks
