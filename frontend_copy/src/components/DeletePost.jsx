import React from 'react';
import { deletePost } from './api';

const DeletePost = ({ post, onDelete }) => {
    const handleDelete = async () => {
        await deletePost(post.id);
        onDelete(post.id);
    };

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><i>Autor: {post.author}</i></p>
            <button onClick={handleDelete}>Vymazať</button>
        </div>
    );
};

export default DeletePost;
