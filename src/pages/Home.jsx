/** @format */

import React from "react";
import { Header, Hero, HeroImages } from "../components";
const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="h-screen">
        <Hero />
        <HeroImages />
      </main>
    </>
  );
};

export default Home;
