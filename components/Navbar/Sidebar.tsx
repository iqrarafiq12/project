import HomeBtn from "./HomeBtn";


export default function Sidebar() {
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r bg-[#e2056c]">
      <div className="h-full px-3 py-4">

        <h3 className="mx-3 test-lg font-semibold text-foreground">
          Iqra Rafiq Khan
        </h3>

<div className="mt-5">
  <div className="flex flex-col gap-1 w-full">
<HomeBtn />
  </div>
</div>

      </div>
    </aside>
  );
}
