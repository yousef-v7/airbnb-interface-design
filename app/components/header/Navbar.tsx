import { FaGlobe, FaBars, FaUserCircle } from "react-icons/fa";

const Navbar = ({ iconsOnly }) => {
  return (
    <div className="flex items-center space-x-4 text-gray-500">
      {/* Hide "Become a host" text on small screens */}
      {!iconsOnly && <p className="hidden md:inline cursor-pointer">Become a host</p>}

      {/* Icons always visible */}
      <FaGlobe className="h-5 w-5 cursor-pointer" />

      <div className="flex space-x-2 border-2 p-2 rounded-full">
        <FaBars className="h-5 w-5" />
        <FaUserCircle className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Navbar;
