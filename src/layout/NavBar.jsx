import React from 'react'
const navLinks=[
    {href:"#about",label:"about" },
    {href:"#projects",label:"project" },
    {href:"#testimonials",label:"testimonials" },
    {href:"#experience",label:"experience" },
]
const NavBar = () => {
  return (
    <header>
        <nav>
            <a>
                PM<span>.</span>
            </a>
            {/*nav setup*/}
            <div>
                <div>
                    {navLinks.map((link)=>{
                        <a href={link.href} key={index}>{link.label}</a>
                    })}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar