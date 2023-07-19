import bgImage from "./video/background-img.mp4";
import Header from "./Component/Head/Header";
import Home from "./Component/Hero/Home";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container p-3">
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <Header />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
