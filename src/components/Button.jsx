import React from 'react'

const Button = ({className,size,children}) => {
  const BaseClass="relative overflow-hidden rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
  const classes=BaseClass
  return (
    <button className={classes}>
        <span className='relative flex items-center justify-center gap-2'>
            {children}
        </span>
    </button>
  )
}

export default Button