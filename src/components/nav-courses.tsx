"use client";

import { MoreHorizontal } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

export function NavCourses({
  courses,
}: {
  courses: {
    name: string;
    url: string;
    emoji: string;
  }[];
}) {
  const navigate = useNavigate();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Recent courses</SidebarGroupLabel>
      <SidebarMenu>
        {courses.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton onClick={() => navigate(item.url)}>
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => navigate("/courses")}
            className="text-sidebar-foreground/70"
          >
            <MoreHorizontal />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
