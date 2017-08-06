import React from 'react';
require('../../scss/style.scss');

const Footer = () => (
    <div className="container">
        <div className="footer">
            <img className="map" src= "images/Blog_Map.jpg"/>
            <p className="follow"><b> FOLLOW US</b>
            <span className="blk_icon_span">
                <img className="blk_icon" src= "images/facebook_Blk_icon.png"/>
                <img className="blk_icon" src= "images/Twitter_Blk_icon.png"/>
                <img className="blk_icon" src= "images/Linkedin_Blk_icon.png"/>
                <img className="blk_icon" src= "images/Youtube_Blk_icon.png"/>
            </span>
            </p>
        </div>
        <div className="footer quick_links">
            <h3 className="quick_links_head"><b>QUICK LINKS</b></h3>

                <p>Existing Members? Login</p>
                <p>Blogs</p>
                <p>Webinars</p>
                <p>Videos</p>
                <p>eBooks</p>
                <p>Customer Service</p>

        </div>
        <div className="footer download">
            <h3><b>DOWNLOAD FREE BOOKS</b></h3>
            <div className="ebook_form">
                <img className="form-icon" src = "images/User_icon.png"/>
                <input className="input-box" type = "text" placeholder="Name"/>
            </div>
            <div>
                <img className="form-icon" src = "images/Mail_icon.png"/>
                <input className="input-box" type = "email" placeholder="Email"/>
            </div>
            <div className="download_button">
               <b> DOWNLOAD BOOK</b>
            </div>
        </div>
        <div className="clear"></div>
        <hr/>
        <center>2017 © All Rights Reserved</center>
    </div>
);

export default Footer;
