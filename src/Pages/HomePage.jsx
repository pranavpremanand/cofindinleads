import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.png";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
import { useTheme } from "../Context/ThemeContext";
import Industries from "../Components/Industries";
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
import LeadForm from "../Components/landingpage/LeadForm";
import BrandLogos from "../Components/BrandLogos";
const HomePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <img data-aos="fade-right" src={homeaboutimg} alt="homeaboutimg" />
          <div>
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Welcome to CoFindinLeads
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
              At CoFindinLeads, we believe in the power of technology to
              transform businesses. Our team of experienced developers and
              creative minds work tirelessly to deliver innovative solutions
              tailored to your unique needs. Whether you’re looking to build a
              mobile app, a full-scale website, integrate cutting-edge
              technologies like blockchain, AR/VR, or AI, or create a smarter,
              data-driven enterprise, we have the expertise to turn your vision
              into reality.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Bridging the Cosmos with Quantum Intelligence
          </h1>
          <p className="desc max-w-[40rem] text-center" data-aos="fade-up">
            Unlock the future with CoFindinLeads — a dynamic intelligence
            ecosystem where advanced AI, quantum computing, and universal
            innovation converge. Explore a new frontier where technology meets
            cosmic vision.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <Industries />
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <Testimonials />
          <Highlights />
          <BrandLogos />
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
