import Link from "next/link"

import { House, LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function ExploreBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/explore"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer" {...props}>
        {Icon && <Icon />}
        <House />
        <span>Explore</span>
      </Button>
    </Link>
    
  );
}
