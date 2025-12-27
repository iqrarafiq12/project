// components/Sidebar/DesktopSidebar.tsx

import BuildsBtn from "../BuildsBtn";
import ExploreBtn from "../ExploreBtn";
import ProjectsBtn from "../ProjectsBtn";
import SidebarSocial from "../Socials/SidebarSocial";
import StartupsBtn from "../StartupsBtn";
import StoryBtn from "../StoryBtn";


export default function MobileSiddebarContent() {
  return (
    <aside className=" fixed left-0 top-0 h-screen w-[270px] bg-background text-foreground">
      <div className="h-full px-3 py-4">

        {/* Header */}
        <div className="flex items-center justify-between px-2">
          <h3 className="text-lg font-semibold">
            Iqra Rafiq Khan
          </h3>
        </div>

        {/* Navigation */}
        <div className="mt-6">
           <div className="flex flex-col gap-1 w-full ">
               <ExploreBtn />
               <BuildsBtn />
               <ProjectsBtn />
               <StartupsBtn />
               <StoryBtn />
             </div>
        </div>
 <div className="p-4">
          <SidebarSocial />
        </div>
      </div>
    </aside>
  );
}
