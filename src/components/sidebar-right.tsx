import { ChevronRight, Cloud, Inbox, Sparkles } from "lucide-react";
import { DatePicker } from "@/components/date-picker";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
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
import ButtonWithBadge from "./button-with-badge";
import { useNavigate, useParams } from "react-router-dom";

export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  return (
    <Sidebar
      collapsible="none"
      className="sticky hidden 2xl:flex top-0 h-svh border-l"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border">
        <div className="flex items-center justify-between gap-2 w-full h-full">
          <ButtonWithBadge
            onClick={() => navigate("/inbox")}
            isBadgeVisible={true}
            badgeColor="bg-sky-500"
            variant={"ghost"}
          />
          <Label>
            <Cloud />
          </Label>
        </div>
        <CountdownTimer />
      </SidebarHeader>
      <SidebarContent className="scrollbar">
        <SidebarSeparator className="mx-0" />
        <DatePicker />
        <div className="min-h-1000"></div>
      </SidebarContent>
      <SidebarFooter className="px-0 border-t border-dashed">
        <Collapsible className="group/collapsible">
          <SidebarGroupLabel
            asChild
            className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <CollapsibleTrigger className="gap-2">
              <Sparkles />
              <div className=" line-clamp-1 word-break break-all">
                Ask AI {lessonId && `about ${lessonId?.toString()}`}
              </div>
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
