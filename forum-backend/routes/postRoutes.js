const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.post('/', async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const post = await Post.create({ title, content, author });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post', details: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts', details: error });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    await post.update({ title, content, author });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post', details: error });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    await post.destroy();
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post', details: error });
  }
});

module.exports = router;
