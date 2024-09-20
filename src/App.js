import React, { Suspense, lazy } from 'react';
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/Search";

// Lazy loading the components
const About = lazy(() => import("./components/about/About"));
const Carousel = lazy(() => import("./components/carousel/Carousel"));
const SmallCarousel = lazy(() => import("./components/carousel/SmallCarousel"));

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar /> 
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel />
        <SmallCarousel />
        <About />
      </Suspense>
    </div>
  );
}

export default App;
