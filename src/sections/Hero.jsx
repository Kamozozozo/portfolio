import React from "react";
import heroImage from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden">
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
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 text-center">
        
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/*left and right floating elements*/}
          <div className="space-t-8">
            <div className="animate-fade-in">
              <span className="inline-text items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse">
                Software Engineer + React and Spring boot specialist
              </span>
              </span>
            </div>
            <div>
              <h1>
                crafting <span className="text-primary glow-text"> digital</span>
             
              <br/>
              experience with
              <br/>
              <span className="font-serif italic font-normal text-white"> digital</span>
               </h1>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
