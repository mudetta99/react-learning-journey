import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; 
import "./App.css";
import CustomNavbar from "./components/Header";
import Footer from "./components/footer";
import ProductCard from "./components/products-cart";
import NewProductCard from "./components/new-product-cart";
import ProductCardBody from './components/product-card-body';
import ImageCarousel from "./components/carousel";
import CoffeeOrderForm from "./components/make-order";
import AboutUs from "./components/about-us";

import AddStudent from "./components/Add Student";

function App() {
  return (
    <>
      <CustomNavbar />
      <ImageCarousel />
      <ProductCard />
      <NewProductCard />

      
      <CoffeeOrderForm />
      <AboutUs />
      <AddStudent />
      <Footer />

    </>
  );
}

export default App;
