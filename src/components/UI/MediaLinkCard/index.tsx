import Link from "next/link";
import { DefaultCard } from "../DefaultCard";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type IconComponent =
  | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  | ForwardRefExoticComponent<Omit<LucideProps, "ref">>;

interface MediaLinkCardProps {
  icon: IconComponent;
  label: string;
  link: string;
}

export function MediaLinkCard({ icon: Icon, label, link }: MediaLinkCardProps) {
  return (
    <Link href={link} target="_blank">
      <DefaultCard
        className="w-full sm:min-w-96 sm:w-fit p-4 flex items-center"
        borderEffect
      >
        <div className="flex items-center gap-2">
          <Icon className="w-6 h-6" />
          <span className="text-neutrals-300 font-mono">{label}</span>
        </div>
      </DefaultCard>
    </Link>
  );
}
