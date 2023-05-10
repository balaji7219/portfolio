import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />

      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
