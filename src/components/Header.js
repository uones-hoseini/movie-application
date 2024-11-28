import React from "react"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"
import userIcone from "../assets/user.png"
function Header() {
  const navigation = [
    {
      lable: "TV Shows",
      href: "tv",
    },
    {
      lable: "Movies",
      href: "movie",
    },
  ]
  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75">
   
      <div className="container mx-auto px-3 flex items-center h-full">
        <div>
          <img src={logo} alt="logo" width={120} />
        </div>
        <nav className=" hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div key={index}>
                <NavLink key={nav.lable} to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                  {nav.lable}
                </NavLink>
              </div>
            )
          })}
        </nav>
        <div className="ml-auto">
        <div className="w-8 h-8 rounded-full overflow-auto cursor-pointer active:scale-50 transition-all">
          <img src={userIcone} alt="user icone" width="w-full h-full" />
        </div>
        </div>
      </div>
  
    </header>
  )
}

export default Header
