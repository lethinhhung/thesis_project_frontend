import { ChevronRight, Plus } from "lucide-react";

import { DatePicker } from "@/components/date-picker";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { CountdownTimer } from "./countdown-timer";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden xl:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="h-16 border-sidebar-border">
        <div className="flex items-center gap-2 h-full w-full">
          <div className="flex items-center justify-center h-full px-4">
            <Label>Good morning</Label>
          </div>
          <Button size={"icon"} variant={"ghost"}>
            <ChevronRight />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="scrollbar">
        <CountdownTimer />
        <SidebarSeparator className="mx-0" />
        <DatePicker />
        {/* <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} /> */}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
