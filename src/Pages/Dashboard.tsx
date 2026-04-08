import DashboardComp from "@/components/ui/Dashboard/DashboardComp";
import { AppSideBar } from "@/components/ui/Dashboard/SideBarLayout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ButtonsClass } from "@/lib/constants/styles";
import { cn } from "@/lib/utils";

export default function Dashboard() {
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
          <button className={cn(ButtonsClass, "h-fit p-2 text-xs")}>
            Add Bookmark
          </button>
        </div>
        <DashboardComp />
      </main>
    </SidebarProvider>
  );
}
