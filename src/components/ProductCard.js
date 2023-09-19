import ReactStars from "react-rating-stars-component";
import React from "react";
import {Link} from 'react-router-dom';
const ProductCard = () => {
  return (
    <div className="col-3">
    <div className='product-card position-realtive'>
        <div className='product-img'>
           <img src="images/watch.jpg" alt="product" />
        </div>
        <div className="product-details">
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>Kids Headphones 10 pack muti colored for student</h5>
            <ReactStars
    count={5}
    size={24} value='4'
    edit={false}
    activeColor="#ffd700"
  />
            <p className='price'>100.00$</p>
        </div>
        <div className="action-bar position-absolute">
  <div className="d-flex flex-column">
    <Link to="#">
      <img src="images/add-cart.svg" alt="img" />
    </Link>
  </div>
</div>
    </div>
    </div>
  )
}

export default ProductCard