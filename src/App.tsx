import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { initScrollReveal } from './utils/scrollReveal';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      initScrollReveal();
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
