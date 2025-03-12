import { Calendar } from "@/components/ui/calendar";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export function DatePicker() {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <Calendar
          modifiers={{
            eventDay: new Date(2025, 2, 3),
          }}
          modifiersClassNames={{
            eventDay:
              "relative after:content-['•'] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:text-red-500",
          }}
          className="[&_[role=gridcell].bg-secondary]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
        />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
