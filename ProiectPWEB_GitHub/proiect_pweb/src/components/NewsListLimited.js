import React from 'react'
import ReactDOM from 'react-dom'
const NewsListLimited = ({ news_articles }) => {

    return (
      <div className="news_articles-list">
        {news_articles.map(new_article => (
          <div className="news_articles-preview" key={new_article.id} >
            <h2>{ new_article.title }</h2>
            <p>Author : {new_article.author}</p>
            <p>{new_article.body}</p>
          </div>
        ))}
      </div>
    );
  }

export default NewsListLimited;