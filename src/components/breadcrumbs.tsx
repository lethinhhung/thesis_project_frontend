import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const breadcrumbMap: Record<string, string> = {
  dashboard: "Dashboard",
  home: "Home",
  courses: "Courses",
  pages: "Pages",
  chat: "Chat",
  library: "Library",
  account: "Account",
  settings: "Settings",
  inbox: "Inbox",
  calendar: "Calendar",
  course: "Course Details",
  lesson: "Lesson Details",
  page: "Page Details",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <BreadcrumbItem key={path}>
              {isLast ? (
                <span>{breadcrumbMap[segment] || segment}</span>
              ) : (
                <>
                  <Link className="text-primary" to={path}>
                    {breadcrumbMap[segment] || segment}
                  </Link>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
