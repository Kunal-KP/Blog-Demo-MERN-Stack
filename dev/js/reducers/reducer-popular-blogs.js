export default function (state=null , action) {
    switch (action.type) {
        case 'POPULAR_BLOG_POSTS_REDUCER':
            console.log("Payload Inside reducer-popular-blog.js "+action.payload);
            console.log("State inside reducer-popular-blog.js "+state);
            return action.payload;
            break;
    }
    return state;
}