import SearchBarWithTags from "@/components/search-bar-with-tags";
import { Outlet } from "react-router-dom";

function Courses() {
  return (
    <div className="flex flex-col items-center w-full space-y-6">
      <SearchBarWithTags
        className="max-w-3xl top-18"
        placeholder="Search for courses or lessons"
        withPagination={false}
      />
      <Outlet />
    </div>
  );
}

export default Courses;
