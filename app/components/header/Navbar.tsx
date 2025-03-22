import { FaGlobe, FaBars, FaUserCircle } from "react-icons/fa";

interface NavbarProps {
  iconsOnly: boolean;
}

const Navbar = ({ iconsOnly }: NavbarProps) => {
  return (
    <div className="flex items-center space-x-4 text-gray-500">
      {/* Conditional "Become a host" text */}
      {!iconsOnly && (
        <button className="hidden md:inline text-sm font-medium hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
          Become a host
        </button>
      )}

      {/* Globe icon */}
      <button
        aria-label="Select language"
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <FaGlobe className="h-5 w-5" />
      </button>

      {/* Profile section */}
      <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-md transition-shadow">
        <button aria-label="Menu">
          <FaBars className="h-5 w-5" />
        </button>
        <button aria-label="User profile">
          <FaUserCircle className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;