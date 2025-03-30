import {
  ChevronRight,
  Cloud,
  Inbox,
  ListTodo,
  Sparkles,
  StickyNote,
} from "lucide-react";
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
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDelayedHidden } from "@/hooks/use-delay-hidden";
import { Textarea } from "./ui/textarea";
import TodoList from "./todo-list";

export function SidebarRight({
  hidden,
  ...props
}: React.ComponentProps<typeof Sidebar> & { hidden: boolean }) {
  const navigate = useNavigate();

  const isFullyHidden = useDelayedHidden(hidden, 75);
  // const [isFullyHidden, setIsFullyHidden] = useState(hidden);

  // useEffect(() => {
  //   if (!hidden) {
  //     setIsFullyHidden(false); // Hiển thị lại sidebar khi `hidden` là `false`
  //   } else {
  //     const timeout = setTimeout(() => setIsFullyHidden(true), 75); // Ẩn hoàn toàn sau 75ms (thời gian hoạt ảnh)
  //     return () => clearTimeout(timeout); // Dọn dẹp timeout khi component unmount
  //   }
  // }, [hidden]);

  if (isFullyHidden && hidden) {
    return null; // Không render sidebar khi nó đã hoàn toàn ẩn
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: hidden ? "100%" : "0%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 h-svh border-l 2xl:flex"
    >
      <Sidebar collapsible="none" {...props}>
        <SidebarHeader className="border-sidebar-border">
          <div className="flex items-center justify-between gap-2 w-full h-full">
            <ButtonWithBadge
              onClick={() => navigate("/inbox")}
              isBadgeVisible={true}
              badgeColor="bg-sky-500"
              variant={"ghost"}
            >
              <Inbox />
            </ButtonWithBadge>
            <Label>
              <Cloud />
            </Label>
          </div>
          <CountdownTimer />
        </SidebarHeader>
        <SidebarContent className="scrollbar">
          <SidebarSeparator className="mx-0" />
          <DatePicker />
          <SidebarGroupLabel
            asChild
            className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <SidebarGroupContent className="gap-2">
              <Sparkles /> Summerize your tasks
            </SidebarGroupContent>
          </SidebarGroupLabel>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel
              asChild
              className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger className="gap-2">
                <ListTodo />
                <div className=" line-clamp-1 word-break break-all">To-do</div>
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="border-b border-dashed">
              <SidebarGroupContent className="p-2">
                <TodoList />
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroupLabel
              asChild
              className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger className="gap-2">
                <StickyNote />
                <div className=" line-clamp-1 word-break break-all">Notes</div>
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent className="border-b border-dashed">
              <SidebarGroupContent className="p-2">
                <Textarea
                  spellCheck={false}
                  className="resize-none border-dashed"
                  placeholder="Enter notes..."
                />
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarContent>
        <SidebarFooter className="px-0 border-t border-dashed z-2 bg-secondary">
          <Collapsible className="group/collapsible">
            <SidebarGroupLabel
              asChild
              className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <CollapsibleTrigger className="gap-2">
                <Sparkles />
                <div className=" line-clamp-1 word-break break-all">
                  Quick chat
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
    </motion.div>
  );
}
