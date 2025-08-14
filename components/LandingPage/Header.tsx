import Link from "next/link";
import { PawPrintIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="px-5 py-3  border-purple-100 border-b-solid border-b-1 sticky top-0 bg-white/80 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="inline-flex gap-2">
          <PawPrintIcon className="text-purple-600" />
          <h1 className="font-semibold">FurFinder</h1>
        </div>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-500 font-sans font-semibold">
          <Link href={"#procedure"} className="hover:text-gray-900">
            How it works
          </Link>
          <Link href={"#featured"} className="hover:text-gray-900">
            Featured pets
          </Link>
          <Link href={"#mission"} className="hover:text-gray-900">
            About us
          </Link>
        </nav>
        <button className="bg-purple-600 text-white text-sm px-3 py-2 rounded-lg cursor-pointer hover:bg-purple-500 transition font-semibold">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
