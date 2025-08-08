import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f4f8' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/create" style={{ margin: '0 10px' }}>Create Quiz</Link>
      <Link to="/quiz" style={{ margin: '0 10px' }}>Take Quiz</Link>
      <Link to="/results" style={{ margin: '0 10px' }}>Results</Link>
    </nav>
  );
};

export default Navbar;
