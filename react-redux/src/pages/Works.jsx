import React from 'react';
import { Link } from 'react-router-dom';

function Works() {
  return (
    <>
      <div>Works</div>
      <button>Home으로 이동</button>
      <Link to="/contact">go contact</Link>
    </>
  );
}

export default Works;
