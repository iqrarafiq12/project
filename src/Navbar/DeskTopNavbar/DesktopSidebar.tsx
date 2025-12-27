import SidebarSocial from "../Socials/SidebarSocial";
import SidebarContent from "./SidebarContent";


export default function DesktopSidebar() {
  return (
    <aside className="hidden md:block fixed left-0 top-0 h-screen w-[270px] border-r border-primary/30 p-4">
      <div className="flex h-full flex-col px-3 py-4">

        {/* Header */}
        <div className="flex items-center justify-between px-2">
          <h3 className="text-lg font-aneklatin font-bold">
            Iqra Rafiq Khan
          </h3>
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
