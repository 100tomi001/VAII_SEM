import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ForumList = () => {
  const [forums, setForums] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setForums(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleAddPost = async (e) => {
    e.preventDefault();

    if (newPost.title && newPost.content) {
      try {
        const response = await fetch('http://localhost:3001/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: newPost.title,
            content: newPost.content,
            author: 'default',
          }),
        });

        if (!response.ok) {
          throw new Error('Chyba pri vytváraní príspevku');
        }

        const data = await response.json();
        setForums((prevForums) => [...prevForums, data]);
        setNewPost({ title: '', content: '' });
      } catch (error) {
        console.error('Chyba pri vytváraní príspevku:', error);
      }
    } else {
      alert('Please fill in both fields');
    }
  };

  const handleEditPost = (id) => {
    const updatedPost = forums.find((forum) => forum.id === id);
    setEditPost(updatedPost);
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();

    if (editPost.title && editPost.content) {
      try {
        const response = await fetch(`http://localhost:3001/posts/${editPost.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: editPost.title,
            content: editPost.content,
            author: 'default',
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to update post');
        }

        const data = await response.json();
        setForums((prevForums) =>
          prevForums.map((forum) =>
            forum.id === editPost.id ? data : forum
          )
        );
        setEditPost(null);
      } catch (error) {
        console.error('Chyba pri aktualizovaní príspevku:', error);
      }
    } else {
      alert('Both fields are required!');
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await fetch(`http://localhost:3001/posts/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete post');
        }

        setForums((prevForums) => prevForums.filter((forum) => forum.id !== id));
      } catch (error) {
        console.error('Failed to delete post:', error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1>Forum Topics</h1>

      <form onSubmit={handleAddPost} style={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Add Post</button>
      </form>

      <ul style={styles.list}>
        {forums.map((forum) => (
          <li key={forum.id} style={styles.item}>
            <Link to={`/forum/${forum.id}`} style={styles.link}>
              <h3>{forum.title}</h3>
              <p>{forum.content}</p>
            </Link>
            <button
              onClick={() => handleEditPost(forum.id)}
              style={styles.editButton}
            >
              Edit
            </button>
            <button
              onClick={() => handleDeletePost(forum.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {editPost && (
        <div style={styles.form}>
          <h3>Edit Post</h3>
          <input
            type="text"
            value={editPost.title}
            onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
            style={styles.input}
          />
          <textarea
            value={editPost.content}
            onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
            style={styles.textarea}
          />
          <button onClick={handleUpdatePost} style={styles.button}>Update Post</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '2rem' },
  list: { listStyle: 'none', padding: 0 },
  item: { marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' },
  link: { textDecoration: 'none', color: '#333' },
  button: { padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' },
  deleteButton: { padding: '0.5rem 1rem', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '5px' },
  editButton: { padding: '0.5rem 1rem', backgroundColor: '#ff9800', color: '#fff', border: 'none', borderRadius: '5px' },
  form: { marginBottom: '2rem' },
  input: { padding: '0.5rem', width: '100%', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' },
  textarea: { padding: '0.5rem', width: '100%', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' },
};

export default ForumList;
