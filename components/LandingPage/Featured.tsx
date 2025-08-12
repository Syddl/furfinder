import PetCard from "../PetCard";

const Featured = () => {
  return (
    <section className="py-15 bg-gradient-to-b from-purple-50 via-purple-100 to-purple-100">
      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center">
        <div className="text-center mb-5">
          <h1 className="font-bold text-4xl bg-gradient-to-r from-violet-700 to-fuchsia-400 bg-clip-text text-transparent  mb-3">
            Featured Pets
          </h1>
          <p className="text-purple-400">
            Meet some of our adorable friends who are looking for their forever
            homes
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
        <button></button>
      </div>
    </section>
  );
};

export default Featured;
