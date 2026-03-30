import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav>
      <h1>KMS</h1>
      <div className='lien'>
        

       
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      

      <div className="menu">
        <div className="about">About</div>

        <IoMenu
          onClick={() => setOpenMenu(!openMenu)}
          className='burguer'
          size={30}
        />
      </div>

      {openMenu && (
        <div className="lien_mobile">
           <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
       )}
      
    </nav>
  )
}

export default Navbar