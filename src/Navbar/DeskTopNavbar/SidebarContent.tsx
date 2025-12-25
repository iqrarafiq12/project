// components/Sidebar/SidebarContent.tsx

import BuildsBtn from "../BuildsBtn";
import ExploreBtn from "../ExploreBtn";
import ProjectsBtn from "../ProjectsBtn";
import StartupsPage from "../StartupsBtn";
import StoryBtn from "../StoryBtn";

export default function SidebarContent() {
  return (
    <div className="flex flex-col gap-1 w-full">
      <ExploreBtn />
      <BuildsBtn />
      <ProjectsBtn />
      <StartupsPage />
      <StoryBtn />
    </div>
  );
}
