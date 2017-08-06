import React from 'react';
require('../../scss/style.scss');

const Content = () => (
    <div className = "container">
        <div className = "content">
              <a href="#">ABOUT</a>
              <a href="#">MEMBERSHIP BENEFITS</a>
              <a href="#">RESOURCES</a>
              <a href="#" className="active">BLOG</a>
              <a href="#">CONTACT</a>
              <a href="#" className="claim">CLAIM FREE REPORT</a>
              <a href="#" className="login">LOGIN</a>
        </div>
        <div className = "clear"></div>
    </div>
);

export default Content;
