import React from 'react';
import './PostPetBanner.css';

const PostPetBanner = () => {
  return (
    <div className="post-banner">
      <p>Have a pet to rehome? <strong>Post it here!</strong></p>
      <button className="post-button">Post a Pet for Adoption</button>
    </div>
  );
};

export default PostPetBanner;
