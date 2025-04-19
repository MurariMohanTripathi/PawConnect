import React from 'react';
import './FeaturedPets.css';

const FeaturedPets = () => {
  return (
    <div className="featured-section">
      <h2>Featured Pets Near You</h2>
      <div className="pet-cards">
        <div className="pet-card">
          <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6" alt="Max the Beagle" />
          <h3>Max</h3>
          <p>Beagle</p>
          <p>2 yr-old • Pune</p>
        </div>
        <div className="pet-card">
          <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6" alt="Whiskers the Cat" />
          <h3>Whiskers</h3>
          <p>Domestic shorthair</p>
          <p>3 ages • Pune</p>
        </div>
        <div className="pet-card">
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16" alt="Bella the Labrador" />
          <h3>Bella</h3>
          <p>Labrador Retriever</p>
          <p>1.5 years • Pune</p>
        </div>
        <div className="pet-card">
          <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16" alt="Coco the Rabbit" />
          <h3>Coco</h3>
          <p>Rabbit</p>
          <p>1 yarago • Pune</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPets;
