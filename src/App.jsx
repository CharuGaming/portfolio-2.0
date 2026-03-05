import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen flex flex-col font-inter bg-background text-text selection:bg-blue-100 selection:text-blue-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />


      <div className="relative z-10 flex flex-col min-h-screen">
        <CustomCursor />
        <Navbar />
        <SocialSidebar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
