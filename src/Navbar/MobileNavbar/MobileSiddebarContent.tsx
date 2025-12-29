import BuildsBtn from "../BuildsBtn";
import ContactBtn from "../ContactBtn";
import LearnBtn from "../LearnBtn";
import SidebarSocial from "../Socials/SidebarSocial";
import StartupsBtn from "../StartupsBtn";
import StoryBtn from "../StoryBtn";
import WorkBtn from "../WorkBtn";

export default function MobileSiddebarContent() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[270px] bg-background text-foreground">
      <div className="h-full px-3 py-4 flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 px-2 py-3 border-b border-primary/20">
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
        <div className="mt-6 flex-1">
          <div className="flex flex-col gap-1 w-full">
            <WorkBtn />
            <StartupsBtn />
            <BuildsBtn />
            <LearnBtn />
            <StoryBtn />
            <ContactBtn />
          </div>
        </div>

        {/* Social Links */}
        <div className="p-1">
          <SidebarSocial />
        </div>

      </div>
    </aside>
  );
}
