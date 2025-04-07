import React from "react";
import LandingHeader from "../../Components/landingpage/LandingHeader";
import LandingFooter from "../../Components/landingpage/LandingFooter";
import LandingServices from "../../Components/landingpage/LandingServices";
import { useTheme } from "../../Context/ThemeContext";
import CoreValues from "../../Components/CoreValues";
import VisionMission from "../../Components/VisionMission";
import OurApproach from "../../Components/OurApproach";
import UnlockEfficiency from "../../Components/UnlockEfficiency";
import LeadForm from "../../Components/landingpage/LeadForm";
import Banner from "../../Components/landingpage/Banner";
import aiAboutImg from "../../assets/images/ai-development.webp";
import Ourvalues from "../../Components/Ourvalues";
import BrandLogos from "../../Components/BrandLogos";
import TechnologiesUsed from "../../Components/landingpage/TechnologiesUsed";
import Industries from "../../Components/Industries";
import WhatsAppIcon from "../../Components/WhatsApp";

const AiLandingPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const bannerTitle = "Empower Your Business with AI Solutions";
  const bannerDesc =
    "Leverage Artificial Intelligence for Smart, Scalable Growth";

  return (
    <>
      <WhatsAppIcon />
      <LandingHeader />
      <div id="banner" className="bg-white dark:bg-darkblack">
        <Banner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <div className="flex flex-col h-full max-h-[24rem] overflow-hidden">
              <img
                src={aiAboutImg}
                alt="AI Development"
                className="h-full object-cover w-full"
              />
            </div>
            <div>
              <h1 className="main-title leading-tight">
                Intelligent AI-Powered Systems for a Smarter Future
              </h1>
              <p className="desc mt-4">
                At CoFindinLeads, we design and build intelligent AI solutions
                to transform your business operations. From predictive analytics
                and machine learning models to NLP and computer vision, our AI
                development services empower you to automate, optimize, and
                innovate. Whether you're enhancing customer engagement or
                streamlining internal processes, our solutions are designed to
                scale with precision and security. Let’s redefine what’s
                possible—together.
              </p>
            </div>
          </div>
        </section>

        <LandingServices page="ai" />
        <TechnologiesUsed service="ai" />
        <Industries />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
          />
          <section className="relative z-10 w-full h-full">
            <CoreValues />
            <VisionMission />
            <OurApproach />
            <UnlockEfficiency />
            <Ourvalues />
            <BrandLogos />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default AiLandingPage;
