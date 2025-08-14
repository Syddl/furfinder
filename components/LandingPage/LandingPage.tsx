import Header from "./Header";
import Hero from "./Hero";
import Stats from "./Stats";
import Procedure from "./Procedure";
import Featured from "./Featured";
import Mission from "./Mission";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Stats />
      <Procedure />
      <Featured />
      <Mission />
      <Footer />
    </div>
  );
};

export default LandingPage;
