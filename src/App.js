import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import FeaturedPets from './components/FeaturedPets';
import PostPetBanner from './components/PostPetBanner';
import Login from './pages/login'; 
import SignUp from './pages/SignUp';
import BrowsePets from './pages/BrowsePets';
import About from './pages/About';

const HeroSection = () => (
  <section className="hero">
    <div className='detail'>
      <h1>Adopt, Don't Shop</h1>
      <SearchBar />
    </div>
  </section>
);

const HomePage = () => (
  <>
    <Navbar />
    <HeroSection />
    <Categories />
    <FeaturedPets />
    <PostPetBanner />
  </>
);

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path ='/BrowsePets' element ={<BrowsePets />} />
      <Route path ='/About' element ={<About />}/>
    </Routes>
  </div>
);

export default App;
