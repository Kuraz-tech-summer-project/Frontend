import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className="container-xxl">
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative p-1'>
              <img src="images/main-banner-1.jpg" className='img-fluid rounded' alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPER CHARGED FOR PROS.</h4>
                <h5>Ipad s13+ pro</h5>
                <p>form $999.00 <br/>or $56.98/mo</p>
                <Link className='button'>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-01.jpg" className='img-fluid rounded' alt="small banner 1" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPER CHARGED FOR PROS.</h4>
                  <h5>Ipad s13+ pro</h5>
                  <p>form $999.00 <br/>or $56.98/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-03.jpg" className='img-fluid rounded' alt="small banner 2" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>BUY IPAD</h5>
                  <p>form $999.00 <br/> or $56.98/mo</p>
                </div>
              </div>
            </div>
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-03.jpg" className='img-fluid rounded' alt="small banner 3" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>BUY Ipad AIR</h5>
                  <p>form $999.00 <br/>or $56.98/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative p-1'>
                <img src="images/catbanner-04.jpg" className='img-fluid rounded' alt="small banner 4" />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>BUY Ipad AIR</h5>
                  <p>form $999.00 or $56.98/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='services d-flex align-items-center justify-content-between'>
            <div className="d-flex align-items-center gap-10"    >
              <img src="images/service.png" alt="services" />
              <div >
              <h6>Free Shippping</h6>
                <p>From all orders over $100</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-15">
              <img src="images/service-02.png" alt="services" />
              <div >
              <h6>Daily Surprise Offers</h6>
                <p>Save up 25% off</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-15">
              <img src="images/service-03.png" alt="services" />
              <div >
              <h6>Support 24/7</h6>
                <p>Shop with an expert</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-15">
              <img src="images/service-04.png" alt="services" />
              <div >
              <h6>Affordable Price</h6>
                <p>Get Factory default price</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-15">
              <img src="images/service-05.png" alt="services" />
              <div >
                <h6>Secure payments</h6>
                <p>100% protected payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
     <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <div className='catagories d-flex flex-wrap justify-content-between align-items-center'>
            <div className="d-flex gap-30 align-items-center">
            <div>
              <h6>Cameras</h6>
              <p>10  items</p>
            </div>
            <img src="images/camera.jpg" alt="camra" />

            </div>
            <div className="d-flex gap align-items-center">
            <div>
              <h6>Cameras</h6>
              <p>10  items</p>
            </div>
            <img src="images/tv.jpg" alt="camra" />

            </div>
            <div className="d-flex gap align-items-center">
            <div>
              <h6>Camera </h6>
              <p>10  items</p>
            </div>
            <img src="images/camera.jpg" alt="camra" />

            </div>
            <div className="d-flex gap align-items-center">
            <div>
              <h6>Music & Gaming</h6>
              <p>10  items</p>
            </div>
            <img src="images/camera.jpg" alt="camra" />

            </div>
            <div className="d-flex gap align-items-center">
            <div>
              <h6>Smart Watches</h6>
              <p>10 items</p>
            </div>
            <img src="images/headphone.jpg" alt="camra" />

            </div>
            <div className="d-flex gap align-items-center">
            <div>
              <h6>Cameras</h6>
              <p>10  items</p>
            </div>
            <img src="images/camera.jpg" alt="camra" />

            </div>
            <div className="d-flex gap align-items-center">
            <div>
              <h6>Cameras</h6>
              <p>10  items</p>
            </div>
            <img src="images/tv.jpg" alt="camra" />

            </div>
            <div className="d-flex gap align-items-center">
            <div>
              <h6> Camera</h6>
              <p>10  items</p>
            </div>
            <img src="images/camera.jpg" alt="camra" />

            </div>

            <div className="d-flex gap-30 align-items-center"></div>
          </div>
        </div>
      </div>
     </div> 
    </section>
    <section className="blog-wrapper home-wrapper-2 py-5">
      <div className='container-xxl'>
        <div className="row">
        <div className='col-12'>
          <h3 className="section-heading">Our Latest Blogs</h3>
        </div>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
        
      </div>
    </section>
    <section className="blog-wrapper home-wrapper-2 py-5">
      <div className='container-xxl'>
        <div className="row">
        <div className='col-12'>
          <h3 className="section-heading">Featured Collection</h3>
        </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;