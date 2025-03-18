import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  PaginationNextNoTitle,
  PaginationPreviousNoTitle,
} from "@/components/custom-ui/pagination";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const messages = [
  {
    from: "Admin",
    title: "Welcome to the Platform",
    content:
      "Thank you for joining our learning platform! Get started with your first course today.",
    date: "2025-03-18",
    status: false,
  },
  {
    from: "Math Instructor",
    title: "New Lesson Available",
    content: "We have added a new lesson on Calculus. Check it out now!",
    date: "2025-03-17",
    status: true,
  },
  {
    from: "System",
    title: "Password Change Alert",
    content:
      "Your password was recently changed. If this wasn't you, reset your password immediately.",
    date: "2025-03-16",
    status: true,
  },
  {
    from: "AI Assistant",
    title: "Your Weekly Progress Report",
    content: "You have completed 3 courses this week. Keep up the great work!",
    date: "2025-03-15",
    status: true,
  },
  {
    from: "Course Advisor",
    title: "Recommended Courses for You",
    content:
      "Based on your learning history, we recommend taking 'Machine Learning Basics' next.",
    date: "2025-03-14",
    status: true,
  },
];

function Inbox() {
  return (
    <div className="w-full h-[calc(100vh-92px)] rounded-xl flex justify-center items-center">
      <div className="w-full h-full rounded-xl columns-1 lg:columns-2">
        <div className="flex justify-center col-span-1 h-full w-full rounded-xl">
          <ScrollArea className="h-full w-full rounded-xl">
            <div
              className={
                "w-full h-full sticky top-0 left-0 z-10 flex flex-wrap gap-2 items-center p-2 rounded-xl border border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              }
            >
              <div className="flex flex-row flex-wrap gap-2 px-2 pt-2 w-full">
                <div className="w-full flex flex-row gap-2">
                  <Input className="w-full" placeholder={"Search"} />

                  <Button size={"icon"}>
                    <Search />
                  </Button>
                </div>
                <Pagination className="w-full bg-transparent">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPreviousNoTitle href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNextNoTitle href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 p-3">
              {messages.map((message, index) => (
                <Card
                  className={!message.status ? "bg-secondary" : ""}
                  key={index}
                >
                  <CardHeader>
                    <CardTitle>{message.from}</CardTitle>
                    <p>{message.title}</p>
                    <CardDescription className="line-clamp-2">
                      {message.content}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{message.date}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
