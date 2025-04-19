import React from 'react'
import Navbar from '../components/navbar'
import './BrowsePets.css';
function BrowsePets() {
  return (
    <>
    <Navbar />
    <div className="browsePets">
        <div className="pet-card-bp">
          <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6" alt="Max the Beagle" />
          <h3>Max</h3>
          <p>Beagle</p>
          <p>2 yr-old • Pune</p>
        </div>
        <div className="pet-card-bp">
          <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6" alt="Max the Beagle" />
          <h3>Max</h3>
          <p>Beagle</p>
          <p>2 yr-old • Pune</p>
        </div>
    </div>
    </>
  )
}

export default BrowsePets
