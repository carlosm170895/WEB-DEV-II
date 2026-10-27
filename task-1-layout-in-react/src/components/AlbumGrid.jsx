import allEncores from '../../assets/all-encores.jpg'
import articulation from '../../assets/articulation.jpg'
import blurred from '../../assets/blurred.jpg'
import eulogy from '../../assets/eulogy-for-evolution.jpg'
import theCell from '../../assets/the-cell.jpg'
import './AlbumGrid.css'

// First album is the featured one (spans two rows and one large column)
const albums = [
  { src: allEncores, alt: 'All Encores album cover' },
  { src: articulation, alt: 'Articulation album cover' },
  { src: blurred, alt: 'Blurred album cover' },
  { src: eulogy, alt: 'Eulogy for Evolution album cover' },
  { src: theCell, alt: 'The Cell album cover' },
]

/** One large featured album next to a 2x2 grid of smaller albums. */
function AlbumGrid() {
  return (
    <section className="album-grid" aria-label="Featured albums">
      {albums.map((album, index) => (
        <img
          key={album.alt}
          className={index === 0 ? 'album-grid__featured' : ''}
          src={album.src}
          alt={album.alt}
        />
      ))}
    </section>
  )
}

export default AlbumGrid
