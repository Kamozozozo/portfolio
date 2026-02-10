import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="flex items-center justify-center min-h-screen px-6"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Education
        </h2>

        <div className="flex">

          {/* Timeline */}
          <div className="flex flex-col items-center mr-8 ">
            <span className="text-primary font-bold">2016</span>
            <div className="w-px md:h-20  lg:h-20 h-26 bg-primary" />
            <span className="text-primary font-bold">2021</span>
            <div className="w-px md:h-20  lg:h-20 h-26  bg-primary" />
            <span className="text-primary font-bold">2022</span>
            <div className="w-px md:h-20  lg:h-20 h-26  bg-primary" />
            <span className="text-primary font-bold">2024</span>
            <div className="w-px md:h-20  lg:h-20 h-26  bg-primary" />
            <span className="text-primary font-bold">2025</span>
            <div className="w-px md:h-20  lg:h-20 h-26  bg-primary" />
            <span className="text-primary font-bold">2026</span>
            
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-8 py-6">

            {/* High School */}
            <div className="bg-background shadow-md rounded-xl px-6">
              <h3 className="text-lg font-semibold text-primary">
                Cosmo City Secondary School 1
              </h3>
              <p className="text-sm mt-1">2016 – 2021</p>
              <p className="text-sm mt-2 text-muted-foreground">
                Obtained my National Senior Certificate with an average of <span className="font-bold text-primary">74%</span>.
              </p>
            </div>

            {/* BSc */}
            <div className="bg-background shadow-md rounded-xl px-6  md:py-20 xl:py-20 sm:py-10 py-6">
              <h3 className="text-lg font-semibold text-primary">
                Bachelor of Science (BSc) in Computer Science
              </h3>
              <p className="text-sm mt-1">2022 – 2024</p>
              <p className="text-sm mt-2 text-muted-foreground">
                Completed my Bachelor of Science degree in computer science, focusing on
                software development, algorithms, and web technologies with a comulative average of <span className="font-bold text-primary">80%</span> for final year and a comulative of <span className="font-bold text-primary">83%</span> for the  degree .
              </p>
            </div>

            {/* Honours */}
            <div className="bg-background shadow-md rounded-xl px-6 py-0">
              <h3 className="text-lg font-semibold text-primary">
                Bachelor of Science Honours (Computer Science)
              </h3>
              <p className="text-sm mt-1">2025 – 2025</p>
              <p className="text-sm mt-2 text-muted-foreground">
                I recently completed my Bachelor of Science Honours degree in Computer Science, specializing in
                advanced computing concepts and research-based learning with a  average of<span className="font-bold text-primary"> 75%</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
