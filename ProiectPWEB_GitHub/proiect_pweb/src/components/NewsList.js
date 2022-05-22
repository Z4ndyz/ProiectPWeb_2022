import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";

const NewsList = ({ news_articles }) => {

    let navigate = useNavigate();
    return (
      <div className="news_articles-list">
        {news_articles.map(new_article => (
          <div className="news_articles-preview" key={new_article.id} >
            <h2>{ new_article.title }</h2>
            <p>Author : {new_article.author}</p>
            <p>{new_article.body}</p>
            <p>
            <button onClick={() => {
                    fetch('http://localhost:8000/news_articles/' + new_article.id, {
                      method: 'DELETE'
                    }).then(() => {
                      {navigate("/HomeAdmin")}
                    }) 
                }}>Delete News Article</button> {/*Delete News Article of this id*/}
            </p>  
          </div>
        ))}
      </div>
    );
  }

export default NewsList;