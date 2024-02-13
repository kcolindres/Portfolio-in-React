import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Involvement from "./components/Involvement";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Involvement />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
