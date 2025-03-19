import { ArrowRight, Calendar, ChevronRight, Cloud, Plus } from "lucide-react";

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
import { useNavigate } from "react-router-dom";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const nagivate = useNavigate();
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden xl:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="h-16 border-sidebar-border">
        <div className="flex items-center gap-2 h-full w-full">
          <div className="flex items-center justify-center h-full px-4">
            <Label>
              <Cloud /> Good morning
            </Label>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="scrollbar">
        <CountdownTimer />
        <SidebarSeparator className="mx-0" />
        <DatePicker />
      </SidebarContent>
      {/* <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => nagivate("/calendar")}
              className="flex justify-between items-center"
            >
              <span>Calendar</span>
              <ArrowRight />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}
    </Sidebar>
  );
}
