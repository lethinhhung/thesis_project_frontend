import { CourseCardLarge } from "@/components/course-card-large";
import SearchBarWithTags from "@/components/search-bar-with-tags";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    id: "course-001",
    title: "Lập trình JavaScript cơ bản",
    summary:
      "Khóa học giới thiệu các khái niệm cơ bản của JavaScript. Khóa học giới thiệu các khái niệm cơ bản của JavaScript. Khóa học giới thiệu các khái niệm cơ bản của JavaScript. Khóa học giới thiệu các khái niệm cơ bản của JavaScript. Khóa học giới thiệu các khái niệm cơ bản của JavaScript. Khóa học giới thiệu các khái niệm cơ bản của JavaScript. ",
    description:
      "Khóa học này giúp bạn làm quen với các khái niệm như biến, vòng lặp, điều kiện và hàm trong JavaScript.",
    tags: ["JavaScript", "Lập trình", "Cơ bản", "Sieu sieu sieu dai dai dai"],
    type: "online",
    status: true,
    date: "2025-03-13",
    emoji: "💻",
  },
  {
    id: "course-002",
    title: "Phát triển Web với React",
    summary: "Hướng dẫn phát triển ứng dụng web với React.",
    description:
      "Học cách sử dụng React để xây dựng các ứng dụng web hiện đại, bao gồm quản lý state, component và hooks.",
    tags: ["React", "Front-end", "JavaScript"],
    type: "online",
    status: true,
    date: "2025-03-10",
    emoji: "⚛️",
  },
  {
    id: "course-003",
    title: "Cấu trúc dữ liệu và giải thuật",
    summary: "Nắm vững các cấu trúc dữ liệu quan trọng và thuật toán phổ biến.",
    description:
      "Khóa học này bao gồm danh sách liên kết, stack, queue, cây, đồ thị và các thuật toán tìm kiếm, sắp xếp.",
    tags: ["Khoa học máy tính", "Thuật toán", "Dữ liệu"],
    type: "offline",
    status: false,
    date: "2025-02-28",
    emoji: "📊",
  },
  {
    id: "course-004",
    title: "Phân tích dữ liệu với Python",
    summary: "Học cách sử dụng Python để phân tích và trực quan hóa dữ liệu.",
    description:
      "Giới thiệu về Pandas, NumPy, Matplotlib và các công cụ hỗ trợ phân tích dữ liệu.",
    tags: ["Python", "Data Science", "Phân tích"],
    type: "online",
    status: true,
    date: "2025-03-05",
    emoji: "🐍",
  },
  {
    id: "course-005",
    title: "Phát triển API với Node.js",
    summary: "Tạo API RESTful sử dụng Node.js và Express.",
    description:
      "Khóa học tập trung vào việc xây dựng API, bảo mật, xác thực người dùng và tối ưu hiệu suất.",
    tags: ["Node.js", "Backend", "API"],
    type: "online",
    status: false,
    date: "2025-03-01",
    emoji: "🌐",
  },
];

function Courses() {
  return (
    <div className="flex flex-col items-center w-full space-y-6">
      <SearchBarWithTags
        className="max-w-3xl top-18"
        placeholder="Search for courses or lessons"
      />
      <div className="grid grid-cols-12 space-y-8 w-full h-full max-w-6xl">
        <div className="col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex justify-between items-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Recent lessons
            </h4>
          </div>
          <Card className="col-span-12 md:col-span-6 2xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card className="col-span-12 md:col-span-6 2xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
          <Card className="col-span-12 md:col-span-6 2xl:col-span-4">
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>Description</CardDescription>
            </CardHeader>

            <CardContent>Content</CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex justify-between items-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              On progress courses
            </h4>

            <Button variant={"ghost"}>
              <div className="flex items-center gap-1">
                View all<p className="text-sm text-muted-foreground">(10)</p>
              </div>
              <ArrowRight />
            </Button>
          </div>
          {courses.map(
            (course) =>
              !course.status && (
                <CourseCardLarge
                  key={course.id}
                  className="col-span-12 md:col-span-6 2xl:col-span-4"
                  course={course}
                />
              )
          )}
        </div>

        <div className="col-span-12 grid grid-cols-12 gap-2">
          <div className="col-span-12 flex justify-between items-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Completed courses
            </h4>
            <Button variant={"ghost"}>
              <div className="flex items-center gap-1">
                View all<p className="text-sm text-muted-foreground">(5)</p>
              </div>
              <ArrowRight />
            </Button>
          </div>
          {courses.map(
            (course) =>
              course.status && (
                <CourseCardLarge
                  key={course.id}
                  className="col-span-12 md:col-span-6 2xl:col-span-4"
                  course={course}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
