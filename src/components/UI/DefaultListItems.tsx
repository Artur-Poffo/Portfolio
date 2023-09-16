import { ReactNode } from "react"

interface DefaultListItemsProps {
  children: ReactNode
}

export function DefaultListItems({ children }: DefaultListItemsProps) {
  return (
    <ul className="flex flex-wrap items-start justify-center gap-y-14 gap-x-6 mx-auto" >
      {children}
    </ul>
  )
}