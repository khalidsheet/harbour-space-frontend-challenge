import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import BottomNav from "./components/BottomNav/BottomNav";
import Faq from "./components/FAQ/Faq";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import { getScholarshipDetails } from "./services/getScholarshipDetails";
import { useGlobalState } from "./state/global-state";

function App() {
  const setGlobalResponse = useGlobalState((state) => state.setResponse);
  const response = useGlobalState((state) => state.response);

  useEffect(() => {
    getScholarshipDetails().then((response) => {
      const data = response?.data;
      console.log({ data });
      setGlobalResponse(data);
      console.log({ response });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        <About />
      </div>
      <Testimonials />
      <div className="container">
        <Faq />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
