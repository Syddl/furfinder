import React from "react";

const Stats = () => {
  return (
    <section className="border-y-1 border-purple-100">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto w-full text-center py-10 gap-5">
        <div className="hover:scale-110 transition-transform duration-500 py-5">
          <h1 className="text-3xl font-bold text-purple-600">10,000+</h1>
          <p className="text-sm font-semibold text-purple-400">
            Happy Adoptions
          </p>
        </div>
        <div className="hover:scale-110 transition-transform duration-500 py-5">
          <h1 className="text-3xl font-bold text-purple-600">500+</h1>
          <p className="text-sm font-semibold text-purple-400">
            Partner Shelters
          </p>
        </div>
        <div className="hover:scale-110 transition-transform duration-500 py-5 ">
          <h1 className="text-3xl font-bold text-purple-600">50+</h1>
          <p className="text-sm font-semibold text-purple-400">
            Cities Covered
          </p>
        </div>
        <div className="hover:scale-110 transition-transform duration-500 py-5">
          <h1 className="text-3xl font-bold text-purple-600">24/7</h1>
          <p className="text-sm font-semibold text-purple-400">
            Support Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
