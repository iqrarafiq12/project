import SidebarSocial from "../Socials/SidebarSocial";
import SidebarContent from "./SidebarContent";


export default function DesktopSidebar() {
  return (
    <aside className="hidden md:block fixed left-3 top-0 h-screen w-[270px] bg-background text-foreground border-r border-foreground/20 p-2">
      <div className="h-full px-3 py-4 flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 px-1 py-3 border-b border-foreground/20">
          {/* Logo / Avatar */}
          <div className="flex h-10 w-10 items-center justify-center">
            <img
              src="/avatar.svg"
              alt="Iqra Rafiq"
              className="h-10 w-10 rounded-sm object-cover"
            />
          </div>

          {/* Name & Role */}
          <div className="flex flex-col leading-tight">
            <h3 className="text-sm font-semibold">
              Iqra Rafiq Khan
            </h3>
            <p className="text-xs text-foreground/50">
              Founder & Creative Strategist
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6">
          <SidebarContent />
        </div>

        {/* Social / Contact */}
        <div className="mt-6">
          <SidebarSocial />
        </div>
      </div>
    </aside>
  );
}
