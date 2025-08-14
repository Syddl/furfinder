import { Github, Globe, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-y-1 border-purple-200 text-gray-500 px-5 py-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row  justify-between items-center gap-5">
        <p>© 2025 FurFinder. All rights reserved.</p>
        <div className="flex items-center gap-5 cursor-pointer">
          <Link target="_blank" href={"https://www.devjustine.me/"}>
            <Globe className="hover:text-gray-600 h-5 w-5" />
          </Link>
          <Link target="_blank" href={"https://github.com/Syddl"}>
            <Github className="hover:text-gray-600 h-5 w-5" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/justine-jude-cuevas-6b6235285/"}
          >
            <Linkedin className="hover:text-gray-600 h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
