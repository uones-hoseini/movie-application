import React from "react"
import { mobileNavigation } from "../contants/navigation"
import { NavLink } from "react-router-dom"
function MobileNavogation() {
  return (
    <section className="lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((nav, index) => {
          return(
            <NavLink
             key={nav.lable+"mobileNavigation"}
             to={nav.href}
             className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center${isActive,"text-white"}`}
             >
              <div className="text-2xl pt-2">
              {nav.icon}
              </div>
              <p className="text-sm">{nav.lable}</p>
            </NavLink>
          )
        })}
      </div>
    </section>
  )
}

export default MobileNavogation
