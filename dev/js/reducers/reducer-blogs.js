export default function (state=null , action) {
    switch (action.type) {
        case 'BLOG_POSTS_REDUCER':
            console.log("Payload Inside reducer-blog.js "+action.payload);
            console.log("State inside reducer-starred.js "+state);
            return action.payload;
            break;
    }
    return state;
}