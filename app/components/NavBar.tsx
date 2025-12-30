import React from "react"
import Image from "next/image"
import { assets } from "../assets/assets"

const NavBar = () => {
  return (
    <nav>
      <a href=''>
        <Image
          src={assets.CanvaLogo}
          alt='logo initials E and C'
          className='w-28 cursor-pointer mr-14'
        />
      </a>

      <ul>
        <li>
          <a href='#top'>Home</a>
        </li>
        <li>
          <a href='#about'>About Me</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#work'>My Work</a>
        </li>
        <li>
          <a href='#contact'>Contact Me</a>
        </li>
      </ul>

      <div>
        <a href='#contact'>
          Contact <Image src={assets.CanvaLogo} alt='ContactImg' className='w-3'></Image>
        </a>
      </div>
    </nav>
  )
}

export default NavBar
