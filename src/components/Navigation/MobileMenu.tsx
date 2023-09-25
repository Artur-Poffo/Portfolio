"use client"

import { useState } from "react";
import { NavLink } from "./NavLink";
import { NavigationProps } from "./Navbar";

export function MobileMenu({ links, specialLinks }: NavigationProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpenMenu((state) => !state)}
        className="fixed top-6 right-6 w-10 h-10 bg-brand-gray-600 lg:hidden z-50 rounded-sm flex flex-col items-center justify-center gap-[5px] cursor-pointer"
      >
        <div className="w-3/5 h-[2px] bg-brand-gray-100" />
        <div className="w-3/5 h-[2px] bg-brand-gray-100" />
        <div className="w-3/5 h-[2px] bg-brand-gray-100" />
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-xl z-40 ${isOpenMenu ? 'ml-0' : '-ml-[100vw]'
          } transition-all flex items-center justify-center gap-10`}
      >
        <nav className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {links.map(link => {
              return (
                <NavLink
                  key={link.name}
                  onClick={() => setIsOpenMenu(false)}
                  name={link.name}
                  to={link.to}
                />
              )
            })}
          </ul>

          {specialLinks && (
            <>
              <div className="h-[2px] w-full bg-brand-gray-100" />


              <ul>
                {specialLinks.map(link => {
                  return (
                    <NavLink key={link.name} onClick={() => setIsOpenMenu(false)} name={link.name} to={link.to} useNextLink={link.useNextLink} />
                  )
                })}
              </ul>
            </>
          )}
        </nav>
      </div>
    </>
  )
}