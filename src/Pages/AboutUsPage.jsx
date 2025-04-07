import React from "react";
import aboutusimg from "../assets/images/aboutusimg.png";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurApproach from "../Components/OurApproach";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import BlogBody from "../Components/blog/blogBody";
import { blogPosts } from "../util/blog";

const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  function getRandomPosts(posts, count) {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(blogPosts, 3);
  return (
    <div className=" bg-white dark:bg-darkblack">
      <section className="relative pt-[7rem]  overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10">
              <div>
                <h1
                  data-aos="fade-right"
                  className="text-8xl font-bold text-darkblack dark:text-white"
                >
                  About Us
                </h1>
                <p data-aos="fade-right" className="desc mt-10">
                  At CoFindinLeads, we don't just build products – we craft
                  solutions that empower businesses to thrive in a fast-moving,
                  technology-driven world. From the start, our focus has been on
                  understanding the unique needs of each client and delivering
                  tailor-made solutions that drive real results. With a talented
                  team of developers, designers, and strategists, we work
                  alongside you to transform your ideas into impactful,
                  sustainable technology. <br />
                  Our journey began with a shared vision to bridge the gap
                  between creativity and technology. Over the years, we've built
                  a reputation for delivering high-quality, scalable solutions
                  that help our clients navigate the challenges of the digital
                  age. Whether you're a startup looking to make your mark or an
                  established brand seeking to innovate, we are here to support
                  you every step of the way.
                </p>

                {/* Know Our CEO Section */}
                <div className="mt-8" data-aos="fade-right">
                  <h3 className="text-2xl font-semibold text-darkblack dark:text-white mb-4">
                    Know Our CEO
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://thecconnects.com/ussuof-m-khan-founder-ceo-at-cofindinleads-exclusive-interview/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      • Exclusive Interview with Ussuof M Khan, Founder & CEO at
                      CoFindinLeads
                    </a>
                    <a
                      href="https://boroktimes.com/from-humble-beginnings-to-global-success-the-inspiring-journey-of-ussuof-m-khan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      • From Humble Beginnings to Global Success: The Inspiring
                      Journey of Ussuof M Khan
                    </a>
                  </div>
                </div>
              </div>
              <img data-aos="fade-left" src={aboutusimg} alt="aboutus-img" className="h-full object-cover" />
            </div>
          </div>
        </section>
      </section>
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
          <div className="flex justify-center items-center flex-col paddingtop paddingbottom">
            <div
              data-aos="fade-up"
              className="bg-white rounded-full py-2 px-6 shadow-md text-lg font-medium"
            >
              Latest Insights
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 wrapper paddingtop  ">
              {randomPosts.map((post, index) => (
                <BlogBody key={index} {...post} passkey={true} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
