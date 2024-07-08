import { createPost } from "./component/product.js";
import { storie } from "./component/stories.js";
 
fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
    .then(res => res.json())
    .then(res => createPost(res))

fetch('https://jsonplaceholder.typicode.com/photos?_start=100&_limit=200')
    .then(res => res.json())
    .then(res => storie(res))
 
