import React from 'react';
require('../../scss/style.scss');

const BlogCategory = () => (
    <div className = "container-fluid category-bg">
        <div className = "container">
                <div className="topnav">
                  <a className="active" href="#">ALL</a>
                  <a href="#">INVESTMENT</a>
                  <a href="#">FINANCE</a>
                  <a href="#">CREDIT</a>
                  <a href="#">OTHER</a>
                  <a href="#">MORE</a>
                  <a href="#">FAMILY</a>
                  <a href="#">RUPEE</a>
                </div>
                <div className = "clear"></div>
        </div>
    </div>
);

export default BlogCategory;
