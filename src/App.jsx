
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Reviews from "./Components/Reviews";
import Body from "./Components/Body";
import OurServices from "./Components/OurServices";
import InnovateInspireCreate from "./Components/InnovateInspireCreate ";
import MeetTeam from "./Components/MeetTeam ";
import Testimonials from "./Components/Testimonials";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#023530] text-white">
      <Navbar />
      <HeroSection />
      <Reviews />
      <Body/>
      <OurServices/>
      <InnovateInspireCreate/>
      {/* <MeetTeam/> */}
      <Testimonials/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
