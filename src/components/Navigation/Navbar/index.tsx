import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/UI/shadcn/navigation-menu";
import { Navlink } from "../Navlink";

export default function Navbar() {
  return (
    <NavigationMenu className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] p-2 bg-slate-400 backdrop-blur-md bg-opacity-20 rounded-full min-w-60">
      <NavigationMenuList className="flex">
        <NavigationMenuItem>
          <Navlink path="/#home">Home</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Navlink path="/#about">Sobre</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Navlink path="/#skills">Habilidades</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Navlink path="/#projects">Projetos</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Navlink path="/#experience">Experiência</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Navlink path="/#contact">Contato</Navlink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
