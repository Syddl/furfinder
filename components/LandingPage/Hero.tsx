import { Badge } from "@/components/ui/badge";
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import Image from "next/image";
import Dog from "@/assests/dog.webp";
import { SearchModal } from "./SearchModal";

const Hero = () => {
  const background = `
    radial-gradient(800px circle at 18% 22%, #ede9fe 0%, transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #f7f5ff 55%, #f3ecff 100%)
  `;

  return (
    <section style={{ backgroundImage: background }}>
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto w-full px-5 py-10 xl:px-0 md:py-30 gap-5">
        <div className="flex flex-col justify-center gap-5 ">
          <Badge
            className="bg-purple-200 text-purple-600 font-sans py-1 px-2 animate-bounce"
            variant="secondary"
          >
            <Star />
            Trusted by 10,000+ families
          </Badge>
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold">
            Adopt love.{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Discover pets near you.
            </span>
          </h1>
          <p className="max-w-prose text-md sm:text-lg text-gray-500">
            Connect with adorable pets in your area who are looking for their
            forever home. Every pet deserves love, and every family deserves the
            joy of a furry companion.
          </p>
          <div className="flex gap-2">
            <SearchModal />
            <Button
              className="border-purple-600 text-purple-600 hover:text-purple-600 hover:bg-purple-50 hover:border-purple-600 sm:text-lg sm:px-5 sm:py-5 rounded-lg cursor-pointer font-bold"
              variant={"outline"}
            >
              Learn More
            </Button>
          </div>
          <div className="flex gap-2 ">
            <Badge
              variant={"outline"}
              className="border-purple-200 text-purple-600"
            >
              <Shield />
              Verified Shelters
            </Badge>
            <Badge
              variant={"outline"}
              className="border-purple-200 text-purple-600"
            >
              <Clock />
              24/7 Support
            </Badge>
          </div>
        </div>
        <div className="sm:h-auto sm:w-auto flex items-center justify-end ">
          <Image
            priority
            src={Dog}
            alt="heroImage"
            className="  md:h-100 md:w-100 lg:h-120 lg:w-120 object-contain shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
