import Logo from "@/assets/logo.png";

interface HeaderProps {
  isCollapsed: boolean;
  isMobile: boolean;
  toggleMenu: () => void;
}

const Header = ({ isCollapsed, isMobile, toggleMenu }: HeaderProps) => (
  <>
    {!isMobile ? (
      <div className="bg-black text-white p-4 text-center">
        <img
          src={Logo}
          alt="Logo"
          className={`mx-auto mb-4 ${isCollapsed ? 'w-8 h-8' : 'w-3/4 h-24'} ${isCollapsed ? 'md:w-12 h-12' : 'md:w-24 h-24'}`}
        />
        {!isCollapsed && <h1 className="text-4xl uppercase tracking-widest">Abrojal</h1>}
      </div>
    ) : (
      <div className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50 h-16 w-full">
        <img src={Logo} alt="Logo" className="w-12 h-12" />
        <button onClick={toggleMenu} className="text-white">
          <svg className="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    )}
  </>
);

export default Header;