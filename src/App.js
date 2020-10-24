import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import LandingSection from "./components/pages/Landing";
import AboutSection from "./components/pages/About";
import PreviousWorkSection from "./components/pages/PreviousWork";

function App() {
  return (
    <div>
      <Navigation />
      <LandingSection />
      <AboutSection />
      <PreviousWorkSection />
    </div>
  );
}

export default App;
