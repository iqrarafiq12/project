import Link from "next/link"

import { Blocks, LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function LearnBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/learn"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer 
               hover:bg-primary active:bg-primary focus:bg-primary transition-colors duration-200" {...props}>
        {Icon && <Icon />}
        <Blocks />
        <span>Learn</span>
      </Button>
    </Link>
    
  );
}
