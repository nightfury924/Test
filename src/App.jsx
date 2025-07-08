import "./App.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import InstallationSection from "./components/InstallationSection";
import CharitySection from "./components/CharitySection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadSection from "./components/DownloadSection";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <InstallationSection />
      <CharitySection />
      <TestimonialsSection />
      <DownloadSection />
    </div>
  );
}

export default App;
