import React from "react";

const Mission = () => {
  return (
    <section
      id="mission"
      className="bg-gradient-to-b from-white via-purple-50 to-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-violet-700 to-fuchsia-400 bg-clip-text text-transparent mb-6">
          Our Mission
        </h1>

        {/* Decorative underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-violet-700 to-fuchsia-400 mx-auto mb-8 rounded-full"></div>

        {/* Mission text */}
        <p className="text-purple-700 leading-relaxed text-lg md:text-xl">
          At <span className="font-bold">FurFinder</span>, we believe every
          animal deserves a loving family and every family deserves the
          unconditional love of a pet. We&apos;re dedicated to connecting rescue
          animals with their perfect matches, making the adoption process
          simple, transparent, and joyful. By partnering with shelters and
          rescue organizations nationwide, we&apos;re working to reduce pet
          homelessness and create lasting bonds between pets and their new
          families.
        </p>
      </div>
    </section>
  );
};

export default Mission;
