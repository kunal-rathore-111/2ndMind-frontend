import AddBookMarkCard from "@/components/ui/Dashboard/AddBookmark";
import DashboardComp from "@/components/ui/Dashboard/DashboardComp";
import { AppSideBar } from "@/components/ui/Dashboard/SideBarLayout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ButtonsClass } from "@/lib/constants/styles";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Dashboard() {
  const [addCardState, setOpenAddCard] = useState(false);
  function OpenAddCard() {
    return addCardState && <AddBookMarkCard setOpenAddCard={setOpenAddCard} />;
  }
  return (
    <SidebarProvider className="[--sidebar-width:8rem] md:[--sidebar-width:14rem] lg:[--sidebar-width:16rem]">
      <AppSideBar />
      <main className="relative flex flex-col py-10 lg:px-8">
        <SidebarTrigger className="w-fit" />
        {/* Header of dashboard */}
        <div className="flex justify-between">
          <div className="text-start">
            <h1 className="text-2xl font-semibold"> All Bookmarks</h1>
            <p>8 bookmarks</p>
          </div>
          <button
            className={cn(ButtonsClass, "h-fit p-2 text-xs")}
            onClick={() => setOpenAddCard(!addCardState)}
          >
            Add Bookmark
          </button>
        </div>

        <DashboardComp />

        {/* render the add card on full screen */}
        {<OpenAddCard />}
      </main>
    </SidebarProvider>
  );
}
