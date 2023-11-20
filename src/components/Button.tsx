import React from 'react'

interface ButtonParams {
    title: string,
    href?: string,
}

const Button = ({title, href,}: ButtonParams) => {
  return (
    <div className={`w-32 text-[15px] place-content-center text-center cursor-pointer transition-colors duration-150 hover:font-semibold hover:bg-primary h-12 rounded-md text-secondary items-center flex border-secondary border`}>{title}</div>
  )
}

export default Button