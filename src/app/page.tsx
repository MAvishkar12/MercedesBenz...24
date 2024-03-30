import HeroSection from "./components/HeroSection";
import FeaturedCourses from './components/FeaturedCourses'
import WhyChooseUs from "./components/WhyChooseUs";
import Cards from "./components/Cards";
import UpComingWebiner from "./components/UpComingWebiner";
import Instrucors from "./components/Instrucors";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
     <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
         
          <HeroSection></HeroSection>
          <FeaturedCourses></FeaturedCourses>
          <WhyChooseUs></WhyChooseUs>
          <Cards></Cards>
          <UpComingWebiner></UpComingWebiner>
          <Instrucors></Instrucors>
          <Footer></Footer>
          
     </main>
    </div>
  );
}
