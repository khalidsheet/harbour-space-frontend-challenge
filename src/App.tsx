import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        <About />
      </div>
      <Testimonials />
    </div>
  );
}

export default App;
