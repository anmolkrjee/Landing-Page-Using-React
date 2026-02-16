
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Features from './component/Features';
import CTA from './component/CTA';


import Footer from './component/Footer';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
      <Contact />
    </>
  );
}

export default App;
