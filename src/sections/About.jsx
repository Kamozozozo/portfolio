import React from 'react'

const highlights = [
  "Passionate about crafting seamless user experiences and efficient backend solutions.",
  "Proficient in React, Spring Boot, and a wide range of modern web technologies.",
  "Dedicated to continuous learning and staying up-to-date with industry trends.",
  "Committed to delivering high-quality, maintainable code and collaborating effectively in team environments."
]

const About = () => {
  return (
    <section id="about" className="p-9 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-8">

          {/* About me heading */}
          <div className="animate-fade-in">
            <span className=" text-sm font-bold tracking-wider uppercase text-primary glow-text">about me</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold  text-primary glow-text tracking-tight animate-fade-in animation-delay-100 ">
            building the future
            <span className="font-serif italic font-normal text-white"> One Component at a time is better</span>
          </h2>

          {/* Full-width 2-column layout */}
          <div className="flex flex-col lg:flex-row w-full gap-8">
             <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 w-full lg:w-1/2">
              <p>
                I am a recent motivated graduate in Honors Computer Science with a strong foundation in software development, full-stack, web applications, backend systems, and strong academic background in computer science. I developed a deep curiosity for learning and mastering new technologies. I view my career as a journey of continuous contribution as I am seeking a position to apply my skills with the aim of contributing and building high-quality applications that solve real-world problems while meeting the client’s requirements, and growing as part of a dynamic and collaborative team.
              </p>
            </div>

          
            <div className="glass rounded-2xl p-5 glow-border animate-fade-in animation-delay-300 w-full lg:w-1/2">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create impactful and innovative software solutions that enhance user experiences and drive technological advancement. I am passionate about crafting seamless user interfaces and efficient backend systems that solve real-world problems. I am committed to continuous learning and staying up-to-date with industry trends to ensure that my work remains relevant and impactful in the ever-evolving tech landscape."
              </p>
            </div>

          </div>
          {/* Skills and highlights grid */}
          <div className="grid  sm:grid-cols-2 gap-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="glass p-6 rounded-2xl animate-fade-in"
              style={{animationDelay:`${(index+1)* 100}ms`}}
              >
                <p className="text-sm text-muted-foreground">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
