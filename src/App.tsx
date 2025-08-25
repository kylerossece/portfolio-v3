import Navbar from "./components/Navbar";
import Header from "./views/Header";
import About from "./views/About";
import Footer from "./views/Footer";
import Contact from "./views/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
