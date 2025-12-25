import { ThemeBtn } from "@/components/Theme/ThemeBtn";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import BuildsBtn from "./Navbar/BuildsBtn";
import ExploreBtn from "./Navbar/ExploreBtn";
import ProjectsBtn from "./Navbar/ProjectsBtn";
import StartupsPage from "./Navbar/StartupsBtn";
import StoryBtn from "./Navbar/StoryBtn";


export default function Sidebar() {
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">

        <h3 className="mx-3 text-lg font-semibold text-foreground">
          Iqra Rafiq Khan    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > <ThemeBtn /> </ThemeProvider></h3>

        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">

            <ExploreBtn />
            <BuildsBtn />
            <ProjectsBtn />
            <StartupsPage />
            <StoryBtn />
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full bg-primary hover-none rounded-sm cursor-pointer">
            {/* Additional buttons can be added here */}
            <span>stats</span>

          </div>
        </div>

      </div>
    </aside>
  );
}
