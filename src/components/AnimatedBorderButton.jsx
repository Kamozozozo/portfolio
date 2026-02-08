import React from 'react'

const AnimatedBorderButton = () => {
  return (
    <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-primary focus-visible:ring-offset-2 disable:opacity-50 disable:cursor-not-allowed group rounded-full px-8 py-5 overflow-hidden animated-border">
                <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" viewBox="0 0 200 60" preserveAspectRatio="none"
                styles={{overflow:"visible"}}
                  
                >
                  <path
                  d="M 30,1 A 29,29 0 0 1 ,30 A 29,29 0 0 1 30,59 L 30,59 A 29,29 0 0 1 1,30 L 1,30 A 29,29 0 0 1 30,1 Z"
                  fill="None"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeDasharray="400 550"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animated-border-path"
                  />
                </svg>
                <span className="relative z-10 flex items-center justify-center gap-2">Download cv</span>
              </button>
  )
}

export default AnimatedBorderButton