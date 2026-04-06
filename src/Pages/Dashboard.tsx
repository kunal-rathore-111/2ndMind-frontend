import { AppSideBar } from "@/components/ui/Dashboard/SideBarLayout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="">
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}
