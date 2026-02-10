import React from "react";

const projects = [
  {
    title: "Crop Production Analyzer",
    description:
      "A data analysis tool that explores and interprets crop production data, offering insights and analytical results based on the code available in the repository.",
    tech: "Python, data analysis",
    github: "https://github.com/Kamozozozo/Crop-Production-Analyzer"
  },
  {
    title: "Todo List Application",
    description:
      "A todo list application built with React, allowing users to manage tasks efficiently with features like adding, editing, and deleting tasks.",
    tech: "React + Vite + CSS",
    github: "https://github.com/Kamozozozo/Todo-demo"
  },
  {
    title: "Weather App",
    description:
      "A weather application, allowing users to view current weather conditions and forecasts for various locations.",
    tech: "HTML + JavaScript + CSS",
    github: "https://github.com/Kamozozozo/WeatherApp"
  },
  {
    title: "ChatBot Application",
    description:
      "A chatbot application built with HTML, CSS, and JavaScript, allowing users to interact with a basic conversational interface mainly for first time entering students.",
    tech: "HTML + JavaScript + CSS",
    github: "https://github.com/Kamozozozo/basic-chatbot"
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and experience in a visually appealing and responsive design.",
    tech: "React + Tailwind CSS",
    github: "https://github.com/Kamozozozo/portfolio"
  },
  {
    title: "Event Management System",
    description:
      "An event management system built with React and MERN stack, allowing users to create, manage, and register for events, aiming to digitalize distribution of paper flyers.",
    tech: "MERN Stack",
    github: "https://github.com/Kamozozozo/EventManagement-main"
  },
  {
    title: "StartupHub Website",
    description:
      "A website for StartupHub, showcasing various startups and their details.",
    tech: "Spring Boot + React + Tailwind CSS + MySQL",
    github: "https://github.com/Kamozozozo/SmartLearn"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-primary text-center mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background shadow-md rounded-xl p-6 hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold text-primary">
              {project.title}
            </h3>

            <p className="text-muted-foreground mt-2 text-justify">
              {project.description}
            </p>

            <p className="text-sm mt-3 text-primary">
              Tech Stack: {project.tech}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 underline text-sm"
            >
              View Source Code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
