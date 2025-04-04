import ourApproach from "../assets/images/ourapproach.webp";

const OurApproach = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid lg:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            Our Approach
          </h3>
          <p className="desc mt-4 space-y-4" data-aos="fade-right">
            At CoFindinLeads, we follow a straightforward yet effective process
            that ensures your project is delivered on time, within budget, and
            to the highest standards. Our approach is centered around
            collaboration, communication, and clarity, making the entire
            development journey a seamless experience.
            <br />
            <br />
            <strong>1. Discovery & Planning:</strong>
            <br />
            We start by getting to know your business inside and out. Through
            consultations, research, and discussions, we define clear goals and
            objectives for the project. This phase ensures that we’re aligned
            with your vision and sets the stage for a successful outcome.
            <br />
            <br />
            <strong>2. Design & Prototyping:</strong>
            <br />
            Once the strategy is in place, our design team works on creating
            wireframes and prototypes to give you a visual representation of the
            final product. This phase allows for early feedback and adjustments,
            ensuring that the design aligns with your expectations before moving
            forward.
            <br />
            <br />
            <strong>3. Development:</strong>
            <br />
            Our skilled developers bring the project to life, using the best
            tools and technologies to build a scalable, secure, and
            high-performing solution. Throughout the development process, we
            focus on quality and functionality, ensuring that the solution not
            only meets your needs but exceeds your expectations.
            <br />
            <br />
            <strong>4. Testing & Quality Assurance:</strong>
            <br />
            Before launching, we put the solution through rigorous testing to
            ensure it works as intended. Our QA process covers everything from
            functionality and usability to security and performance, ensuring a
            seamless user experience.
            <br />
            <br />
            <strong>5. Launch & Ongoing Support:</strong>
            <br />
            Once the project is ready, we guide you through the launch process
            and provide continued support to ensure your solution performs
            optimally. We’re here for the long term, offering maintenance and
            updates as needed to keep your technology current and effective.
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="h-full object-cover"
          src={ourApproach}
          alt="Our Approach"
        />
      </div>
    </section>
  );
};

export default OurApproach;
