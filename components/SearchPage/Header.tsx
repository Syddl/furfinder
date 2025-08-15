import { PawPrintIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-5 py-4  border-purple-100 border-b-solid border-b-1 sticky top-0 bg-white/80 z-50">
      <div className="flex items-center justify-start max-w-7xl mx-auto w-full">
        <Link className="inline-flex gap-2" href="/">
          <PawPrintIcon className="text-purple-600" />
          <h1 className="font-semibold">FurFinder</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
