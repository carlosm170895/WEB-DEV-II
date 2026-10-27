import { comments } from '../data/content'
import './Comments.css'

/** Reader comments, shown on the page-coloured background. */
function Comments() {
  return (
    <section className="comments">
      <h2>Comments</h2>
      {comments.map((comment) => (
        <article key={comment.username} className="comment">
          <h3 className="comment__username">{comment.username}</h3>
          <p className="comment__text">{comment.text}</p>
        </article>
      ))}
    </section>
  )
}

export default Comments
