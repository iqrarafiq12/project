import { ThemeBtn } from "../Theme/ThemeBtn";
import { ThemeProvider } from "../Theme/ThemeProvider";
import AboutBtn from "./AboutBtn";
import HomeBtn from "./HomeBtn";

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

            <HomeBtn />
            <AboutBtn />
          </div>
        </div>

      </div>
    </aside>
  );
}
