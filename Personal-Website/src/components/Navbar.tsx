import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 dark:border-blue-400 pb-1'
    : 'text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200';


  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <Link to="/" className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Luke Thompson
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg">
          <NavLink to="/" className={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyles}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkStyles}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkStyles}>
            Contact
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
