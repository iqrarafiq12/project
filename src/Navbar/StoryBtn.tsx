import Link from "next/link"

import { LucideIcon, MonitorSmartphone } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function StoryBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/story"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer" {...props}>
        {Icon && <Icon />}
        <MonitorSmartphone />
        <span>Story</span>
      </Button>
    </Link>
    
  );
}
