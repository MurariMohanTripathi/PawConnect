import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories">
      <div className="category">
        <div className="icon dog">🐶</div>
        <p>Dogs</p>
      </div>
      <div className="category">
        <div className="icon cat">🐱</div>
        <p>Cats</p>
      </div>
      <div className="category">
        <div className="icon rabbit">🐰</div>
        <p>Rabbits</p>
      </div>
      <div className="category">
        <div className="icon bird">🐦</div>
        <p>Birds</p>
      </div>
    </div>
  );
};

export default Categories;
