import React from "react";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import LandingSection from "./sections/Landing/LandingSection";
import AboutSection from "./sections/About/AboutSection";
import WorkSection from "./sections/Work/WorkSection";
import ContactSection from "./sections/Contact/ContactSection";
import ProjectsSection from "./sections/Projects/ProjectSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <LandingSection />
      <AboutSection />
      <WorkSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
