import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import '../App.css';
// import Carousal from './Carousal';
import Pagination from './Pagination';



const NewsContainer = ({ category, language }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);




  async function getNews(search) {
    // const rawdata = await fetch(`https://newsapi.org/v2/everything?q=${category}&language=hi&apiKey=386aa4d5ac654dd69175d11588674e74`)
    // const rawdata = await fetch(`https://newsapi.org/v2/everything?q=${category}&${language}&apiKey=386aa4d5ac654dd69175d11588674e74`)
    // const rawdata = await fetch(`https://newsdata.io/api/1/news?apikey=pub_175443b218614a85e0491da5f9887382c4c23&country=in&category=${category}`)

    // const rawdata = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=in&${language}&search?q=${search}&apikey=0b8e8d4b317839a294e3f5f6ba4f2fca`)
    const rawdata = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&country=in&${language}&apikey=0b8e8d4b317839a294e3f5f6ba4f2fca`)
   

    const freshData = await rawdata.json();
    setData(freshData.articles);
    console.log(freshData);

  }
  useEffect(() => {
    getNews();
  }, [category,language,search]);

useEffect(()=>{
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data && data.slice(firstPostIndex, lastPostIndex);
  setFilterPosts(currentPosts);
  console.log(currentPosts);
},[currentPage,data])

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handleSearchData(e) {
    e.preventDefault();
    getNews(search);

  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      {/* <Carousal data={data} /> */}
      <div className='backgd text-light text-center mb-3 mt-3 p-1 d-flex search'>
        <h1 style={{ textTransform: "capitalize" }}>News Articles {category}</h1>

        <form className="d-flex mt-2 pl-12" role="search">
          <input onChange={handleSearch} className="form-control me-2 h-34" value={search} type="search" placeholder="Search" aria-label="Search" />
          <button onClick={handleSearchData} className="btn btn-outline-success text-light bg-primary" >Search</button>
        </form>
      </div>
      <div className="container">
        <div className="row">
          {
            filterPosts && filterPosts.map((item, index) => {
              return (
               

                  <NewsItem
                    key={index}
                    title={item.title}
                    image={item.image }
                    author={item.author}
                    date={item.publishedAt}
                    description={item.description}
                    url={item.url}
                  />

                
              )
            })
          }
          <div>
            <div>
            <Pagination totalPosts={data.length}
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
      </div>
    </>
  )
}

export default NewsContainer
