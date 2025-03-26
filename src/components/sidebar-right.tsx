import { ChevronRight, Cloud, Sparkles } from "lucide-react";
import { DatePicker } from "@/components/date-picker";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { CountdownTimer } from "./countdown-timer";
import { Label } from "./ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import ChatSmall from "./chat-small";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden 2xl:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border">
        <div className="flex items-center gap-2 h-full w-full">
          <div className="flex items-center justify-center h-full px-4">
            <Label>
              <Cloud /> Good morning
            </Label>
          </div>
        </div>
        <CountdownTimer />
      </SidebarHeader>
      <SidebarContent className="scrollbar">
        <SidebarSeparator className="mx-0" />
        <DatePicker />
        <div className="min-h-1000"></div>
      </SidebarContent>
      <SidebarFooter className="px-0">
        <Collapsible className="group/collapsible">
          <SidebarGroupLabel
            asChild
            className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger className="gap-2">
              <Sparkles />
              Ask AI
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <SidebarGroupContent>
              <ChatSmall />
            </SidebarGroupContent>
          </CollapsibleContent>
        </Collapsible>
      </SidebarFooter>
    </Sidebar>
  );
}
