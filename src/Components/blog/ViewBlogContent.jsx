import React from "react";

function ViewBlogContent({ blogdetails }) {
  return (
    <div className="">
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white my-4"
          data-aos="fade-up"
        >
          Overview
        </h2>
        <p className="text-black dark:text-gray-400" data-aos="fade-up">
          {blogdetails.summary}
        </p>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white mb-4"
          data-aos="fade-up"
        >
          Key Topics Covered
        </h2>
        <ul
          data-aos="fade-up"
          className="list-disc list-inside text-black dark:text-gray-400 space-y-5"
        >
          {blogdetails.content.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </section>

      {/* <section className="mb-8">
        <blockquote
          data-aos="fade-up"
          className="pl-4 italic text-black dark:text-gray-400"
        >
          <p>
            "The blend of blockchain's trust layer with AI's intelligence layer
            is powering the next phase of digital transformation."
          </p>
          <cite className="mt-2 text-black dark:text-gray-400">
            - {blogdetails.title.split(":")[0]}, Industry Expert
          </cite>
        </blockquote>
      </section>

      <section>
        <h2
          data-aos="fade-up"
          className="text-2xl font-semibold mb-4 dark: text-gray-400"
        >
          Why Read This?
        </h2>
        <p data-aos="fade-up" className="text-black dark:text-gray-400">
          This article provides a comprehensive overview of how{" "}
          {blogdetails.title} is transforming the technological landscape in
          2025. Understanding these innovations is crucial for anyone interested
          in the future of decentralized systems and artificial intelligence.
        </p>
      </section> */}
    </div>
  );
}

export default ViewBlogContent;
