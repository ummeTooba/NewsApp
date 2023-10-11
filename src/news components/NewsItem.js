import React from 'react'


const NewsItem =(props)=> {

  
    let {title, description, imageUrl, newsUrl, author,date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src= {!imageUrl?"https://www.reuters.com/resizer/R9HVvQOCHiDFMkFmYaYpnOXujzI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q2HAXBXTYBLETHKGGTEWQGPHKU.jpg": imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title} <span className="badge rounded-pill text-bg-warning">{source}</span></h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author}  on {new Date(date).toGMTString()}</small></p>

            <a  href={newsUrl} target="blank"  className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div>
    )
  }


export default NewsItem
