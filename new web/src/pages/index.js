import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSection';
import TopCategories from '../components/homePage/TopCategories';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo />
    <HeroSection />
    <div className="container">
      <FeaturedBlogs />
      <TopCategories />
    </div>
  </>
);

export default IndexPage;
