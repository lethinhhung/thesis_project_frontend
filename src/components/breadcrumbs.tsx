import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsTablet } from "@/hooks/use-tablet";
import { Home } from "lucide-react";

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
  lessons: "Lessons",
  page: "Page Details",
};

export default function Breadcrumbs() {
  const location = useLocation();
  let pathSegments = location.pathname.split("/").filter(Boolean);
  // Remove "lessons" from pathSegments if it exists
  pathSegments = pathSegments.filter((segment) => segment !== "lessons");
  const isTablet = useIsTablet();
  const shouldShorten = isTablet
    ? pathSegments.length >= 3
    : pathSegments.length >= 5;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Mục đầu tiên */}
        <BreadcrumbItem>
          <Link className="text-primary" to={"/home"}>
            <Home size={18} className="sm:hidden" />
            <div className="hidden sm:flex">Notebook</div>
          </Link>
        </BreadcrumbItem>

        {shouldShorten ? (
          <div className="hidden sm:flex items-center gap-2">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {pathSegments.slice(0, -1).map((segment, index) => {
                    // 🔥 Fix: thay đổi slice(1, -1) -> slice(0, -1)
                    const path = `/${pathSegments
                      .slice(0, index + 1)
                      .join("/")}`;
                    return (
                      <DropdownMenuItem key={path}>
                        <Link to={path}>
                          {breadcrumbMap[segment] || segment}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </div>
        ) : (
          pathSegments.slice(0, -1).map((segment, index) => {
            // 🔥 Fix: slice(1, -1) -> slice(0, -1)
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            return (
              <div key={path} className="hidden sm:flex items-center gap-2">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link className="text-primary" to={path}>
                    {breadcrumbMap[segment] || segment}
                  </Link>
                </BreadcrumbItem>
              </div>
            );
          })
        )}

        {/* Mục cuối cùng */}
        {pathSegments.length >= 1 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="truncate w-30">
                {breadcrumbMap[pathSegments[pathSegments.length - 1]] ||
                  pathSegments[pathSegments.length - 1]}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
