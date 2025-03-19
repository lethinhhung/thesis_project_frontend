import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lesson } from "@/interfaces/lesson";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function LessonCardLarge({
  lesson,
  className,
}: {
  lesson: Lesson;
  className?: string;
}) {
  const navigate = useNavigate();
  return (
    <Card
      key={lesson.title}
      className={cn(
        "duration-200 border-dashed hover:shadow-lg dark:hover:border-solid cursor-pointer ",
        className
      )}
      onClick={() => navigate("/course/hehe/lesson1")}
    >
      <CardHeader>
        <CardTitle>{lesson.title}</CardTitle>
        <CardDescription className="line-clamp-3 min-h-[4rem]">
          {lesson.description}
        </CardDescription>
        <CardDescription className="line-clamp-1">
          {lesson.date}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
