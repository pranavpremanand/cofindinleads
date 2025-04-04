import React from "react";
import LandingHeader from "../Components/landingpage/LandingHeader";
import LandingFooter from "../Components/landingpage/LandingFooter";
import LandingServices from "../Components/landingpage/LandingServices";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurApproach from "../Components/OurApproach";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import LeadForm from "../Components/landingpage/LeadForm";
import Portfolio from "../Components/Portfolio";
import Banner from "../Components/landingpage/Banner";
import webAboutImg from "../assets/images/web-development.webp";
import appAboutImg from "../assets/images/app-development.webp";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const isWeb = page === "web";

  let bannerTitle = isWeb
    ? "Unlock the Next Wave of Web Development"
    : "Unlock the Next Wave of App Development";
  let bannerDesc = isWeb
    ? "Transforming Ideas into Immersive Digital Experiences"
    : "Transforming Ideas into Immersive Mobile Experiences";
  return (
    <>
      <LandingHeader />
      <div id="banner" className="bg-white dark:bg-darkblack">
        <Banner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <div className="flex flex-col h-full max-h-[24rem] overflow-hidden">
              <img
                src={isWeb ? webAboutImg : appAboutImg}
                alt="About Us"
                className="h-full object-cover w-full"
              />
            </div>
            <div>
              <h1 className="main-title leading-tight">
                {isWeb
                  ? "Build Future-Ready Websites That Perform"
                  : "Create Impactful Mobile Apps That Scale"}
              </h1>
              <p className="desc mt-4">
                {isWeb
                  ? "At CoFindinLeads, we specialize in building high-performance, scalable, and visually stunning websites that drive business growth. Our team of experts transforms your ideas into powerful digital experiences, ensuring a strong online presence for your brand. From custom design to responsive development, we tailor each solution to meet your business goals. Whether you’re launching a new site or revamping an existing one, we provide strategic insights, SEO optimization, and seamless integrations to help you stand out. Let us empower your digital transformation with technology that performs and design that resonates."
                  : "At CoFindinLeads, we craft robust, scalable, and visually captivating mobile applications tailored to elevate your business. From concept to deployment, our team ensures seamless user experiences that bring your vision to life across all devices. We leverage cutting-edge technologies and native/hybrid frameworks to create high-performance apps with smooth UX, optimized performance, and future-ready infrastructure. Whether it's iOS, Android, or cross-platform development, we align every detail with your brand’s mission. Our agile process, attention to detail, and passion for innovation make us the go-to partner for businesses aiming to make a lasting impression in the mobile space."}
              </p>
            </div>
          </div>
        </section>

        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
          />
          <Portfolio page={page} />
          <section className="relative z-10 w-full h-full">
            <CoreValues />
            <VisionMission />
            <OurApproach />
            <UnlockEfficiency />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
