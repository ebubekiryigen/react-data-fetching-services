import { get, post, postJSON } from "./request";


export const getPosts = () => get('/posts')
export const getPostDetails = id => get(`/posts/${id}`)
export const newPost = data => post('/posts',data)
export const newPostJSON = data => postJSON('/posts',data)