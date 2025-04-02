import { MessageCircleMore, MoreHorizontal } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

export function NavConversations({
  conversations,
  isChatPage = false,
}: {
  conversations: {
    name: string;
    emoji: React.ReactNode;
    pages: {
      name: string;
      emoji: React.ReactNode;
    }[];
  }[];
  isChatPage?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <SidebarGroup
      className={
        "group-data-[collapsible=icon]:hidden" +
        (isChatPage && " border-2 border-dashed")
      }
    >
      <SidebarGroupLabel>Recent conversations</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {conversations.map((conversation) => (
            <SidebarMenuItem key={conversation.name}>
              <SidebarMenuButton onClick={() => navigate("/chat")}>
                <span>{conversation.emoji}</span>
                <span>{conversation.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => navigate("/chat")}
              className="text-sidebar-foreground/70"
            >
              <MoreHorizontal />
              More
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
