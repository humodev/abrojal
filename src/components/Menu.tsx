import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Pinturas', path: '/pinturas', submenu: [
      { name: 'Fotografía reconstruida', path: '/pinturas/fotografia-reconstruida' },
      { name: 'Eucastica', path: '/pinturas/eucastica' },
      { name: 'Arte Colorido', path: '/pinturas/arte-colorido' },
    ] 
  },
  { name: 'Telas', path: '/telas' },
  { name: 'Juguetes', path: '/juguetes' },
  { name: 'Artistas', path: '/artistas' },
];

interface MenuProps {
  isCollapsed: boolean;
  isMobile: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Menu = ({ isCollapsed, isMobile, isMenuOpen, toggleMenu }: MenuProps) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
    if(isMenuOpen) toggleMenu();
  }, [location.pathname]);

  return (
    <>
      {!isMobile ? (
        <nav className={`space-y-4 ${isCollapsed ? 'hidden' : 'block'}`}>
          {menuItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                className={`block py-2 px-4 text-lg font-medium hover:font-bold hover:text-black bg-white text-black hover:bg-white ${activePath === item.path ? 'font-bold' : ''} uppercase`}
                onClick={() => setActivePath(item.path)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="ml-4 space-y-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.path}
                      to={subitem.path}
                      className={`block py-1 px-4 text-lg font-medium hover:font-bold hover:text-black bg-white text-black hover:bg-white ${activePath === subitem.path ? 'font-bold' : ''} uppercase`}
                      onClick={() => setActivePath(subitem.path)}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      ) : (
        isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col justify-center items-center">
            <nav className="space-y-4 text-center">
              {menuItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-2 px-4 text-lg font-medium hover:font-bold hover:text-white text-white ${activePath === item.path ? 'font-bold' : ''} uppercase`}
                    onClick={() => setActivePath(item.path)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.path}
                          to={subitem.path}
                          className={`block py-1 px-4 text-lg font-medium hover:font-bold hover:text-white text-white ${activePath === subitem.path ? 'font-bold' : ''} uppercase`}
                          onClick={() => setActivePath(subitem.path)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <button onClick={toggleMenu} className="mt-8 bg-white text-black rounded-full p-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        )
      )}
    </>
  );
};

export default Menu;