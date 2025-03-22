import { Outlet } from "react-router-dom";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Book, Briefcase, LibraryBig, Plus, Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/components/theme-provider";

const createItems = [
  { title: "Course", url: "/course", icon: <Briefcase /> },
  { title: "Page", url: "/page", icon: <Book /> },
  { title: "Document", url: "/document", icon: <LibraryBig /> },
  { title: "Chat", url: "/chat", icon: <Sparkles /> },
];

export default function DefaultLayout() {
  const { theme } = useTheme();
  return (
    <>
      <SidebarProvider>
        <SidebarLeft />
        <SidebarInset>
          <header className="z-30 sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>

            <div className="flex items-center gap-2 px-3">
              <TooltipProvider>
                <DropdownMenu modal={false}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenuTrigger asChild>
                        <Button size={"icon"} variant={"ghost"}>
                          <Plus />
                        </Button>
                      </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent>Create</TooltipContent>
                  </Tooltip>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Create new</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {createItems.map((item) => (
                      <DropdownMenuItem key={item.url}>
                        {item.icon}
                        {item.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipProvider>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 max-w-full">
            <Outlet />
          </div>
        </SidebarInset>
        <SidebarRight />
      </SidebarProvider>
      <Toaster theme={theme} />
    </>
  );
}
