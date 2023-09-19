import React from 'react'
import { Link } from 'react-router-dom'
const blogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
           <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
           </div>
           <div className="blog-content">
            <p className="date">3 Sep, 20203</p>
            <h5 className="title">Ramblings of a Confused</h5>
            <p className="desc">loremReprehenderit aliquip veniam nostrud aliqua id consectetur id elit tempor sint Lorem pariatur et.</p>
            <Link to="/" className="button">READ MORE</Link>
           </div>
        </div>
    </div>
  )
}

export default blogCard