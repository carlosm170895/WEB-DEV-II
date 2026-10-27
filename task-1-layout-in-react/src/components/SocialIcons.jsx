import facebook from '../../assets/facebook-icon.png'
import instagram from '../../assets/instagram-icon.svg'
import twitter from '../../assets/twitter-icon.svg'
import './SocialIcons.css'

const icons = [
  { src: twitter, alt: 'Twitter', href: '#', whiteGlyph: true },
  { src: instagram, alt: 'Instagram', href: '#' },
  { src: facebook, alt: 'Facebook', href: '#' },
]

/**
 * Social media icons, 50px wide with 10px between them.
 * The Twitter icon is a white glyph, so it is inverted on light backgrounds.
 * `direction` is "column" (author section) or "row" (footer).
 */
function SocialIcons({ direction = 'row' }) {
  return (
    <ul className={`social-icons social-icons--${direction}`}>
      {icons.map((icon) => (
        <li key={icon.alt}>
          <a href={icon.href}>
            <img
              className={icon.whiteGlyph ? 'social-icons__white-glyph' : ''}
              src={icon.src}
              alt={icon.alt}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons
