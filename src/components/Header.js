import React, { useEffect, useLayoutEffect, useState } from "react"
import logo from "../assets/logo.png"
import { NavLink, useNavigate } from "react-router-dom"
import userIcone from "../assets/user.png"
import { IoSearchSharp } from "react-icons/io5"
function Header() {
  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate()
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

  useEffect(() => {
    navigate(`/search?${searchInput}`)
  }, [searchInput])
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
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center">
            <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search here..." className="bg-transparent px-4 outline-none border-none " />
            <button className="text-2xl text-white">
              <IoSearchSharp />
            </button>
          </form>

          <div className="w-8 h-8 rounded-full overflow-auto cursor-pointer active:scale-50 transition-all">
            <img src={userIcone} alt="user icone" width="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
