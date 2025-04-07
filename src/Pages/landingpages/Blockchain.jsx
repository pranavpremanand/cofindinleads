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
import Portfolio from "../../Components/Portfolio";
import Banner from "../../Components/landingpage/Banner";
import blockchainAboutImg from "../../assets/images/blockchain-development.webp";
import Ourvalues from "../../Components/Ourvalues";
import BrandLogos from "../../Components/BrandLogos";
import TechnologiesUsed from "../../Components/landingpage/TechnologiesUsed";
import Industries from "../../Components/Industries";
import WhatsAppIcon from "../../Components/WhatsApp";

const BlockchainLandingPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const bannerTitle = "Secure. Decentralized. Future-Ready.";
  const bannerDesc =
    "Build Blockchain Applications That Inspire Trust and Innovation";

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
                src={blockchainAboutImg}
                alt="Blockchain Development"
                className="h-full object-cover w-full"
              />
            </div>
            <div>
              <h1 className="main-title leading-tight">
                Next-Gen Blockchain Solutions for Modern Enterprises
              </h1>
              <p className="desc mt-4">
                CoFindinLeads brings deep expertise in blockchain development to
                build decentralized apps, smart contracts, and secure digital
                ecosystems. Whether you're entering the Web3 space, launching a
                token, or implementing distributed ledgers for your enterprise,
                our team ensures transparency, scalability, and performance. Let
                us help you disrupt the market with blockchain-based innovations
                built for tomorrow.
              </p>
            </div>
          </div>
        </section>

        <LandingServices page="blockchain" />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
          />
          <Portfolio page="blockchain" />
          <TechnologiesUsed service="blockchain" />
          <Industries />
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

export default BlockchainLandingPage;
