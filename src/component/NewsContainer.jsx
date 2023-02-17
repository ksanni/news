import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import '../App.css';
import Carousal from './Carousal';
import Pagination from './Pagination';
const NewsContainer = ({category,language}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(24);


  async function getNews() {
    // const rawdata = await fetch(`https://newsapi.org/v2/everything?q=${category}&language=hi&apiKey=386aa4d5ac654dd69175d11588674e74`)
    const rawdata = await fetch(`https://newsapi.org/v2/everything?q=${category}&${language}&apiKey=386aa4d5ac654dd69175d11588674e74`)
    const freshData = await rawdata.json();
    setData(freshData.articles);
    
  }
  useEffect(() => {
    getNews();
  },[category]);

  const lastPostIndex=currentPage * postsPerPage;
  const firstPostIndex= lastPostIndex -postsPerPage;
  const currentPosts= data.slice(firstPostIndex, lastPostIndex);
  return (
    <>
    <Carousal data={data} />
      <h1 className='backgd text-light text-center mb-3 mt-3 p-1' style={{textTransform:"capitalize"}}>News Articles {category }</h1>
      <div className="container">
        <div className="row">
          {
            currentPosts.map((item, index) => {
              return (
                <>
                
                  <NewsItem
                    key={index}
                    title={item.title}
                    image={item.urlToImage}
                    author={item.author}
                    date={item.publishedAt}
                    description={item.description}
                    url={item.url}
                  />
                </>
              )
            })
          }
          <Pagination totalPosts={data.length}
           postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            />
        </div>
      </div>
    </>
  )
}

export default NewsContainer
