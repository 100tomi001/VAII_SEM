import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getPosts = async () => {
    return await axios.get(`${API_URL}/posts`);
};

export const createPost = async (post) => {
    return await axios.post(`${API_URL}/posts`, post);
};

export const updatePost = async (id, updatedPost) => {
    return await axios.put(`${API_URL}/posts/${id}`, updatedPost);
};

export const deletePost = async (id) => {
    return await axios.delete(`${API_URL}/posts/${id}`);
};
