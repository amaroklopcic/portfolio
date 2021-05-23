import React, { useEffect } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import LandingSection from "./components/pages/Landing";
import AboutSection from "./components/pages/About";
import PreviousWorkSection from "./components/pages/PreviousWork";
import ContactSection from "./components/pages/Contact";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <LandingSection />
      <AboutSection />
      <PreviousWorkSection />
      <ContactSection />
    </div>
  );
}

export default App;
