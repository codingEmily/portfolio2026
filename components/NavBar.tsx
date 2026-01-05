import React from "react"
import Image from "next/image"
import { assets } from "../public/assets/assets"

const NavBar = () => {
  return (
    <nav>
      {/* <a href=''>
        <Image
          src={assets.CanvaLogo}
          alt='logo initials E and C'
          className='w-28 cursor-pointer mr-14 max-w-xs w-full'
        />
      </a> */}

      <ul>
        <li>
          <a href='#top'>Home</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
