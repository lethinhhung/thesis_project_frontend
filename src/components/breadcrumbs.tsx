import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumbMap: Record<string, string> = {
  dashboard: "Dashboard",
  home: "Home",
  courses: "Courses",
  all: "All",
  completed: "Completed",
  ongoing: "Ongoing",
  search: "Search",
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
        <BreadcrumbItem>
          <Link className="text-primary" to={"/home"}>
            Notebok
          </Link>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <div key={path} className="flex items-center gap-2">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <span>{breadcrumbMap[segment] || segment}</span>
                ) : (
                  <Link className="text-primary" to={path}>
                    {breadcrumbMap[segment] || segment}
                  </Link>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
