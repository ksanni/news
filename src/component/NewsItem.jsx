
import React from 'react'
import '../App.css'
import pic from './1.jpg'   
const NewsItem = ({title,image,description,url}) => {
  return (
    <>
    <div className='col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-3 newsItem'>
      <div className="cardss mr-1px" >
        <img src={image?image:pic} className="card-img-top mt-1 " height='200px' alt="..."/>
          <div className="card-body">
            <h5 className="card-title mt-2 " style={{height:"75px"}}>{title.slice(0,50)+"..."}</h5>
            <p className="card-text " style={{height:"110px" ,textAlign:"justify"}}>{description!=null ? description.slice(0,150):"..." +"..."}</p>
            <a href={url} className="btn w-100 text-light backgd readMore mb-1">Read Full Article ...</a>
          </div>
      </div>
      
      </div>
    </>
  )
}

export default NewsItem
