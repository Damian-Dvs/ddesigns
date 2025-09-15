import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SkipLink from './components/SkipLink';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
