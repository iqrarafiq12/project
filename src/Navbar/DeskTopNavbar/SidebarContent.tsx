// components/Sidebar/SidebarContent.tsx

import BuildsBtn from "../BuildsBtn";
import ContactBtn from "../ContactBtn";
import LearnBtn from "../LearnBtn";
import StartupsPage from "../StartupsBtn";
import StoryBtn from "../StoryBtn";
import WorkBtn from "../WorkBtn";

export default function SidebarContent() {
  return (
    <div className="flex flex-col gap-1 w-full ">
      <WorkBtn />
      <StartupsPage />
      <BuildsBtn />
      <LearnBtn />
      <StoryBtn />
      <ContactBtn />
    </div>
  );
}
