import React from 'react';
import { format } from 'date-fns';
import { getImageForArticle } from '../utils/unsplash';

function ArticleList({ articles, loading }) {
  const [articlesWithImages, setArticlesWithImages] = React.useState([]);

  React.useEffect(() => {
    const addImagesToArticles = async () => {
      const withImages = await Promise.all(
        articles.map(async (article) => {
          try {
            const image = await getImageForArticle(article.title);
            return { ...article, image };
          } catch (error) {
            console.error('Error adding image to article:', error);
            return { ...article, image: null };
          }
        })
      );
      setArticlesWithImages(withImages);
    };

    if (articles.length > 0) {
      addImagesToArticles();
    } else {
      setArticlesWithImages([]);
    }
  }, [articles]);

  if (loading) {
    return <div className="loading">Loading articles...</div>;
  }

  return (
    <div className="article-list">
      {articlesWithImages.map((article, index) => (
        <article key={index} className="article-card">
          {article.image && (
            <div className="article-image">
              <img src={article.image.url} alt={article.title} />
              <div className="image-credit">
                Photo by{' '}
                <a href={article.image.credit.link} target="_blank" rel="noopener noreferrer">
                  {article.image.credit.name}
                </a>{' '}
                on Unsplash
              </div>
            </div>
          )}
          <div className="article-content">
            <h2>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <div className="article-meta">
              <span className="feed-title">{article.feedTitle}</span>
              <span className="date">{format(new Date(article.pubDate), 'MMM d, yyyy')}</span>
            </div>
            <p className="description">{article.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ArticleList;
