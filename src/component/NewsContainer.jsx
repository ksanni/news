import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import '../App.css';
import Pagination from './Pagination';

const NewsContainer = ({ category, language }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);

  async function fetchNews(searchQuery) {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&country=in&${language}&q=${searchQuery}&apikey=0b8e8d4b317839a294e3f5f6ba4f2fca`;
    const response = await fetch(url);
    const freshData = await response.json();
    setData(freshData.articles);
  }

  useEffect(() => {
    fetchNews("");
  }, [category, language]);

  useEffect(() => {
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data && data.slice(firstPostIndex, lastPostIndex);
    setFilterPosts(currentPosts);
  }, [currentPage, data]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchData = (e) => {
    e.preventDefault();
    fetchNews(search);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className='backgd text-light text-center mb-3 mt-3 p-1 d-flex search'>
        <h1 style={{ textTransform: "capitalize" }}>News Articles {category}</h1>
        <form className="d-flex mt-2 pl-12" role="search">
          <input onChange={handleSearch} className="form-control me-2 h-34" value={search} type="search" placeholder="Search..." aria-label="Search" />
          <button onClick={handleSearchData} className="btn btn-outline-success text-light bg-primary">Search</button>
        </form>
      </div>
      <div className="container">
        <div className="row">
          {filterPosts && filterPosts.map((item, index) => (
            <NewsItem
              key={index}
              title={item.title}
              image={item.image}
              author={item.author}
              date={item.publishedAt}
              description={item.description}
              url={item.url}
            />
          ))}
          <div>
            <Pagination
              totalPosts={data.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
          <div>
            <button className='btn-Top' onClick={scrollToTop}>^</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContainer;
