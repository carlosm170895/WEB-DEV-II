import SocialIcons from './SocialIcons'
import { authorBio } from '../data/content'
import profilePicture from '../../assets/profile_picture.jpg'
import './Author.css'

/** About-the-author section: bio text, round photo and social icons. */
function Author() {
  return (
    <section className="author">
      <div className="author__bio">
        <h2>The Author</h2>
        <p>{authorBio}</p>
      </div>
      <img
        className="author__photo"
        src={profilePicture}
        alt="Photo of the author"
      />
      <SocialIcons direction="column" />
    </section>
  )
}

export default Author
