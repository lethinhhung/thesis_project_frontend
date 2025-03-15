import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookCheck,
  CheckCircle2,
  FolderKanban,
  Library,
  NotebookPen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface Course {
  id: string;
  emoji: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  type: string;
  status: boolean;
  date: string;
}

export function CourseCardLarge({
  course,
  className,
}: {
  course: Course;
  className?: string;
}) {
  return (
    <Card
      onClick={() => console.log("Clicked")}
      className={cn(
        "pt-0 duration-200 dark:border-dashed hover:shadow-lg dark:hover:border-solid cursor-pointer ",
        className
      )}
    >
      <img
        src="/placeholder.svg"
        className="object-cover h-50 w-full rounded-xl rounded-b-none dark:brightness-[0.2] dark:grayscale"
      />
      <CardHeader>
        <CardTitle className="line-clamp-1">
          {course.emoji} {course.title}
        </CardTitle>
        <CardDescription>{course.date}</CardDescription>
        <CardDescription className="line-clamp-3 min-h-[4rem]">
          {course.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex w-full justify-start">
          <div className="flex flex-wrap justify-between gap-2 w-full max-w-55">
            <CardDescription className="flex items-center gap-1">
              <NotebookPen size={20} />
              222
            </CardDescription>
            <CardDescription className="flex items-center gap-1">
              <BookCheck size={20} />
              322
            </CardDescription>
            <CardDescription className="flex items-center gap-1">
              <FolderKanban size={20} />
              122
            </CardDescription>
            <CardDescription className="flex items-center gap-1">
              <Library size={20} />
              122
            </CardDescription>
          </div>
        </div>
        <div className="flex flex-nowrap gap-2 overflow-hidden">
          {course.tags.map((tag, index) => (
            <Badge variant={"outline"} key={index}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2 min-h-[1.5rem]">
        <Progress value={course.status ? 100 : 33}></Progress>
        {course.status && <CheckCircle2 />}
      </CardFooter>
    </Card>
  );
}
