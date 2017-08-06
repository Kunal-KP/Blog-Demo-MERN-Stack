import axios from 'axios';

export const blogRepo = () => {
      console.log("Inside action index.js");
      return axios.get("/blog-posts")
          .then(function(response){
              console.log("Tot count in action index.js"+JSON.stringify(response.data));
              return {
                     type: 'BLOG_POSTS_REDUCER',
                     payload: response.data
              }
      });

  };

 export const popularBlogRepo = () => {
       console.log("Inside action index.js");
       return axios.get("/popular-blog-posts")
           .then(function(response){
               console.log("Tot count in action index.js"+JSON.stringify(response.data));
               return {
                      type: 'POPULAR_BLOG_POSTS_REDUCER',
                      payload: response.data
               }
       });

   };