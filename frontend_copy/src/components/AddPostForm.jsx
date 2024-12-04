import React, { useState } from 'react';
import { createPost } from './api';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, author };
        await createPost(newPost);
        alert('Príspevok bol pridaný!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Názov"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Obsah"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Autor"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Pridať</button>
        </form>
    );
};

export default AddPostForm;
