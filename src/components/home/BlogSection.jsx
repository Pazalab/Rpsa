import { Link } from "react-router-dom"
import { FiChevronRight } from "react-icons/fi"
import { articles } from "../../data/articles"

const BlogSection = () => {
  return (
    <div className="blog-section">
              <div className="inner-row">
                        <div className="blog-section-content">
                                   <div className="blog-intro">
                                                <div className="column">
                                                              <h4>Insights</h4>
                                                              <h2>Latest Articles</h2>
                                                </div>
                                                <div className="link-wrap">
                                                        <Link to={"/articles-and-insights"}>
                                                                 <span className="top-border"></span>
                                                                 <span className="right-border"></span>
                                                                 <span className="bottom-border"></span>
                                                                 <span className="left-border"></span>
                                                                        More Articles<span className="icon"><FiChevronRight /></span></Link>
                                                    </div>
                                   </div>
                                   <div className="blog-section-row">
                                            { articles.map(article =>
                                                      <div className="blog-article-moja" key={article.id}>
                                                                    <div className="blog-image">
                                                                              <img src={article.image} alt="" />
                                                                    </div>
                                                                  <h4>{article.category}</h4>
                                                                  <h3>{article.title}</h3>
                                                      </div>
                                            )}
                                   </div>
                        </div>
              </div>
    </div>
  )
}

export default BlogSection