import React from 'react';
import { useParams } from 'react-router-dom';

const ForumPost = () => {
  const { id } = useParams(); 

  const forumPosts = {
    1: { title: 'Strategies in Europa Universalis IV', content: 'Europa Universalis IV is a grand strategy game that allows you to control any nation and guide it through history. Here are some strategies to get started with your nation.' },
    2: { title: 'Top Mods for Crusader Kings III', content: 'Crusader Kings III is a grand strategy game with deep character interaction. Check out some of the best mods that will enhance your gameplay and immerse you further into the world of CK3.' },
    3: { title: 'Surviving in Stellaris: Tips for New Players', content: 'Stellaris is a space grand strategy game. New players often struggle with managing their empire. Here are some beginner tips to survive and thrive in the galaxy.' },
    4: { title: 'Best Nations to Play in Hearts of Iron IV', content: 'Hearts of Iron IV focuses on World War II strategy. Some nations are easier to manage than others. Learn which nations are the best to start your campaign.' },
    5: { title: 'What’s New in Victoria 3?', content: 'Victoria 3 is a complex economic and political simulation game. Discover the new mechanics and updates that came with the latest patch and how they affect your game.' },
  };

  const post = forumPosts[id];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div style={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

const styles = {
  container: { padding: '2rem' },
};

export default ForumPost;
