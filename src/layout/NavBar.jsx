import React from 'react'
import Button from '../components/Button'
const navLinks=[
    {href:"#about",label:"about" },
    {href:"#projects",label:"project" },
    {href:"#testimonials",label:"testimonials" },
    {href:"#experience",label:"experience" },
]
const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-light">
                PM<span className="text-primary">.</span>
            </a>
            {/*nav setup*/}
            <div className="flex items-center gap-1">
                <div className="glass  rounded-full px-2 py-1 flex items-center gap-1">
                   {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition"
              >
                {link.label}
              </a>
            ))}
                </div>
            </div>
            <div>
                <Button>
                    Contact Me
                </Button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar