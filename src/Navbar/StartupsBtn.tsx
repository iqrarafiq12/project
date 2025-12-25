import Link from "next/link";
import { House, LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "../../components/ui/button";

interface SideBtnProps extends ButtonProps {
  icon?: LucideIcon;
}

export default function ProjectsBtn({
  icon: Icon,
  ...props
}: SideBtnProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className="gap-2 justify-start w-full cursor-pointer"
      {...props}
    >
      <Link href="/startups">
        {Icon && <Icon className="w-4 h-4" />}
        <House className="w-4 h-4" />
        <span>Startups</span>
      </Link>
    </Button>
  );
}
