"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";

function Home() {
  const [active, setActive] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleFeaturesOpen = () => {
    setFeaturesOpen((prev) => !prev);
    setCompanyOpen(false);
  };

  const handleCompanyOpen = () => {
    setCompanyOpen((prev) => !prev);
    setFeaturesOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuActive((prev) => !prev);
  };
  return (
    <>
      <Navbar
        onFeaturesToggle={handleFeaturesOpen}
        onCompanyToggle={handleCompanyOpen}
        isFeaturesOpen={featuresOpen}
        isCompanyOpen={companyOpen}
        onMenuToggle={handleMenuToggle}
        isMenuOpen={menuActive}
      />
      <Hero />
    </>
  );
}

export default Home;
