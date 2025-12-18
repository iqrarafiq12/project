import Link from "next/link"

import { LucideIcon, MoonIcon } from "lucide-react";
import { Button, ButtonProps} from "../ui/button";


interface SideBtnprops extends ButtonProps{
  icon?: LucideIcon;
}

export default function HomeBtn({ icon: Icon, ...props }: SideBtnprops ) {
  return (
    
      <Link href="/home"  >
    <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer" {...props}>
      {Icon && <Icon /> }
      <MoonIcon />
      <span>home</span> 
    </Button>
    </Link>
  );
}
