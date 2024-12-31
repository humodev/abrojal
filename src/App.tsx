import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import SocialLinks from './components/SocialLinks';
import Home from './pages/Home';
import Pinturas from './pages/Pinturas';
import Galeria from './pages/Galeria';
import Telas from './pages/Telas';
import Juguetes from './pages/Juguetes';
import Artistas from './pages/Artistas';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className={`${!isMobile ? 'flex' : ''} h-screen w-screen`}>
        {!isMobile && (
          <div className={`flex flex-col justify-between transition-width duration-300 ${isCollapsed ? 'w-14 md:w-16' : 'w-1/5'} border-r border-gray-300 relative`}>
            <Header isCollapsed={isCollapsed} isMobile={isMobile} toggleMenu={toggleMobileMenu} />
            <div className="bg-white text-black flex-1 p-4 pt-12 flex flex-col justify-between relative">
              <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-b-full shadow-md"></div>
              <Menu isCollapsed={isCollapsed} isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMobileMenu} />
              {!isCollapsed && <SocialLinks isCollapsed={isCollapsed} isMobile={isMobile} />}
            </div>
            <button
              onClick={toggleMenu}
              className="absolute right-0 transform translate-x-1/2 bg-gray-300 rounded-full p-2"
              style={{ top: '50%', transform: 'translateY(-50%) translateX(50%)' }}
            >
              {isCollapsed ? <ChevronRightIcon className="w-6 h-6" /> : <ChevronLeftIcon className="w-6 h-6" />}
            </button>
          </div>
        )}
        {isMobile && (
          <>
            <Header isCollapsed={isCollapsed} isMobile={isMobile} toggleMenu={toggleMobileMenu} />
            <Menu isCollapsed={isCollapsed} isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMobileMenu} />
          </>
        )}
        <div className={`w-full p-5 overflow-y-auto`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pinturas" element={<Pinturas />} />
            <Route path="/pinturas/fotografia-reconstruida" element={<Galeria type="fotografia-reconstruida" />} />
            <Route path="/pinturas/eucastica" element={<Galeria type="eucastica" />} />
            <Route path="/pinturas/arte-colorido" element={<Galeria type="arte-colorido" />} />
            <Route path="/telas" element={<Telas />} />
            <Route path="/juguetes" element={<Juguetes />} />
            <Route path="/artistas" element={<Artistas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;