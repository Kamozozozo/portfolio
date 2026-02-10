import React from "react";
import heroImage from "../assets/hero-bg.jpg";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import Him from "../assets/Him.png";

const skills=[
  "React",
  "JavaScript",
  "Spring Boot",
  "HTML/CSS",
  "docker",
  "git",
  "tailwindcss",
  "mongodb",
  "mysql",
  "figma",

]
const Hero = () => {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-70 bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${Math.random() * 10 + 5}s  ease-in-out infinite`,
              animationDelay:`${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/*left and right floating elements*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-text items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2  rounded-full animate-pulse">
                Software Engineer + React and Spring boot specialist
              </span>
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                crafting <span className="text-primary glow-text"> digital</span>
             
              <br/>
              experience with
              <br/>
              <span className="font-serif italic font-normal text-white"> precision</span>
               </h1>
              <p className="text-lg text-muted-foreground  max-w-lg animate-fade-in animation-delay-200">
                Hi, My Name is Kamogelo Matabane ,a recent graduate from the University of Unizulu, I'm a passionate software engineer specializing in React and Spring Boot. I create seamless digital experiences that blend creativity with functionality.if you want to know more about me, feel free to explore my portfolio and get in touch!
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button size="lg" className="animate-fade-in animation-delay-300">Get in Touch</Button>
              <AnimatedBorderButton/>
            </div>
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me :</span>
              {[{href:"https://linkedin.com/in/kamogelo-matabane-724953338",label:"linkedin"},{href:"https://github.com/Kamozozozo",label:"github"}].map((link,index)=>(
                <a key={index} href={link.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">{link.label}</a>
              ))}
            </div>
          </div>
          {/*image*/}
          <div className="relative animate-fade-in animation-delay-300">
          <div className="relative max-w-md mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10   animate-pulse">
            <div className="relative glass rounded-3xl p-2 glow-border">
            <img src={Him} alt="Hero background" className="w-full aspect-[4/5]  object-cover rounded-2xl shadow-lg" />
            <div className="absolute -bottom-4  -right-4 glass rounded-xl px-4 py-3 animate-float animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"/>
                <span className="tet-sm font-medium">Available to work</span>
              </div>
            </div>
            </div>
            {/*experience floating pointer*/}
            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
              <div className="text-2xl font-bold text-primary">
                0
              </div>
              <div className="text-xs text-muted-foreground">Years of experience</div>
            </div>
          </div>
          </div> 
        </div>
        </div>
        {/* Floating skill tags */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground text-primary glow-text mb-6 text-center font-semibold">technologies i work with:</p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills,...skills].map((skill,index)=>(
                <div key={index} className=" flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
