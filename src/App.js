import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
