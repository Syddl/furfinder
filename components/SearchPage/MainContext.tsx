import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { MobileFilter } from "./MobileFIlter";
import PetCard from "../PetCard";
import FilterSideBar from "./FilterSideBar";

const MainContext = () => {
  return (
    <main className="bg-purple-50 px-5 py-10">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="flex flex-col gap-5">
          <div className="">
            <h1 className="text-3xl font-bold mb-1">Find Your Furfect Pet</h1>
            <p className="text-gray-500 font-medium">
              Showing 127 pets available for adoption near you
            </p>
          </div>
          <div className="flex flex-col md:flex-row  gap-5">
            <Input
              height={5}
              placeholder="Search by breed, name, or location..."
              className="bg-white h-10 border-purple-600 "
            />
            <Button className="h-10 bg-purple-600 hover:bg-purple-500 cursor-pointer">
              <Search />
              Search
            </Button>
          </div>
          <div className="mb-5">
            <MobileFilter />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <FilterSideBar />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
            <PetCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContext;
