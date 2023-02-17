import React from 'react'

const Pagination = ({totalPosts,postsPerPage,setCurrentPage,currentPage}) => {
    let pages=[];
    for(let i=1 ; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }
  return (
    <div className='button'>
      {
        pages.map((page, index)=>{
        return <button key={index}
        type="button" className={ page === currentPage ? 'active && btn btn-dark ': '' }
         
        onClick={()=> setCurrentPage(page)}>
        {page}</button>;
      
        })
      }
    </div>
  );
};

export default Pagination
