
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBar from "./components/Top";
import Header from "./components/Header";
import BrandGrid from "./components/Brands";
import Card from "./components/Card";
import ProductDetail from "./pages/ProductDetail";

const Layout = ({ children }) => {
  const location = useLocation();
  const isProductDetailPage = location.pathname.startsWith("/product/");

  return (
    <div>
      <Navbar />
      {!isProductDetailPage && (
        <>
          <TopBar />
          <Header />
          <BrandGrid />
        </>
      )}
      {children}
    </div>
  );
};

const App = () => {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/product" element={<Card />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>

  );
};

export default App;
