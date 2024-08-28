import React from 'react'

import { NavLink } from 'react-router-dom'
function NavItems() {
  return (
    <><div className="nav-items flex gap-6 text-black font-bold p-4">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${
          isActive ? "text-orange-400" : "text-gray-600"
        } border-b-2 border-white hover:bg-gray-50 hover:bg-transparent hover:border-orange-400 hover:text-orange-400 lg:p-0`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${
          isActive ? "text-orange-400" : "text-gray-600"
        } border-b-2 border-white hover:bg-gray-50 hover:bg-transparent hover:border-orange-400 hover:text-orange-400 lg:p-0`
      }
    >
      About
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${
          isActive ? "text-orange-400" : "text-gray-600"
        } border-b-2 border-white hover:bg-gray-50 hover:bg-transparent hover:border-orange-400 hover:text-orange-400 lg:p-0`
      }
    >
      Contact
    </NavLink>
  
  </div>
  <div className="flex gap-3 btn-container">
  <button className="bg-orange-400 text-white font-bold py-2 px-4 rounded-xl hover:bg-orange-500 duration-200">
      Get Quote
    </button>
    <button className="text-orange-400  border-2 border-orange-400 font-bold py-2 px-4 rounded-xl duration-200">
      Contact
    </button>
    </div></>
  )
}

export default NavItems