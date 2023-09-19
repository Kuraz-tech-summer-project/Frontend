import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <>
      <Meta title={'Blog'} />
      <BreadCrumb title="Blog" />
      <div className="Blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find by category</h3>
                <div>
                  <ul className="ps-0">
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-10 ">
              <div className="top-blog-container">
                <BlogCard />
                <BlogCard />
              </div>
              <div className="bottom-blog-container">
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;