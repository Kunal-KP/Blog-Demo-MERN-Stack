import React from 'react';
import axios from 'axios';
import {blogRepo, popularBlogRepo} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tasks from '../components/Tasks';
import Footer from '../components/Footer';

 class BlogList extends React.Component{

   componentWillMount(){
        console.log("Inside componentDidMount()");
        {this.props.blogRepo()}
        {this.props.popularBlogRepo()}
    }

    showList(){
        return this.props.blogList.map((obj) => {
            return (
                <div className="blog-div" key={obj._id}>
                    <h3>{obj.header}</h3>
                    <p className="desc">POSTED BY <b>{obj.author}</b> &nbsp;ON &nbsp;<b>{obj.date}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; COMMENTS({obj.comments})</p>
                    <p><img src = {obj.imgUrl}/></p>
                    <p>{obj.post}</p>
                    <p><b><a href="#">Read More</a></b></p>
                    <p className="para-pad"> </p>
                </div>
            );
        });
    }

    showPopularList(){
            return this.props.popularBlogList.map((obj) => {
                return (
                    <div className="popular-blog-div" key={obj._id}>
                        <p><img src = {obj.imgUrl}/></p>
                        <p className="pop-posts pop-post-head"><b>{obj.header}</b></p>
                        <p>{obj.post}</p>
                        <p className="para-pad-popular"> </p>
                    </div>
                );
            });
        }
    render(){
        if(!this.props.blogList){
            return (
               <div className="align"><img src="gears.gif"/></div>
            )
        }
        return (
        <div>
            <div className = "container">
                <p className = "home"><b><a href="#">HOME</a></b>/<a className="desc" href="#">BLOG</a></p>
                <div className="left-div">
                    {this.showList()}
                </div>
                <div className="right-div">
                    <h3 className="pop-posts">Popular Posts</h3>
                    {this.showPopularList()}
                    <Tasks />
                </div>
                <div className="clear"></div>
            </div>
            <div className="container-fluid"><hr/></div>
            <Footer/>
        </div>

        )
    }


}
function matchDispatchToProps(dispatch){
        console.log("Inside matchDispatchToProps");
        return bindActionCreators({blogRepo: blogRepo, popularBlogRepo: popularBlogRepo}, dispatch);
    }
function mapStateToProps(state) {
    console.log(state.blogList);
    return {
        blogList: state.blogList,
        popularBlogList: state.popularBlogList
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(BlogList);