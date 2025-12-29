"use client";

import { useState } from "react";
import { ListFilterPlus, Menu } from "lucide-react";
import MobileSiddebarContent from "./MobileSiddebarContent";
import { Button } from "@/components/ui/button";



export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ☰ Hamburger Button (Top-Right) */}
      {!open && (
 <Button
  onClick={() => setOpen(true)}
  className="md:hidden fixed top-4 right-4 h-10 w-10 z-50 p-0 border-0 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-white bg-primary box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:outline-none"
>
  <ListFilterPlus className="w-[100px] h-[100px]"
  />
</Button>

      )}
 
      {/* Overlay (Click anywhere to close) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 left-5
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none "}`}
      />

      {/* Sliding Navigation Drawer */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] bg-white z-50 
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4">
          <MobileSiddebarContent />
        </div>

      </aside>
    </>
  );
}
