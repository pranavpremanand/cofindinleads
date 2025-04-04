import React from "react";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../util/constant";
import RoundedHeader from "../RoundedHeader";

const LandingServices = ({ page }) => {
  const isWeb = page === "web";
  const services = isWeb ? webDevelopmentServices : appDevelopmentServices;
  return (
    <div id="services" className="flex justify-center relative">
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
        <RoundedHeader
          title={`Our ${isWeb ? "Web" : "App"} Development Services`}
        />

        <h1 data-aos="fade-up" className="main-title max-w-4xl text-center">
          {isWeb &&
            "Empowering Brands Through Innovative Web Development Solutions"}
          {page === "app" &&
            "Next-Gen Mobile App Development for Smart, Scalable Solutions"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-4xl desc">
          {isWeb
            ? "We design and develop high-performance, responsive, and SEO-optimized websites tailored to your brand’s unique goals. From interactive UI/UX to enterprise-grade web applications, our solutions are built to scale and impress."
            : "We build intuitive, high-performance mobile apps that deliver seamless user experiences across Android and iOS. Our process focuses on functionality, performance, and design to help you connect with users and grow your mobile presence."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow-2xl transition-all  hover:-translate-y-1 duration-300 rounded-lg"
            >
              <div className="   group rounded-lg bg-backgro-gradient  hover:scale-105 dark:shadow-primary hover:shadow-primary shadow-lg p-[1px] transition-all h-full duration-500 overflow-hidden">
                <div className="rounded-lg bg-white dark:bg-darkblack hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {<item.img />}
                      </div>
                    </div>
                    <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                      {item.title}
                    </h5>
                    <p className="desc text-primarytextcolor">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
