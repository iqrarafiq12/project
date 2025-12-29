import Link from "next/link"

import { Contact, LucideIcon  } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";


interface SideBtnprops extends ButtonProps {
  icon?: LucideIcon;
}

export default function ContactBtn({ icon: Icon, ...props }: SideBtnprops) {
  return (

    <Link href="/contact"  >
      <Button variant="ghost" className="gap-2 justify-start w-full cursor-pointer 
               hover:bg-primary active:bg-primary focus:bg-primary transition-colors duration-200" {...props}>
        {Icon && <Icon />}
        <Contact />
        <span>Contact</span>
      </Button>
    </Link>
    
  );
}
