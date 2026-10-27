import { title, subtitle, intro, articleBlocks } from '../data/content'
import './Article.css'

/**
 * The main article: title, larger intro paragraph, then the body text
 * flowed into three CSS columns (headings fall wherever they land in the
 * text, exactly as in the wireframe).
 */
function Article() {
  return (
    <article className="article">
      <h1 className="article__title">
        {title}:<span className="article__subtitle">{subtitle}</span>
      </h1>

      <p className="article__intro">{intro}</p>

      <div className="article__columns">
        {articleBlocks.map((block, index) =>
          block.type === 'heading' ? (
            <h2 key={index}>{block.text}</h2>
          ) : (
            <p key={index}>{block.text}</p>
          ),
        )}
      </div>
    </article>
  )
}

export default Article
