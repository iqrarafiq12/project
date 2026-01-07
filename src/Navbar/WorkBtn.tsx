import Link from "next/link"

import { HomeIcon, LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function WorkBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/work"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer 
               hover:bg-secondary active:bg-secondary focus:bg-primary transition-colors duration-200" {...props}>
        {Icon && <Icon />}
        <HomeIcon />
        <span>Work</span>
      </Button>
    </Link>
    
  );
}
