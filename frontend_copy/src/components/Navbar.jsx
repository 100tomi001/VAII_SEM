import React from 'react';

function Navbar() {
  const navigate = (path) => {
    window.location.href = path;
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li} onClick={() => navigate('/')}>Home</li>
        <li style={styles.li} onClick={() => navigate('/about')}>About</li>
        <li style={styles.li} onClick={() => navigate('/contact')}>Contact</li>
        <li style={styles.li} onClick={() => navigate('/forum')}>Forum</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  },
  li: {
    fontSize: '1.2rem',
    cursor: 'pointer',
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
