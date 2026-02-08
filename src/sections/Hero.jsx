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
      <div className="relative z-10 text-center px-4">
        
        <div>
          {/*left and right floating elements*/}
          <div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
