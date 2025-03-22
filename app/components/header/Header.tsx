// components/header/Header.tsx
import Link from "next/link";
import Image from "next/image";
import logImg from "@/public/Airbnb_Logo_Bélo.svg.png";
import logoPhone from "@/public/Logo_Phone.svg";
import SearchBar from "@/app/components/header/Searchbar";
import Navbar from "@/app/components/header/Navbar";

interface HeaderProps {
  placeholder?: string;
}

const Header = ({ placeholder }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-x-4 py-4 px-4 sm:px-8 md:px-16 lg:px-24 bg-white shadow-sm relative">
      {/* Logo Section */}
      <Link href="/" className="flex items-center">
        <div className="hidden sm:block">
          <Image src={logImg} alt="logo" width={100} height={50} />
        </div>
        <div className="block sm:hidden">
          <Image src={logoPhone} alt="logo for phones" width={30} height={40} />
        </div>
      </Link>

      {/* Searchbar */}
      <div className="hidden sm:flex flex-grow justify-center md:w-[50%] lg:w-[60%]">
        <SearchBar placeholder={placeholder} />
      </div>

      {/* Responsive Navbar */}
      <div className="flex sm:hidden">
        <Navbar iconsOnly={true} />
      </div>
      <div className="hidden sm:flex">
        <Navbar iconsOnly={false} />
      </div>
    </header>
  );
};

export default Header;