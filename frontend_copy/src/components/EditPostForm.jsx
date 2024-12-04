import React, { useState } from 'react';
import { updatePost } from './api';

const EditPostForm = ({ post }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [author, setAuthor] = useState(post.author);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPost = { title, content, author };
        await updatePost(post.id, updatedPost);
        alert('Príspevok bol upravený!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Upraviť</button>
        </form>
    );
};

export default EditPostForm;
