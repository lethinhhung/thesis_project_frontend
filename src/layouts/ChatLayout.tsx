import { Outlet } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function ChatLayout() {
  return (
    <SidebarProvider>
      <SidebarInset className="flex-1 max-w-full h-svh overflow-hidden min-w-0">
        <header className="z-50 sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {/* <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background"> */}
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 max-w-full h-[calc(100svh-56px)] overflow-hidden">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
