import blogPosts from '../data/blogPosts.js';


function index(request, response) {
    response.json(blogPosts);
}



export {
    index,
}