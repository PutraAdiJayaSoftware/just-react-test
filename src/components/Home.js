
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Wijayadi Saputra test page with React</h2>
      <div>
        <Link to="/test-grid">
          <button>Test Grid</button>
        </Link>
        <Link to="/test-flex">
          <button>Test Flex</button>
        </Link>
        <Link to="/test-select">
          <button>Test Select</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;