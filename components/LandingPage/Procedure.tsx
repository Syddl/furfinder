import { EyeIcon, Phone, SearchIcon } from "lucide-react";

const Procedure = () => {
  return (
    <section
      className="py-15 md:py-25 bg-gradient-to-b from-white via-white to-purple-50"
      id="procedure"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-5 font-sans">
        <div className="text-center ">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-violet-700 to-fuchsia-400 bg-clip-text text-transparent mb-3">
            How it works
          </h1>
          <p className="text-purple-400">
            Three easy steps to meet your new companion.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-10 px-5 ">
            <div className="text-center hover:scale-105 transition-transform duration-500 p-6 rounded-lg shadow-lg shadow-white-200 flex flex-col gap-5 bg-white border-1 border-gray-100">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-purple-100 p-4 rounded-full">
                    <SearchIcon className="text-purple-700 h-7 w-7" />
                  </div>
                  <div className="bg-purple-600 px-2.5 py-0.5 rounded-full absolute left-11 top-10">
                    <h1 className="text-white font-bold">1</h1>
                  </div>
                </div>
              </div>
              <div className="gap-4 flex flex-col">
                <h1 className="text-xl font-semibold text-gray-800">
                  Search for Pets
                </h1>
                <p className="text-md text-gray-500">
                  Browse through hundreds of adorable pets available for
                  adoption in your area with advanced filters
                </p>
              </div>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-500 p-6 rounded-lg shadow-lg shadow-white-200 flex flex-col gap-5 bg-white border-1 border-gray-100">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-purple-100 p-4 rounded-full">
                    <EyeIcon className="text-purple-700 h-7 w-7" />
                  </div>
                  <div className="bg-purple-600 px-2 py-0.5 rounded-full absolute left-11 top-10">
                    <h1 className="text-white font-bold">2</h1>
                  </div>
                </div>
              </div>
              <div className="gap-4 flex flex-col">
                <h1 className="text-xl font-semibold text-gray-800">
                  View Profiles
                </h1>
                <p className="text-md text-gray-500">
                  Learn about each pet&apos;s personality, age, medical history,
                  and special needs through detailed profiles
                </p>
              </div>
            </div>
            <div className="text-center hover:scale-105 transition-transform duration-500 p-6 rounded-lg shadow-lg shadow-white-200 flex flex-col gap-5 bg-white border-1 border-gray-100">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-purple-100 p-4 rounded-full">
                    <Phone className="text-purple-500 h-7 w-7" />
                  </div>
                  <div className="bg-purple-600 px-2 py-0.5 rounded-full absolute left-11 top-10">
                    <h1 className="text-white font-bold">3</h1>
                  </div>
                </div>
              </div>
              <div className="gap-4 flex flex-col">
                <h1 className="text-xl font-semibold text-gray-800">
                  Contact & Adopt
                </h1>
                <p className="text-md text-gray-500">
                  Connect directly with shelters and rescue organizations to
                  start the adoption process seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedure;
