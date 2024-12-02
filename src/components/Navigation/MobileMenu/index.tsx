"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/UI/shadcn/navigation-menu";
import { Navlink } from "../Navlink";
import { List, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-[999] md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full border border-neutrals-600 bg-neutrals-900/90 shadow-[inset_0_1px_1px_0_rgb(255_254_249/0.3)] backdrop-blur-sm supports-[backdrop-filter]:bg-neutrals-900/60"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-64 p-4 rounded-lg border border-neutrals-600 bg-neutrals-900/90 shadow-[inset_0_1px_1px_0_rgb(255_254_249/0.3)] backdrop-blur-sm supports-[backdrop-filter]:bg-neutrals-900/60">
          <NavigationMenu className="w-full max-w-none">
            <div className="w-full">
              <NavigationMenuList
                className="flex flex-col items-start gap-4"
                data-orientation="vertical"
              >
                <NavigationMenuItem className="w-full">
                  <Navlink
                    path="/#home"
                    onClick={() => setIsOpen(false)}
                    className="w-full block p-2 transition-all hover:bg-neutrals-100/10 rounded-md"
                  >
                    Home
                  </Navlink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <Navlink
                    path="/#about"
                    onClick={() => setIsOpen(false)}
                    className="w-full block p-2 transition-all hover:bg-neutrals-100/10 rounded-md"
                  >
                    Sobre
                  </Navlink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <Navlink
                    path="/#skills"
                    onClick={() => setIsOpen(false)}
                    className="w-full block p-2 transition-all hover:bg-neutrals-100/10 rounded-md"
                  >
                    Habilidades
                  </Navlink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <Navlink
                    path="/#projects"
                    onClick={() => setIsOpen(false)}
                    className="w-full block p-2 transition-all hover:bg-neutrals-100/10 rounded-md"
                  >
                    Projetos
                  </Navlink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <Navlink
                    path="/#experience"
                    onClick={() => setIsOpen(false)}
                    className="w-full block p-2 transition-all hover:bg-neutrals-100/10 rounded-md"
                  >
                    Experiência
                  </Navlink>
                </NavigationMenuItem>

                <NavigationMenuItem className="w-full">
                  <Navlink
                    path="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full block p-2 transition-all hover:bg-neutrals-100/10 rounded-md"
                  >
                    Contato
                  </Navlink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
}
