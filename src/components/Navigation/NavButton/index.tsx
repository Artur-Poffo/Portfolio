import { Button } from "@/components/UI/shadcn/button"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface NavButtonProps {
  text: string
  href: string
  icon?: LucideIcon
  inverted?: boolean
  withHoverEffect?: boolean
  size?: "sm" | "lg" | "default"
}

export function NavButton({ text, href, icon: Icon, inverted = false, withHoverEffect = true, size = "default" }: NavButtonProps) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        size={size}
        className={`group flex items-center justify-center ${inverted && "flex-row-reverse"} items-center transition-all rounded-md ${withHoverEffect ? "hover:text-primary hover:bg-primary/10 hover:backdrop-blur-xl" : "hover:opacity-70"}`}
      >
        <span className={`${withHoverEffect && "group-hover:text-primary"}`}>{text}</span>

        {Icon && (
          <Icon
            className={`w-6 h-6 transition-all ${inverted ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
          />
        )}
      </Button>
    </Link>
  )
}
