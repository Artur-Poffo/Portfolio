import Link from "next/link"
import { IconType } from "react-icons"
import { DefaultCard } from "./DefaultCard"

interface ContactOptionProps {
  Icon: IconType
  iconSize: number
  optionName: string
  link: string
  delay?: number
}

export function ContactOption({ Icon, iconSize, optionName, link, delay = 0 }: ContactOptionProps) {
  return (
    <Link href={link} >
      <DefaultCard className="flex items-center gap-4 cursor-pointer" delay={delay} >
        <Icon size={iconSize} />
        <span className="font-mono font-bold text-brand-gray-100" >{optionName}</span>
      </DefaultCard>
    </Link>
  )
}