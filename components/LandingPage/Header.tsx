import Link from "next/link";
import { PawPrintIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="px-3 py-3 border-b-1">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="inline-flex gap-2">
          <PawPrintIcon className="text-purple-500" />
          <h1 className="font-semibold">FurFinder</h1>
        </div>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-500 font-sans font-semibold">
          <Link href={"#"} className="hover:text-gray-900">
            How it works
          </Link>
          <Link href={"#"} className="hover:text-gray-900">
            Featured pets
          </Link>
          <Link href={"#"} className="hover:text-gray-900">
            About us
          </Link>
        </nav>
        <button className="bg-purple-500 text-white text-sm px-3 py-2 rounded-lg cursor-pointer hover:bg-purple-600 font-semibold">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
