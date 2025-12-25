import Link from "next/link"

import { LucideIcon, MoonIcon } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function AboutBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/builds"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer" {...props}>
        {Icon && <Icon />}
        <MoonIcon />
        <span>Builds</span>
      </Button>
    </Link>
    
  );
}
