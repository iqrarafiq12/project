import Link from "next/link"

import { House, LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function ProjectsBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/projects"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer" {...props}>
        {Icon && <Icon />}
        <House />
        <span>Projects</span>
      </Button>
    </Link>
    
  );
}
