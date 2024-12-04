import React, { useEffect, useState } from 'react';
import { getPosts } from './api';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.data);
    };

    return (
        <div>
            <h1>Príspevky</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p><i>Autor: {post.author}</i></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
