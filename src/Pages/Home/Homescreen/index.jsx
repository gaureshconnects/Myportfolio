import AboutMe from "../AboutMe";
import Achivement from "../Achivement"
import ContactMe from "../ContactMe";
import Certifications from "../Certifications"
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Techstack from "../Techstack";
import MyExperience from "../MyExperience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Certifications/>
      <MySkills />
      <Techstack/>
      <MyExperience/>
      <AboutMe />
      <MyPortfolio />
      <Achivement/>
      <ContactMe />
      <Footer />
    </>
  );
}
