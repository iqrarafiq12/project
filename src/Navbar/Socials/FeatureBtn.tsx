import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import { IconType } from "react-icons"; // ✅ import IconType for react-icons

interface SideBtnProps extends ButtonProps {
  icon?: IconType; // ✅ Accepts react-icons
  href: string;
  label: string;
}

export default function FeatureBtn({ icon: Icon, href, label, ...props }: SideBtnProps) {
  return (
    <Link href={href}>
      <Button
        variant="ghost"
        className="w-full justify-start gap-2 transition-colors hover:bg-transparent focus:bg-transparent cursor-pointer"
        {...props}
      >
        {Icon && <Icon size={18} />} {/* size consistent */}
        <span>{label}</span>
      </Button>
    </Link>
  );
}
