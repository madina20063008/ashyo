import React from "react";
import Navbar from './components/Navbar';
import TopBar from './components/Top';
import Header from './components/Header';
import BrandGrid from './components/Brands'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Header />
      <BrandGrid />
      <Card />
    </div>
  );
};

export default App;
