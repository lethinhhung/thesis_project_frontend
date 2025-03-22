import { Cloud } from "lucide-react";
import { DatePicker } from "@/components/date-picker";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { CountdownTimer } from "./countdown-timer";
import { Label } from "./ui/label";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden 2xl:flex top-0 h-svh border-l"
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
        <div className="min-h-1000"></div>
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
