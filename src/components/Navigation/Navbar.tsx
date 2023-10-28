import { NavLink } from "./NavLink";

export type NavLink = { name: string, to: string, useNextLink?: boolean }[]

export interface NavigationProps {
  links: NavLink
  specialLinks?: NavLink
}

export function Navbar({ links, specialLinks }: NavigationProps) {
  return (
    <header className="backdrop-blur-md fixed w-full py-3 hidden lg:flex items-center justify-center z-50" >
      <nav className="flex items-center gap-4" >
        <ul className="flex items-center justify-center gap-2" >
          {links.map(link => {
            return (
              <li key={link.name} ><NavLink name={link.name} to={link.to} useNextLink={link.useNextLink} /></li>
            )
          })}
        </ul>

        {specialLinks && (
          <>
            <span className="font-bold" >|</span>

            <ul>
              {specialLinks.map(link => {
                return (
                  <li key={link.name}>
                    <NavLink name={link.name} to={link.to} useNextLink={link.useNextLink} />
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </nav>
    </header>
  )
}