import {combineReducers} from 'redux';
import BlogReducer from './reducer-blogs';
import PopularBlogReducer from './reducer-popular-blogs';


const allReducers = combineReducers({
    blogList: BlogReducer,
    popularBlogList: PopularBlogReducer

});

export default allReducers;
