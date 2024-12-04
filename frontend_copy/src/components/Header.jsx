import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#0d1117', padding: '1rem', color: 'white' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Paradox Forum</h1>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
            <li>
              <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'white', textDecoration: 'none' })}>
                Domov
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'white', textDecoration: 'none' })}>
                O nás
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'white', textDecoration: 'none' })}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
