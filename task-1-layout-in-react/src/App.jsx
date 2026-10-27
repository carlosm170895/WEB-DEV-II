import Header from './components/Header'
import Article from './components/Article'
import AlbumGrid from './components/AlbumGrid'
import Author from './components/Author'
import Comments from './components/Comments'
import Footer from './components/Footer'
import './App.css'

/**
 * Root component. The page is a single white "content" column
 * (article, album grid, author, comments) sitting between the
 * header and the full-width footer.
 */
function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Article />
        <AlbumGrid />
        <Author />
        <Comments />
      </main>
      <Footer />
    </>
  )
}

export default App
