import React from 'react';
import BlogList from '../containers/blogList';
import BlogCategory from './BlogCategory';
import Content from './Content';
import Social from './Social';
require('../../scss/style.scss');

const MyApp = () => (
    <div>
        <Social />
        <Content />
        <BlogCategory />
        <BlogList/>
    </div>
);

export default MyApp;
