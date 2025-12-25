import Link from "next/link"

import { LucideIcon, MoonIcon } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function AboutBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/about"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer" {...props}>
        {Icon && <Icon />}
        <MoonIcon />
        <span>about</span>
      </Button>
    </Link>
    
  );
}
